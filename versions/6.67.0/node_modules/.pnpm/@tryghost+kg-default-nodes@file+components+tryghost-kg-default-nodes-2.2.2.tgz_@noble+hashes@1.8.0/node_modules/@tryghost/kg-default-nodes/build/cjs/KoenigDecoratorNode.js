"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KoenigDecoratorNode = void 0;
exports.$isKoenigCard = $isKoenigCard;
/* c8 ignore start */
const lexical_1 = require("lexical");
class KoenigDecoratorNode extends lexical_1.DecoratorNode {
    static transform() {
        return null;
    }
    decorate() {
        return null;
    }
}
exports.KoenigDecoratorNode = KoenigDecoratorNode;
function $isKoenigCard(node) {
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
