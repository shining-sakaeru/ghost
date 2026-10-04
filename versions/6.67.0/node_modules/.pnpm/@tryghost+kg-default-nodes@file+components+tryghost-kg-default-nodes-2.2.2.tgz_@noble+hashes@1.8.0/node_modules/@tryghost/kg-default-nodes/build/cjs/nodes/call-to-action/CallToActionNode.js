"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$isCallToActionNode = exports.$createCallToActionNode = exports.CallToActionNode = void 0;
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const calltoaction_renderer_js_1 = require("./calltoaction-renderer.js");
const calltoaction_parser_js_1 = require("./calltoaction-parser.js");
const callToActionProperties = {
    layout: { default: 'minimal' },
    alignment: { default: 'left' },
    textValue: { default: '', wordCount: true },
    showButton: { default: true },
    showDividers: { default: true },
    buttonText: { default: 'Learn more' },
    buttonUrl: { default: '' },
    buttonColor: { default: '#000000' },
    buttonTextColor: { default: '#ffffff' },
    hasSponsorLabel: { default: true },
    sponsorLabel: { default: '<p><span style="white-space: pre-wrap;">SPONSORED</span></p>' },
    backgroundColor: { default: 'grey' },
    linkColor: { default: 'text' },
    imageUrl: { default: '' },
    imageWidth: { default: null },
    imageHeight: { default: null }
};
class CallToActionNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'call-to-action',
    hasVisibility: true,
    properties: callToActionProperties,
    defaultRenderFn: calltoaction_renderer_js_1.renderCallToActionNode
}) {
    static importDOM() {
        return (0, calltoaction_parser_js_1.parseCallToActionNode)(this);
    }
}
exports.CallToActionNode = CallToActionNode;
const $createCallToActionNode = (dataset) => {
    return new CallToActionNode(dataset);
};
exports.$createCallToActionNode = $createCallToActionNode;
const $isCallToActionNode = (node) => {
    return node instanceof CallToActionNode;
};
exports.$isCallToActionNode = $isCallToActionNode;
