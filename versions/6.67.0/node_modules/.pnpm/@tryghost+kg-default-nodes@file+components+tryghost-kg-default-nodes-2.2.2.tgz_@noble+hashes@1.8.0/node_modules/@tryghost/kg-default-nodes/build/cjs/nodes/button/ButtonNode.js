"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$createButtonNode = exports.ButtonNode = void 0;
exports.$isButtonNode = $isButtonNode;
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const button_parser_js_1 = require("./button-parser.js");
const button_renderer_js_1 = require("./button-renderer.js");
const buttonProperties = {
    buttonText: { default: '' },
    alignment: { default: 'center' },
    buttonUrl: { default: '', urlType: 'url' }
};
class ButtonNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'button',
    properties: buttonProperties,
    defaultRenderFn: button_renderer_js_1.renderButtonNode
}) {
    static importDOM() {
        return (0, button_parser_js_1.parseButtonNode)(this);
    }
}
exports.ButtonNode = ButtonNode;
const $createButtonNode = (dataset = {}) => {
    return new ButtonNode(dataset);
};
exports.$createButtonNode = $createButtonNode;
function $isButtonNode(node) {
    return node instanceof ButtonNode;
}
