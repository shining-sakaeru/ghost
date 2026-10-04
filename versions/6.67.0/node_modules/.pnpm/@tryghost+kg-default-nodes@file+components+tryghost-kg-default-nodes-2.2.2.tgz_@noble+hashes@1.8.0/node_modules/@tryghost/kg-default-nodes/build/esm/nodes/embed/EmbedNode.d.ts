import { type DecoratorNodeData } from '../../generate-decorator-node.js';
declare const embedProperties: {
    url: {
        default: string;
        urlType: string;
    };
    embedType: {
        default: string;
    };
    html: {
        default: string;
    };
    metadata: {
        readonly default: Record<string, unknown>;
    };
    caption: {
        default: string;
        wordCount: true;
    };
};
export type EmbedData = DecoratorNodeData<typeof embedProperties>;
declare const EmbedNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<{
    url: string;
    embedType: string;
    html: string;
    metadata: Record<string, unknown>;
    caption: string;
}, {
    element: HTMLElement;
    type: 'outer';
} | import("../../utils/render-empty-container.js").EmptyContainerOutput>;
export declare class EmbedNode extends EmbedNode_base {
    static importDOM(): {
        figure: (nodeElem: HTMLElement) => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            } | null;
            priority: 1;
        } | null;
        iframe: (nodeElem: HTMLElement) => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            } | null;
            priority: 1;
        } | null;
    };
    isEmpty(): boolean;
}
export declare const $createEmbedNode: (dataset?: EmbedData) => EmbedNode;
export declare function $isEmbedNode(node: unknown): node is EmbedNode;
export {};
//# sourceMappingURL=EmbedNode.d.ts.map