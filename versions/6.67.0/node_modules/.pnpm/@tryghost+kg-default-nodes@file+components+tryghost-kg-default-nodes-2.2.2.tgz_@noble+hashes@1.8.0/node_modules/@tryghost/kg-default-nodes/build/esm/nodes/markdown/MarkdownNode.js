import { generateDecoratorNode } from '../../generate-decorator-node.js';
import { renderMarkdownNode } from './markdown-renderer.js';
const markdownProperties = {
    markdown: { default: '', urlType: 'markdown', wordCount: true }
};
export class MarkdownNode extends generateDecoratorNode({
    nodeType: 'markdown',
    properties: markdownProperties,
    defaultRenderFn: renderMarkdownNode
}) {
    isEmpty() {
        return !this.__markdown;
    }
}
export function $createMarkdownNode(dataset = {}) {
    return new MarkdownNode(dataset);
}
export function $isMarkdownNode(node) {
    return node instanceof MarkdownNode;
}
//# sourceMappingURL=MarkdownNode.js.map