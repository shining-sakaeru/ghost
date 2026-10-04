import type { LexicalNode } from 'lexical';
export declare function parseCalloutNode(CalloutNode: new (data: Record<string, unknown>) => LexicalNode): {
    div: (nodeElem: HTMLElement) => {
        conversion(domNode: HTMLElement): {
            node: LexicalNode;
        };
        priority: 1;
    } | null;
};
//# sourceMappingURL=callout-parser.d.ts.map