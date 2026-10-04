"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlNode = void 0;
exports.$createHtmlNode = $createHtmlNode;
exports.$isHtmlNode = $isHtmlNode;
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const html_renderer_js_1 = require("./html-renderer.js");
const html_parser_js_1 = require("./html-parser.js");
const htmlProperties = {
    html: { default: '', urlType: 'html', wordCount: true }
};
class HtmlNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'html',
    hasVisibility: true,
    properties: htmlProperties,
    defaultRenderFn: html_renderer_js_1.renderHtmlNode
}) {
    static importDOM() {
        return (0, html_parser_js_1.parseHtmlNode)(this);
    }
    isEmpty() {
        return !this.__html;
    }
}
exports.HtmlNode = HtmlNode;
function $createHtmlNode(dataset = {}) {
    return new HtmlNode(dataset);
}
function $isHtmlNode(node) {
    return node instanceof HtmlNode;
}
