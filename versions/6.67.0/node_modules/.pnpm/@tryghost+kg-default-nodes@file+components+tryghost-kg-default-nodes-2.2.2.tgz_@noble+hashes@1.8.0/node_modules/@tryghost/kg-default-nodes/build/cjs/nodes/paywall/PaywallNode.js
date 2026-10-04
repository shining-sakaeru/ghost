"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$createPaywallNode = exports.PaywallNode = void 0;
exports.$isPaywallNode = $isPaywallNode;
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const paywall_parser_js_1 = require("./paywall-parser.js");
const paywall_renderer_js_1 = require("./paywall-renderer.js");
const paywallProperties = {};
class PaywallNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'paywall',
    properties: paywallProperties,
    defaultRenderFn: paywall_renderer_js_1.renderPaywallNode
}) {
    static importDOM() {
        return (0, paywall_parser_js_1.parsePaywallNode)(this);
    }
}
exports.PaywallNode = PaywallNode;
const $createPaywallNode = (dataset = {}) => {
    return new PaywallNode(dataset);
};
exports.$createPaywallNode = $createPaywallNode;
function $isPaywallNode(node) {
    return node instanceof PaywallNode;
}
