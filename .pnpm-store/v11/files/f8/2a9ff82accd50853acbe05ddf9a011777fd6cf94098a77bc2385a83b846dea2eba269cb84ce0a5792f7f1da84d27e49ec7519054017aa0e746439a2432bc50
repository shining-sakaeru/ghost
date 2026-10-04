"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$createEmbedNode = exports.EmbedNode = void 0;
exports.$isEmbedNode = $isEmbedNode;
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const embed_parser_js_1 = require("./embed-parser.js");
const embed_renderer_js_1 = require("./embed-renderer.js");
const embedProperties = {
    url: { default: '', urlType: 'url' },
    embedType: { default: '' },
    html: { default: '' },
    metadata: {
        get default() {
            return {};
        }
    },
    caption: { default: '', wordCount: true }
};
class EmbedNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'embed',
    properties: embedProperties,
    defaultRenderFn: embed_renderer_js_1.renderEmbedNode
}) {
    static importDOM() {
        return (0, embed_parser_js_1.parseEmbedNode)(this);
    }
    isEmpty() {
        return !this.__url && !this.__html;
    }
}
exports.EmbedNode = EmbedNode;
const $createEmbedNode = (dataset = {}) => {
    return new EmbedNode(dataset);
};
exports.$createEmbedNode = $createEmbedNode;
function $isEmbedNode(node) {
    return node instanceof EmbedNode;
}
