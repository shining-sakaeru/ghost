import { generateDecoratorNode } from '../../generate-decorator-node.js';
import { parseEmbedNode } from './embed-parser.js';
import { renderEmbedNode } from './embed-renderer.js';
const embedProperties = {
    url: { default: '', urlType: 'url' },
    embedType: { default: '' },
    html: { default: '' },
    metadata: {
        get default() {
            return {};
        }
    },
    caption: { default: '', wordCount: true }
};
export class EmbedNode extends generateDecoratorNode({
    nodeType: 'embed',
    properties: embedProperties,
    defaultRenderFn: renderEmbedNode
}) {
    static importDOM() {
        return parseEmbedNode(this);
    }
    isEmpty() {
        return !this.__url && !this.__html;
    }
}
export const $createEmbedNode = (dataset = {}) => {
    return new EmbedNode(dataset);
};
export function $isEmbedNode(node) {
    return node instanceof EmbedNode;
}
//# sourceMappingURL=EmbedNode.js.map