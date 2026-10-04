import { TextNode } from 'lexical';
import type { EditorConfig, SerializedTextNode, TextModeType } from 'lexical';
export declare class TKNode extends TextNode {
    static getType(): string;
    static clone(node: TKNode): TKNode;
    constructor(text: string, key?: string);
    createDOM(config: EditorConfig): HTMLElement;
    static importJSON(serializedNode: SerializedTextNode): TKNode;
    exportJSON(): {
        detail: number;
        format: number;
        mode: TextModeType;
        style: string;
        text: string;
        version: number;
        type: string;
    };
    canInsertTextBefore(): boolean;
    isTextEntity(): boolean;
}
/**
 * Generates a TKNode, which is a string following the format of a # followed by some text, eg. #lexical.
 * @param text - The text used inside the TKNode.
 * @returns - The TKNode with the embedded text.
 */
export declare function $createTKNode(text: string): import("lexical").LexicalNode;
/**
 * Determines if node is a TKNode.
 * @param node - The node to be checked.
 * @returns true if node is a TKNode, false otherwise.
 */
export declare function $isTKNode(node: unknown): node is TKNode;
//# sourceMappingURL=TKNode.d.ts.map