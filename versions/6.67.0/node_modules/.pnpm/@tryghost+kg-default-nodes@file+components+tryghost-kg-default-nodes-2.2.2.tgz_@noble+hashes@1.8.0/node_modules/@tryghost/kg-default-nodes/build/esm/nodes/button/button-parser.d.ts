import type { LexicalNode } from 'lexical';
export declare function parseButtonNode(ButtonNode: new (data: Record<string, unknown>) => LexicalNode): {
    div: (nodeElem: HTMLElement) => {
        conversion(domNode: HTMLElement): {
            node: LexicalNode;
        };
        priority: 1;
    } | null;
};
//# sourceMappingURL=button-parser.d.ts.map