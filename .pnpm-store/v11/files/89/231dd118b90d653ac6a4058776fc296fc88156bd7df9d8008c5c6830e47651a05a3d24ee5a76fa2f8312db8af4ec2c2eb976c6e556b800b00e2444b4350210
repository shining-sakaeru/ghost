"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedQuoteNode = exports.extendedQuoteNodeReplacement = void 0;
const rich_text_1 = require("@lexical/rich-text");
const lexical_1 = require("lexical");
// Since the QuoteNode is foundational to Lexical rich-text, only using a
// custom QuoteNode is undesirable as it means every package would need to
// be updated to work with the custom node. Instead we can use Lexical's node
// override/replacement mechanism to extend the default with our custom parsing
// logic.
//
// https://lexical.dev/docs/concepts/serialization#handling-extended-html-styling
exports.extendedQuoteNodeReplacement = { replace: rich_text_1.QuoteNode, with: () => new ExtendedQuoteNode() };
class ExtendedQuoteNode extends rich_text_1.QuoteNode {
    constructor(key) {
        super(key);
    }
    static getType() {
        return 'extended-quote';
    }
    static clone(node) {
        return new ExtendedQuoteNode(node.__key);
    }
    static importDOM() {
        const importers = rich_text_1.QuoteNode.importDOM();
        return {
            ...importers,
            blockquote: convertBlockquoteElement
        };
    }
    static importJSON(serializedNode) {
        return rich_text_1.QuoteNode.importJSON(serializedNode);
    }
    exportJSON() {
        const json = super.exportJSON();
        json.type = 'extended-quote';
        return json;
    }
    /* c8 ignore start */
    extractWithChild() {
        return true;
    }
}
exports.ExtendedQuoteNode = ExtendedQuoteNode;
function convertBlockquoteElement() {
    return {
        conversion: () => {
            const node = new ExtendedQuoteNode();
            return {
                node,
                after: (childNodes) => {
                    // Blockquotes can have nested paragraphs. In our original mobiledoc
                    // editor we parsed all of the nested paragraphs into a single blockquote
                    // separating each paragraph with two line breaks. We replicate that
                    // here so we don't have a breaking change in conversion behaviour.
                    const newChildNodes = [];
                    childNodes.forEach((child) => {
                        if ((0, lexical_1.$isParagraphNode)(child)) {
                            if (newChildNodes.length > 0) {
                                newChildNodes.push((0, lexical_1.$createLineBreakNode)());
                                newChildNodes.push((0, lexical_1.$createLineBreakNode)());
                            }
                            newChildNodes.push(...child.getChildren());
                        }
                        else {
                            newChildNodes.push(child);
                        }
                    });
                    return newChildNodes;
                }
            };
        },
        priority: 1
    };
}
