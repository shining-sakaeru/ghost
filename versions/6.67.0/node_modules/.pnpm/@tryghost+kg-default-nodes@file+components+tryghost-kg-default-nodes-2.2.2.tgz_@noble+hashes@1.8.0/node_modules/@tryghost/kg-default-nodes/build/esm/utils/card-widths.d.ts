export declare const CARD_WIDTHS: readonly ['regular', 'wide', 'full'];
export type CardWidth = typeof CARD_WIDTHS[number];
export declare function isCardWidth(width: unknown): width is CardWidth;
export declare function normalizeCardWidth(width: unknown): CardWidth | undefined;
//# sourceMappingURL=card-widths.d.ts.map