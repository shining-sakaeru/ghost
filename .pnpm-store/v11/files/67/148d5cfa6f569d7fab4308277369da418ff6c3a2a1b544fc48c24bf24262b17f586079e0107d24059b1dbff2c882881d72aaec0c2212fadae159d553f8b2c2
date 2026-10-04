import { type DecoratorNodeData } from '../../generate-decorator-node.js';
declare const htmlProperties: {
    html: {
        default: string;
        urlType: string;
        wordCount: true;
    };
};
export type HtmlData = DecoratorNodeData<typeof htmlProperties, true>;
declare const HtmlNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<import("../../generate-decorator-node.js").DecoratorNodeValueMap<{
    html: {
        default: string;
        urlType: string;
        wordCount: true;
    };
}, true>, import("./html-renderer.js").HtmlExportDOMOutput>;
export declare class HtmlNode extends HtmlNode_base {
    static importDOM(): {
        '#comment': (nodeElem: Node) => {
            conversion(domNode: Node): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            };
            priority: 0;
        } | null;
        table: (nodeElem: HTMLElement) => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            };
            priority: 0;
        } | null;
    };
    isEmpty(): boolean;
}
export declare function $createHtmlNode(dataset?: HtmlData): HtmlNode;
export declare function $isHtmlNode(node: unknown): node is HtmlNode;
export {};
//# sourceMappingURL=HtmlNode.d.ts.map