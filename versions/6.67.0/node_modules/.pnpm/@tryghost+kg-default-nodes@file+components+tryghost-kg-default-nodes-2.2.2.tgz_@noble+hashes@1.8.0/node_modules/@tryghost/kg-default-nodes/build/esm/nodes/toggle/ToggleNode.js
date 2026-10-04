import { generateDecoratorNode } from '../../generate-decorator-node.js';
import { parseToggleNode } from './toggle-parser.js';
import { renderToggleNode } from './toggle-renderer.js';
const toggleProperties = {
    heading: { default: '', urlType: 'html', wordCount: true },
    content: { default: '', urlType: 'html', wordCount: true }
};
export class ToggleNode extends generateDecoratorNode({
    nodeType: 'toggle',
    properties: toggleProperties,
    defaultRenderFn: renderToggleNode
}) {
    static importDOM() {
        return parseToggleNode(this);
    }
}
export const $createToggleNode = (dataset = {}) => {
    return new ToggleNode(dataset);
};
export function $isToggleNode(node) {
    return node instanceof ToggleNode;
}
//# sourceMappingURL=ToggleNode.js.map