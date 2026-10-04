/* c8 ignore start */
import { DecoratorNode } from 'lexical';
export class KoenigDecoratorNode extends DecoratorNode {
    static transform() {
        return null;
    }
    decorate() {
        return null;
    }
}
export function $isKoenigCard(node) {
    if (!(node instanceof KoenigDecoratorNode)) {
        return false;
    }
    const card = node;
    return typeof card.isKoenigCard === 'function' &&
        card.isKoenigCard() === true &&
        typeof card.exportDOM === 'function' &&
        typeof card.getDataset === 'function' &&
        typeof card.hasDynamicData === 'function' &&
        typeof card.hasEditMode === 'function' &&
        typeof card.getIsVisibilityActive === 'function';
}
/* c8 ignore end */
//# sourceMappingURL=KoenigDecoratorNode.js.map