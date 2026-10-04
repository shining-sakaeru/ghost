"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeBlockNode = void 0;
exports.$createCodeBlockNode = $createCodeBlockNode;
exports.$isCodeBlockNode = $isCodeBlockNode;
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const codeblock_parser_js_1 = require("./codeblock-parser.js");
const codeblock_renderer_js_1 = require("./codeblock-renderer.js");
const codeBlockProperties = {
    code: { default: '', wordCount: true },
    language: { default: '' },
    caption: { default: '', urlType: 'html', wordCount: true }
};
class CodeBlockNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'codeblock',
    properties: codeBlockProperties,
    defaultRenderFn: codeblock_renderer_js_1.renderCodeBlockNode
}) {
    static importDOM() {
        return (0, codeblock_parser_js_1.parseCodeBlockNode)(this);
    }
    isEmpty() {
        return !this.__code;
    }
}
exports.CodeBlockNode = CodeBlockNode;
function $createCodeBlockNode(dataset = {}) {
    return new CodeBlockNode(dataset);
}
function $isCodeBlockNode(node) {
    return node instanceof CodeBlockNode;
}
