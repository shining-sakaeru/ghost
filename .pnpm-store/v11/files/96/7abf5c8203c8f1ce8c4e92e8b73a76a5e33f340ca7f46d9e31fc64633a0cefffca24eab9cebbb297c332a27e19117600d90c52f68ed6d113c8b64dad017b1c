import { TextNode } from 'lexical';
import type { LexicalNode, SerializedTextNode } from 'lexical';
export declare const extendedTextNodeReplacement: {
    replace: typeof TextNode;
    with: (node: TextNode) => ExtendedTextNode;
};
export declare class ExtendedTextNode extends TextNode {
    constructor(text: string, key?: string);
    static getType(): string;
    static clone(node: ExtendedTextNode): ExtendedTextNode;
    static importDOM(): {
        span: () => {
            conversion: (node: HTMLElement) => {
                after?: (childLexicalNodes: Array<LexicalNode>) => Array<LexicalNode>;
                node: null | LexicalNode | Array<LexicalNode>;
                forChild: (lexicalNode: LexicalNode, parent: LexicalNode | null | undefined) => LexicalNode | TextNode | null | undefined;
            } | null;
            priority: 1;
        };
    };
    static importJSON(serializedNode: SerializedTextNode): ExtendedTextNode;
    exportJSON(): SerializedTextNode;
    isSimpleText(): boolean;
    isInline(): boolean;
}
//# sourceMappingURL=ExtendedTextNode.d.ts.map