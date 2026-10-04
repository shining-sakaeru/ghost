import { QuoteNode } from '@lexical/rich-text';
import type { SerializedQuoteNode } from '@lexical/rich-text';
import type { LexicalNode } from 'lexical';
export declare const extendedQuoteNodeReplacement: {
    replace: typeof QuoteNode;
    with: () => ExtendedQuoteNode;
};
export declare class ExtendedQuoteNode extends QuoteNode {
    constructor(key?: string);
    static getType(): string;
    static clone(node: ExtendedQuoteNode): ExtendedQuoteNode;
    static importDOM(): {
        blockquote: typeof convertBlockquoteElement;
    };
    static importJSON(serializedNode: SerializedQuoteNode): QuoteNode;
    exportJSON(): import("lexical").SerializedElementNode;
    extractWithChild(): boolean;
}
declare function convertBlockquoteElement(): {
    conversion: () => {
        node: ExtendedQuoteNode;
        after: (childNodes: LexicalNode[]) => LexicalNode[];
    };
    priority: 1;
};
export {};
//# sourceMappingURL=ExtendedQuoteNode.d.ts.map