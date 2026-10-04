"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownNode = void 0;
exports.$createMarkdownNode = $createMarkdownNode;
exports.$isMarkdownNode = $isMarkdownNode;
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const markdown_renderer_js_1 = require("./markdown-renderer.js");
const markdownProperties = {
    markdown: { default: '', urlType: 'markdown', wordCount: true }
};
class MarkdownNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'markdown',
    properties: markdownProperties,
    defaultRenderFn: markdown_renderer_js_1.renderMarkdownNode
}) {
    isEmpty() {
        return !this.__markdown;
    }
}
exports.MarkdownNode = MarkdownNode;
function $createMarkdownNode(dataset = {}) {
    return new MarkdownNode(dataset);
}
function $isMarkdownNode(node) {
    return node instanceof MarkdownNode;
}
