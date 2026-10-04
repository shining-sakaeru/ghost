declare const HorizontalRuleNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<{}, {
    element: HTMLDivElement;
    type: 'inner';
}>;
export declare class HorizontalRuleNode extends HorizontalRuleNode_base {
    static importDOM(): {
        hr: () => {
            conversion(): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            };
            priority: 0;
        };
    };
    getTextContent(): string;
    hasEditMode(): boolean;
}
export declare function $createHorizontalRuleNode(): HorizontalRuleNode;
export declare function $isHorizontalRuleNode(node: unknown): node is HorizontalRuleNode;
export {};
//# sourceMappingURL=HorizontalRuleNode.d.ts.map