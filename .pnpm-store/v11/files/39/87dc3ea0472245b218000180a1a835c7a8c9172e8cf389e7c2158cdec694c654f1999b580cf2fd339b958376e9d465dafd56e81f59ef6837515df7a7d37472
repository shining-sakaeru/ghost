import { generateDecoratorNode } from '../../generate-decorator-node.js';
import { renderEmailNode } from './email-renderer.js';
const emailProperties = {
    html: { default: '', urlType: 'html' }
};
export class EmailNode extends generateDecoratorNode({
    nodeType: 'email',
    properties: emailProperties,
    defaultRenderFn: renderEmailNode
}) {
}
export const $createEmailNode = (dataset = {}) => {
    return new EmailNode(dataset);
};
export function $isEmailNode(node) {
    return node instanceof EmailNode;
}
//# sourceMappingURL=EmailNode.js.map