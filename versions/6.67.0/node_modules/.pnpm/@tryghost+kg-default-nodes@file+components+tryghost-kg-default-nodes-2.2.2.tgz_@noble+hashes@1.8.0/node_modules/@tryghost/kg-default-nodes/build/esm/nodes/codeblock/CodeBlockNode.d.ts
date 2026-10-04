import { type DecoratorNodeData } from '../../generate-decorator-node.js';
declare const codeBlockProperties: {
    code: {
        default: string;
        wordCount: true;
    };
    language: {
        default: string;
    };
    caption: {
        default: string;
        urlType: string;
        wordCount: true;
    };
};
export type CodeBlockData = DecoratorNodeData<typeof codeBlockProperties>;
declare const CodeBlockNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<{
    code: string;
    language: string;
    caption: string;
}, {
    element: HTMLElement;
    type: 'outer';
} | import("../../utils/render-empty-container.js").EmptyContainerOutput>;
export declare class CodeBlockNode extends CodeBlockNode_base {
    static importDOM(): {
        figure: (nodeElem: HTMLElement) => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            } | null;
            priority: 2;
        } | null;
        pre: () => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            } | null;
            priority: 1;
        };
    };
    isEmpty(): boolean;
}
export declare function $createCodeBlockNode(dataset?: CodeBlockData): CodeBlockNode;
export declare function $isCodeBlockNode(node: unknown): node is CodeBlockNode;
export {};
//# sourceMappingURL=CodeBlockNode.d.ts.map