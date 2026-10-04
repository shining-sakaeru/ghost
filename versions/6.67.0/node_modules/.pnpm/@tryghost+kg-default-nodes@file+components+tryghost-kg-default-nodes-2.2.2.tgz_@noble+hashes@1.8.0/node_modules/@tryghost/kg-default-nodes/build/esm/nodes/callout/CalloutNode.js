import { generateDecoratorNode } from '../../generate-decorator-node.js';
import { renderCalloutNode } from './callout-renderer.js';
import { parseCalloutNode } from './callout-parser.js';
const calloutProperties = {
    calloutText: { default: '', wordCount: true },
    calloutEmoji: { default: '💡' },
    backgroundColor: { default: 'blue' }
};
export class CalloutNode extends generateDecoratorNode({
    nodeType: 'callout',
    properties: calloutProperties,
    defaultRenderFn: renderCalloutNode
}) {
    /* override */
    constructor({ calloutText, calloutEmoji, backgroundColor } = {}, key) {
        super({}, key);
        this.__calloutText = calloutText || '';
        this.__calloutEmoji = calloutEmoji ?? '💡';
        this.__backgroundColor = backgroundColor || 'blue';
    }
    static importDOM() {
        return parseCalloutNode(this);
    }
}
export function $isCalloutNode(node) {
    return node instanceof CalloutNode;
}
export const $createCalloutNode = (dataset = {}) => {
    return new CalloutNode(dataset);
};
//# sourceMappingURL=CalloutNode.js.map