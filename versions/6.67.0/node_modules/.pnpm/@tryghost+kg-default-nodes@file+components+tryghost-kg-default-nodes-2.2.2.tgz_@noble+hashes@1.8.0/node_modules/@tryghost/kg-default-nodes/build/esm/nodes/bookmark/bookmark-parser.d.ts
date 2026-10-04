import type { LexicalNode } from 'lexical';
export declare function parseBookmarkNode(BookmarkNode: new (data: Record<string, unknown>) => LexicalNode): {
    figure: (nodeElem: HTMLElement) => {
        conversion(domNode: HTMLElement): {
            node: LexicalNode;
        };
        priority: 1;
    } | null;
    div: (nodeElem: HTMLElement) => {
        conversion(domNode: HTMLElement): {
            node: LexicalNode;
        };
        priority: 1;
    } | null;
};
//# sourceMappingURL=bookmark-parser.d.ts.map