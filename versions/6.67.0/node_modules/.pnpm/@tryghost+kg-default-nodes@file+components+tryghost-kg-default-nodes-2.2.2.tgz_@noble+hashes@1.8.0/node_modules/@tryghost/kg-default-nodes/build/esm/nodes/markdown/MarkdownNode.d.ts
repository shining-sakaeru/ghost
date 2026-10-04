import { type DecoratorNodeData } from '../../generate-decorator-node.js';
declare const markdownProperties: {
    markdown: {
        default: string;
        urlType: string;
        wordCount: true;
    };
};
export type MarkdownData = DecoratorNodeData<typeof markdownProperties>;
declare const MarkdownNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<{
    markdown: string;
}, import("../../export-dom.js").ExportDOMOutput<"inner">>;
export declare class MarkdownNode extends MarkdownNode_base {
    isEmpty(): boolean;
}
export declare function $createMarkdownNode(dataset?: MarkdownData): MarkdownNode;
export declare function $isMarkdownNode(node: unknown): node is MarkdownNode;
export {};
//# sourceMappingURL=MarkdownNode.d.ts.map