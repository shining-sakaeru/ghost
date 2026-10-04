import { generateDecoratorNode } from '../../generate-decorator-node.js';
import { renderEmailCtaNode } from './email-cta-renderer.js';
const emailCtaProperties = {
    alignment: { default: 'left' },
    buttonText: { default: '' },
    buttonUrl: { default: '', urlType: 'url' },
    html: { default: '', urlType: 'html' },
    segment: { default: 'status:free' },
    showButton: { default: false },
    showDividers: { default: true }
};
export class EmailCtaNode extends generateDecoratorNode({
    nodeType: 'email-cta',
    properties: emailCtaProperties,
    defaultRenderFn: renderEmailCtaNode
}) {
}
export const $createEmailCtaNode = (dataset = {}) => {
    return new EmailCtaNode(dataset);
};
export function $isEmailCtaNode(node) {
    return node instanceof EmailCtaNode;
}
//# sourceMappingURL=EmailCtaNode.js.map