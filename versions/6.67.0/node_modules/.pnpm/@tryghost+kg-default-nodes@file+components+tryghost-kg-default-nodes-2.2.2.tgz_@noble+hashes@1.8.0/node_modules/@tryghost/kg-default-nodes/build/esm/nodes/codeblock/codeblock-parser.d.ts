import type { LexicalNode } from 'lexical';
export declare function parseCodeBlockNode(CodeBlockNode: new (data: Record<string, unknown>) => LexicalNode): {
    figure: (nodeElem: HTMLElement) => {
        conversion(domNode: HTMLElement): {
            node: LexicalNode;
        } | null;
        priority: 2;
    } | null;
    pre: () => {
        conversion(domNode: HTMLElement): {
            node: LexicalNode;
        } | null;
        priority: 1;
    };
};
//# sourceMappingURL=codeblock-parser.d.ts.map