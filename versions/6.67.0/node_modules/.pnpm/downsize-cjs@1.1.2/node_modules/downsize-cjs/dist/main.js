var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var main_exports = {};
__export(main_exports, {
  default: () => downsize
});
module.exports = __toCommonJS(main_exports);
var voidElements = [
  "area",
  "base",
  "br",
  "col",
  "command",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];
var defaultContextualTags = [
  "p",
  "ul",
  "ol",
  "pre",
  "blockquote",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6"
];
function downsize(text, inputOptions, offset) {
  var stack = [], pointer = 0, tagName = "", parseState = 0, trackedState = { unitCount: 0, countState: false }, tagBuffer = "", truncatedText = "";
  var COUNT_CHARACTERS = -1, COUNT_WORDS = -2;
  var newRegExp = new RegExp(/[\p{L}0-9]/u);
  var options = inputOptions && typeof inputOptions === "object" ? inputOptions : {}, wordChars = options.wordChars instanceof RegExp ? options.wordChars : newRegExp;
  options.countingType = !isNaN(Number(options.words)) ? COUNT_WORDS : COUNT_CHARACTERS;
  if (options.round) {
    options.contextualTags = defaultContextualTags;
  }
  options.keepContext = !!options.contextualTags;
  options.contextualTags = options.keepContext && Array.isArray(options.contextualTags) ? options.contextualTags : [];
  options.limit = options.countingType === COUNT_WORDS ? Number(options.words) : Number(options.characters);
  options.limit = isNaN(options.limit) ? Infinity : options.limit;
  function isAtLimit() {
    var stackIndex = 0;
    if (trackedState.unitCount < options.limit) {
      return false;
    }
    if (!options.keepContext) {
      return true;
    }
    for (; stackIndex < stack.length; stackIndex++) {
      if (~options.contextualTags.indexOf(getTagName(stack[stackIndex]))) {
        return false;
      }
    }
    return true;
  }
  function count(chr) {
    switch (options.countingType) {
      case COUNT_WORDS:
        if (!!wordChars.test(chr + "") !== trackedState.countState) {
          trackedState.countState = !!wordChars.test(chr + "");
          if (!trackedState.countState) {
            trackedState.unitCount++;
          }
        }
        break;
      case COUNT_CHARACTERS:
        if (chr !== "") {
          trackedState.unitCount++;
        }
        break;
    }
  }
  var PARSER_UNINITIALISED = 0, PARSER_TAG_COMMENCED = 1, PARSER_TAG_STRING = -1, PARSER_TAG_STRING_SINGLE = -2, PARSER_COMMENT = -3;
  var exit = false;
  for (; pointer < text.length && !exit; pointer++) {
    if (parseState !== PARSER_UNINITIALISED) {
      tagBuffer += text[pointer];
    }
    switch (text[pointer]) {
      case "<":
        if (parseState === PARSER_UNINITIALISED && pointer + 1 < text.length && text[pointer + 1].match(/[a-z0-9\-\_\/\!]/)) {
          if (isAtLimit()) {
            exit = true;
            break;
          }
          parseState = PARSER_TAG_COMMENCED;
          tagBuffer += text[pointer];
        }
        break;
      case "!":
        if (parseState === PARSER_TAG_COMMENCED && text[pointer - 1] === "<") {
          parseState = PARSER_COMMENT;
        }
        break;
      case "-":
        if (parseState === PARSER_COMMENT)
          parseState = PARSER_COMMENT;
        break;
      case '"':
        if (parseState === PARSER_TAG_STRING) {
          parseState = PARSER_TAG_COMMENCED;
        } else if (parseState === PARSER_TAG_STRING_SINGLE) {
          break;
        } else if (parseState !== PARSER_UNINITIALISED) {
          parseState = PARSER_TAG_STRING;
        }
        break;
      case "'":
        if (parseState === PARSER_TAG_STRING_SINGLE) {
          parseState = PARSER_TAG_COMMENCED;
        } else if (parseState === PARSER_TAG_STRING) {
          break;
        } else if (parseState !== PARSER_UNINITIALISED) {
          parseState = PARSER_TAG_STRING_SINGLE;
        }
        break;
      case ">":
        if (parseState === PARSER_TAG_COMMENCED) {
          parseState = PARSER_UNINITIALISED;
          truncatedText += tagBuffer;
          tagName = getTagName(tagBuffer);
          if (tagBuffer.match(/<\s*\//)) {
            if (getTagName(stack[stack.length - 1]) === tagName) {
              stack.pop();
            }
          } else {
            if (voidElements.indexOf(tagName) < 0 && !tagBuffer.match(/\/\s*>$/)) {
              stack.push(tagBuffer);
            }
          }
          tagBuffer = "";
          if (!isAtLimit()) {
            count("");
            continue;
          }
        } else if (parseState === PARSER_COMMENT) {
          if (text.substring(pointer - 2, pointer) === "--") {
            parseState = PARSER_UNINITIALISED;
            truncatedText += tagBuffer;
            tagBuffer = "";
            if (!isAtLimit()) {
              count("");
              continue;
            }
          }
        }
        break;
    }
    if (parseState === PARSER_UNINITIALISED) {
      if (isAtLimit()) {
        break;
      }
      count(text[pointer]);
      truncatedText += text[pointer];
    }
  }
  truncatedText = truncatedText.trim();
  if (options.append && isAtLimit()) {
    truncatedText += options.append;
  }
  truncatedText += tagBuffer;
  while (stack.length) {
    truncatedText += closeTag(stack.pop());
  }
  return truncatedText;
}
;
function closeTag(openingTag) {
  var tagName = getTagName(openingTag);
  if (!tagName) {
    return "";
  }
  return "</" + tagName + ">";
}
function getTagName(tag) {
  var tagName = (tag || "").match(/<\/*([a-z0-9\:\-\_]+)/i);
  return tagName ? tagName[1] : null;
}
