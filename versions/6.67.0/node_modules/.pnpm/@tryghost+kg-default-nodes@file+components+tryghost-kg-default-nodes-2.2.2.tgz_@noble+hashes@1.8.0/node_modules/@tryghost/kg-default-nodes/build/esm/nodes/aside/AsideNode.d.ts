import { ElementNode } from 'lexical';
import type { EditorConfig, LexicalEditor, SerializedElementNode } from 'lexical';
export declare class AsideNode extends ElementNode {
    static getType(): string;
    static clone(node: AsideNode): AsideNode;
    static get urlTransformMap(): {};
    constructor(key?: string);
    static importJSON(serializedNode: SerializedElementNode): AsideNode;
    exportJSON(): {
        children: import("lexical/LexicalNode.js").SerializedLexicalNode[];
        direction: 'ltr' | 'rtl' | null;
        format: import("lexical/index.js").ElementFormatType;
        indent: number;
        type: string;
        version: number;
    };
    static importDOM(): {
        blockquote: () => {
            conversion: (domNode: HTMLElement) => {
                node: import("lexical/LexicalNode.js").LexicalNode;
            } | null;
            priority: 0;
        };
    };
    createDOM(_config?: EditorConfig, _editor?: LexicalEditor): HTMLElement;
    updateDOM(): boolean;
    isInline(): boolean;
    extractWithChild(): boolean;
}
export declare function $createAsideNode(): AsideNode;
export declare function $isAsideNode(node: unknown): node is AsideNode;
//# sourceMappingURL=AsideNode.d.ts.map