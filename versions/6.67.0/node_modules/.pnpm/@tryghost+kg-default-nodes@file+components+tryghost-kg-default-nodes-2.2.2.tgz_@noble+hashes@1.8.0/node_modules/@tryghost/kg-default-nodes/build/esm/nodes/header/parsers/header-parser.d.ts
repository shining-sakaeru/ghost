import type { LexicalNode } from 'lexical';
export declare function parseHeaderNode(HeaderNode: new (data: Record<string, unknown>) => LexicalNode): {
    div: (nodeElem: HTMLElement) => {
        conversion(domNode: HTMLElement): {
            node: LexicalNode;
        };
        priority: 1;
    } | null;
};
//# sourceMappingURL=header-parser.d.ts.map