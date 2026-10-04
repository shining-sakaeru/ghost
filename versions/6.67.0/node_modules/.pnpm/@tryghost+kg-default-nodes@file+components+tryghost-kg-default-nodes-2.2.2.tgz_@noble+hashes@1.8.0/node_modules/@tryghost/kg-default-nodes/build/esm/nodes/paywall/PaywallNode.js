import { generateDecoratorNode } from '../../generate-decorator-node.js';
import { parsePaywallNode } from './paywall-parser.js';
import { renderPaywallNode } from './paywall-renderer.js';
const paywallProperties = {};
export class PaywallNode extends generateDecoratorNode({
    nodeType: 'paywall',
    properties: paywallProperties,
    defaultRenderFn: renderPaywallNode
}) {
    static importDOM() {
        return parsePaywallNode(this);
    }
}
export const $createPaywallNode = (dataset = {}) => {
    return new PaywallNode(dataset);
};
export function $isPaywallNode(node) {
    return node instanceof PaywallNode;
}
//# sourceMappingURL=PaywallNode.js.map