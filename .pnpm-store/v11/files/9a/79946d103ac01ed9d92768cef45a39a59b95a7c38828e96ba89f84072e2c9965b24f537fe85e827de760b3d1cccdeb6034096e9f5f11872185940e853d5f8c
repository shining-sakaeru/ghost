"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$createEmailNode = exports.EmailNode = void 0;
exports.$isEmailNode = $isEmailNode;
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const email_renderer_js_1 = require("./email-renderer.js");
const emailProperties = {
    html: { default: '', urlType: 'html' }
};
class EmailNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'email',
    properties: emailProperties,
    defaultRenderFn: email_renderer_js_1.renderEmailNode
}) {
}
exports.EmailNode = EmailNode;
const $createEmailNode = (dataset = {}) => {
    return new EmailNode(dataset);
};
exports.$createEmailNode = $createEmailNode;
function $isEmailNode(node) {
    return node instanceof EmailNode;
}
