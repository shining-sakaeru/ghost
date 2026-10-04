import { generateDecoratorNode } from '../../generate-decorator-node.js';
import { parseButtonNode } from './button-parser.js';
import { renderButtonNode } from './button-renderer.js';
const buttonProperties = {
    buttonText: { default: '' },
    alignment: { default: 'center' },
    buttonUrl: { default: '', urlType: 'url' }
};
export class ButtonNode extends generateDecoratorNode({
    nodeType: 'button',
    properties: buttonProperties,
    defaultRenderFn: renderButtonNode
}) {
    static importDOM() {
        return parseButtonNode(this);
    }
}
export const $createButtonNode = (dataset = {}) => {
    return new ButtonNode(dataset);
};
export function $isButtonNode(node) {
    return node instanceof ButtonNode;
}
//# sourceMappingURL=ButtonNode.js.map