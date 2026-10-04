"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$createEmailCtaNode = exports.EmailCtaNode = void 0;
exports.$isEmailCtaNode = $isEmailCtaNode;
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const email_cta_renderer_js_1 = require("./email-cta-renderer.js");
const emailCtaProperties = {
    alignment: { default: 'left' },
    buttonText: { default: '' },
    buttonUrl: { default: '', urlType: 'url' },
    html: { default: '', urlType: 'html' },
    segment: { default: 'status:free' },
    showButton: { default: false },
    showDividers: { default: true }
};
class EmailCtaNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'email-cta',
    properties: emailCtaProperties,
    defaultRenderFn: email_cta_renderer_js_1.renderEmailCtaNode
}) {
}
exports.EmailCtaNode = EmailCtaNode;
const $createEmailCtaNode = (dataset = {}) => {
    return new EmailCtaNode(dataset);
};
exports.$createEmailCtaNode = $createEmailCtaNode;
function $isEmailCtaNode(node) {
    return node instanceof EmailCtaNode;
}
