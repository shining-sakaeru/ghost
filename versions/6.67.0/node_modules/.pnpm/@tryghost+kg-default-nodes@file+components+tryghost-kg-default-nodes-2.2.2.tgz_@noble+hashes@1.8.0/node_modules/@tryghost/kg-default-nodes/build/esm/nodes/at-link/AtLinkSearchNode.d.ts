import { TextNode } from 'lexical';
import type { EditorConfig } from 'lexical';
export declare class AtLinkSearchNode extends TextNode {
    __placeholder: string | null;
    defaultPlaceholder: string;
    static getType(): string;
    constructor(text: string, placeholder: string | null, key?: string);
    static clone(node: AtLinkSearchNode): AtLinkSearchNode;
    static importJSON(serializedNode: ReturnType<AtLinkSearchNode['exportJSON']>): AtLinkSearchNode;
    exportJSON(): {
        detail: number;
        format: number;
        mode: import("lexical").TextModeType;
        style: string;
        text: string;
        type: string;
        version: number;
        placeholder: string | null;
    };
    createDOM(config: EditorConfig): HTMLElement;
    updateDOM(prevNode: AtLinkSearchNode, dom: HTMLElement, config: EditorConfig): boolean;
    exportDOM(): {
        element: HTMLSpanElement;
        type: 'inner';
    };
    static importDOM(): null;
    canHaveFormat(): boolean;
    setPlaceholder(text: string | null): void;
    getPlaceholder(): string | null;
    getChildrenSize(): number;
    getChildAtIndex(): null;
}
export declare function $createAtLinkSearchNode(text?: string, placeholder?: string | null): AtLinkSearchNode;
export declare function $isAtLinkSearchNode(node: unknown): node is AtLinkSearchNode;
//# sourceMappingURL=AtLinkSearchNode.d.ts.map