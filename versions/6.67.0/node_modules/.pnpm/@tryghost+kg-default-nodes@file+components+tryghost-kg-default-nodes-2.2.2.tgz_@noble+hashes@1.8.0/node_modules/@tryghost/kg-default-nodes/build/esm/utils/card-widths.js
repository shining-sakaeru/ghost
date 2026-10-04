export const CARD_WIDTHS = ['regular', 'wide', 'full'];
export function isCardWidth(width) {
    return typeof width === 'string' && CARD_WIDTHS.includes(width);
}
export function normalizeCardWidth(width) {
    return isCardWidth(width) ? width : undefined;
}
//# sourceMappingURL=card-widths.js.map