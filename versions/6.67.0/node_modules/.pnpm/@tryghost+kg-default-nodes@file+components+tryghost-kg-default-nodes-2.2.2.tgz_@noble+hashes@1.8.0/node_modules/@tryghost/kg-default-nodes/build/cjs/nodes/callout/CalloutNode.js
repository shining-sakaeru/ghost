"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$createCalloutNode = exports.CalloutNode = void 0;
exports.$isCalloutNode = $isCalloutNode;
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const callout_renderer_js_1 = require("./callout-renderer.js");
const callout_parser_js_1 = require("./callout-parser.js");
const calloutProperties = {
    calloutText: { default: '', wordCount: true },
    calloutEmoji: { default: '💡' },
    backgroundColor: { default: 'blue' }
};
class CalloutNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'callout',
    properties: calloutProperties,
    defaultRenderFn: callout_renderer_js_1.renderCalloutNode
}) {
    /* override */
    constructor({ calloutText, calloutEmoji, backgroundColor } = {}, key) {
        super({}, key);
        this.__calloutText = calloutText || '';
        this.__calloutEmoji = calloutEmoji ?? '💡';
        this.__backgroundColor = backgroundColor || 'blue';
    }
    static importDOM() {
        return (0, callout_parser_js_1.parseCalloutNode)(this);
    }
}
exports.CalloutNode = CalloutNode;
function $isCalloutNode(node) {
    return node instanceof CalloutNode;
}
const $createCalloutNode = (dataset = {}) => {
    return new CalloutNode(dataset);
};
exports.$createCalloutNode = $createCalloutNode;
