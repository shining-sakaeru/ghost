"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CARD_WIDTHS = void 0;
exports.isCardWidth = isCardWidth;
exports.normalizeCardWidth = normalizeCardWidth;
exports.CARD_WIDTHS = ['regular', 'wide', 'full'];
function isCardWidth(width) {
    return typeof width === 'string' && exports.CARD_WIDTHS.includes(width);
}
function normalizeCardWidth(width) {
    return isCardWidth(width) ? width : undefined;
}
