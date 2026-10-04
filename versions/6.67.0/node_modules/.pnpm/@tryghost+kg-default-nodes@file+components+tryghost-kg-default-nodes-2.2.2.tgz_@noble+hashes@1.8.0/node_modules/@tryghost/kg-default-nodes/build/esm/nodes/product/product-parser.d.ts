import type { LexicalNode } from 'lexical';
export declare function parseProductNode(ProductNode: new (data: Record<string, unknown>) => LexicalNode): {
    div: (nodeElem: HTMLElement) => {
        conversion(domNode: HTMLElement): {
            node: LexicalNode;
        } | null;
        priority: 1;
    } | null;
};
//# sourceMappingURL=product-parser.d.ts.map