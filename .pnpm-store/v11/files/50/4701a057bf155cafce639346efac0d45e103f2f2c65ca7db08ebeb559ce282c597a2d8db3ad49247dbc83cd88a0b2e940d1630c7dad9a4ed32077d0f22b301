"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$createToggleNode = exports.ToggleNode = void 0;
exports.$isToggleNode = $isToggleNode;
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const toggle_parser_js_1 = require("./toggle-parser.js");
const toggle_renderer_js_1 = require("./toggle-renderer.js");
const toggleProperties = {
    heading: { default: '', urlType: 'html', wordCount: true },
    content: { default: '', urlType: 'html', wordCount: true }
};
class ToggleNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'toggle',
    properties: toggleProperties,
    defaultRenderFn: toggle_renderer_js_1.renderToggleNode
}) {
    static importDOM() {
        return (0, toggle_parser_js_1.parseToggleNode)(this);
    }
}
exports.ToggleNode = ToggleNode;
const $createToggleNode = (dataset = {}) => {
    return new ToggleNode(dataset);
};
exports.$createToggleNode = $createToggleNode;
function $isToggleNode(node) {
    return node instanceof ToggleNode;
}
