import { generateDecoratorNode } from '../../generate-decorator-node.js';
import { renderCallToActionNode } from './calltoaction-renderer.js';
import { parseCallToActionNode } from './calltoaction-parser.js';
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
export class CallToActionNode extends generateDecoratorNode({
    nodeType: 'call-to-action',
    hasVisibility: true,
    properties: callToActionProperties,
    defaultRenderFn: renderCallToActionNode
}) {
    static importDOM() {
        return parseCallToActionNode(this);
    }
}
export const $createCallToActionNode = (dataset) => {
    return new CallToActionNode(dataset);
};
export const $isCallToActionNode = (node) => {
    return node instanceof CallToActionNode;
};
//# sourceMappingURL=CallToActionNode.js.map