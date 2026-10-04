import { ElementNode } from 'lexical';
import type { EditorConfig } from 'lexical';
export declare class AtLinkNode extends ElementNode {
    __linkFormat: number | null;
    static getType(): string;
    constructor(linkFormat: number | null, key?: string);
    static clone(node: AtLinkNode): AtLinkNode;
    static importJSON(serializedNode: ReturnType<AtLinkNode['exportJSON']>): AtLinkNode;
    exportJSON(): {
        children: import("lexical").SerializedLexicalNode[];
        direction: 'ltr' | 'rtl' | null;
        format: import("lexical").ElementFormatType;
        indent: number;
        type: string;
        version: number;
        linkFormat: number | null;
    };
    createDOM(config: EditorConfig): HTMLSpanElement;
    updateDOM(): boolean;
    exportDOM(): {
        element: HTMLSpanElement;
        type: 'inner';
    };
    static importDOM(): null;
    getTextContent(): string;
    isInline(): boolean;
    canBeEmpty(): boolean;
    setLinkFormat(linkFormat: number | null): void;
    getLinkFormat(): number | null;
}
export declare function $createAtLinkNode(linkFormat?: number | null): AtLinkNode;
export declare function $isAtLinkNode(node: unknown): node is AtLinkNode;
//# sourceMappingURL=AtLinkNode.d.ts.map