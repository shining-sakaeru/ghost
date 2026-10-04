import { type DecoratorNodeData } from '../../generate-decorator-node.js';
declare const paywallProperties: {};
export type PaywallData = DecoratorNodeData<typeof paywallProperties>;
declare const PaywallNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<{}, import("../../export-dom.js").ExportDOMOutput<"inner">>;
export declare class PaywallNode extends PaywallNode_base {
    static importDOM(): {
        '#comment': (nodeElem: Node) => {
            conversion(): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            };
            priority: 0;
        } | null;
    };
}
export declare const $createPaywallNode: (dataset?: PaywallData) => PaywallNode;
export declare function $isPaywallNode(node: unknown): node is PaywallNode;
export {};
//# sourceMappingURL=PaywallNode.d.ts.map