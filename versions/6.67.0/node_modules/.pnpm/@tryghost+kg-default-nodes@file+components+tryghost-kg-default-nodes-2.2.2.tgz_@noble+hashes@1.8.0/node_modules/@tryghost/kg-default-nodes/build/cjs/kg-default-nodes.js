"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_NODES = exports.DEFAULT_CONFIG = exports.serializers = exports.utils = void 0;
__exportStar(require("./export-dom.js"), exports);
const image = __importStar(require("./nodes/image/ImageNode.js"));
const codeblock = __importStar(require("./nodes/codeblock/CodeBlockNode.js"));
const markdown = __importStar(require("./nodes/markdown/MarkdownNode.js"));
const video = __importStar(require("./nodes/video/VideoNode.js"));
const audio = __importStar(require("./nodes/audio/AudioNode.js"));
const callout = __importStar(require("./nodes/callout/CalloutNode.js"));
const callToAction = __importStar(require("./nodes/call-to-action/CallToActionNode.js"));
const aside = __importStar(require("./nodes/aside/AsideNode.js"));
const horizontalrule = __importStar(require("./nodes/horizontalrule/HorizontalRuleNode.js"));
const html = __importStar(require("./nodes/html/HtmlNode.js"));
const toggle = __importStar(require("./nodes/toggle/ToggleNode.js"));
const button = __importStar(require("./nodes/button/ButtonNode.js"));
const bookmark = __importStar(require("./nodes/bookmark/BookmarkNode.js"));
const file = __importStar(require("./nodes/file/FileNode.js"));
const header = __importStar(require("./nodes/header/HeaderNode.js"));
const paywall = __importStar(require("./nodes/paywall/PaywallNode.js"));
const product = __importStar(require("./nodes/product/ProductNode.js"));
const embed = __importStar(require("./nodes/embed/EmbedNode.js"));
const email = __importStar(require("./nodes/email/EmailNode.js"));
const gallery = __importStar(require("./nodes/gallery/GalleryNode.js"));
const emailCta = __importStar(require("./nodes/email-cta/EmailCtaNode.js"));
const signup = __importStar(require("./nodes/signup/SignupNode.js"));
const transistor = __importStar(require("./nodes/transistor/TransistorNode.js"));
const textnode = __importStar(require("./nodes/ExtendedTextNode.js"));
const headingnode = __importStar(require("./nodes/ExtendedHeadingNode.js"));
const quotenode = __importStar(require("./nodes/ExtendedQuoteNode.js"));
const tk = __importStar(require("./nodes/TKNode.js"));
const atLink = __importStar(require("./nodes/at-link/index.js"));
const zwnj = __importStar(require("./nodes/zwnj/ZWNJNode.js"));
const linebreak_js_1 = __importDefault(require("./serializers/linebreak.js"));
const paragraph_js_1 = __importDefault(require("./serializers/paragraph.js"));
// re-export everything for easier importing
__exportStar(require("./KoenigDecoratorNode.js"), exports);
__exportStar(require("./nodes/image/ImageNode.js"), exports);
__exportStar(require("./nodes/codeblock/CodeBlockNode.js"), exports);
__exportStar(require("./nodes/markdown/MarkdownNode.js"), exports);
__exportStar(require("./nodes/video/VideoNode.js"), exports);
__exportStar(require("./nodes/audio/AudioNode.js"), exports);
__exportStar(require("./nodes/callout/CalloutNode.js"), exports);
__exportStar(require("./nodes/aside/AsideNode.js"), exports);
__exportStar(require("./nodes/horizontalrule/HorizontalRuleNode.js"), exports);
__exportStar(require("./nodes/html/HtmlNode.js"), exports);
__exportStar(require("./nodes/toggle/ToggleNode.js"), exports);
__exportStar(require("./nodes/button/ButtonNode.js"), exports);
__exportStar(require("./nodes/bookmark/BookmarkNode.js"), exports);
__exportStar(require("./nodes/file/FileNode.js"), exports);
__exportStar(require("./nodes/header/HeaderNode.js"), exports);
__exportStar(require("./nodes/paywall/PaywallNode.js"), exports);
__exportStar(require("./nodes/product/ProductNode.js"), exports);
__exportStar(require("./nodes/embed/EmbedNode.js"), exports);
__exportStar(require("./nodes/email/EmailNode.js"), exports);
__exportStar(require("./nodes/gallery/GalleryNode.js"), exports);
__exportStar(require("./nodes/email-cta/EmailCtaNode.js"), exports);
__exportStar(require("./nodes/signup/SignupNode.js"), exports);
__exportStar(require("./nodes/transistor/TransistorNode.js"), exports);
__exportStar(require("./nodes/call-to-action/CallToActionNode.js"), exports);
__exportStar(require("./nodes/ExtendedTextNode.js"), exports);
__exportStar(require("./nodes/ExtendedHeadingNode.js"), exports);
__exportStar(require("./nodes/ExtendedQuoteNode.js"), exports);
__exportStar(require("./nodes/TKNode.js"), exports);
__exportStar(require("./nodes/at-link/index.js"), exports);
__exportStar(require("./nodes/zwnj/ZWNJNode.js"), exports);
__exportStar(require("./utils/card-widths.js"), exports);
// export utility functions that are useful in other packages or tests
const visibilityUtils = __importStar(require("./utils/visibility.js"));
const taggedTemplateFns = __importStar(require("./utils/tagged-template-fns.js"));
const replacementStrings = __importStar(require("./utils/replacement-strings.js"));
const generate_decorator_node_js_1 = require("./generate-decorator-node.js");
const rgb_to_hex_js_1 = require("./utils/rgb-to-hex.js");
exports.utils = {
    generateDecoratorNode: generate_decorator_node_js_1.generateDecoratorNode,
    visibility: visibilityUtils,
    rgbToHex: rgb_to_hex_js_1.rgbToHex,
    taggedTemplateFns,
    replacementStrings
};
exports.serializers = {
    linebreak: linebreak_js_1.default,
    paragraph: paragraph_js_1.default
};
exports.DEFAULT_CONFIG = {
    html: {
        import: {
            ...exports.serializers.linebreak.import,
            ...exports.serializers.paragraph.import
        }
    }
};
// export convenience objects for use elsewhere
exports.DEFAULT_NODES = [
    textnode.ExtendedTextNode,
    textnode.extendedTextNodeReplacement,
    headingnode.ExtendedHeadingNode,
    headingnode.extendedHeadingNodeReplacement,
    quotenode.ExtendedQuoteNode,
    quotenode.extendedQuoteNodeReplacement,
    codeblock.CodeBlockNode,
    image.ImageNode,
    markdown.MarkdownNode,
    video.VideoNode,
    audio.AudioNode,
    callout.CalloutNode,
    callToAction.CallToActionNode,
    aside.AsideNode,
    horizontalrule.HorizontalRuleNode,
    html.HtmlNode,
    file.FileNode,
    toggle.ToggleNode,
    button.ButtonNode,
    header.HeaderNode,
    bookmark.BookmarkNode,
    paywall.PaywallNode,
    product.ProductNode,
    embed.EmbedNode,
    email.EmailNode,
    gallery.GalleryNode,
    emailCta.EmailCtaNode,
    signup.SignupNode,
    transistor.TransistorNode,
    tk.TKNode,
    atLink.AtLinkNode,
    atLink.AtLinkSearchNode,
    zwnj.ZWNJNode
];
