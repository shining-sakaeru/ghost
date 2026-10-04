import { generateDecoratorNode } from '../../generate-decorator-node.js';
import { renderHorizontalRuleNode } from './horizontalrule-renderer.js';
import { parseHorizontalRuleNode } from './horizontalrule-parser.js';
export class HorizontalRuleNode extends generateDecoratorNode({
    nodeType: 'horizontalrule',
    defaultRenderFn: renderHorizontalRuleNode
}) {
    static importDOM() {
        return parseHorizontalRuleNode(this);
    }
    getTextContent() {
        return '---\n\n';
    }
    hasEditMode() {
        return false;
    }
}
export function $createHorizontalRuleNode() {
    return new HorizontalRuleNode();
}
export function $isHorizontalRuleNode(node) {
    return node instanceof HorizontalRuleNode;
}
//# sourceMappingURL=HorizontalRuleNode.js.map