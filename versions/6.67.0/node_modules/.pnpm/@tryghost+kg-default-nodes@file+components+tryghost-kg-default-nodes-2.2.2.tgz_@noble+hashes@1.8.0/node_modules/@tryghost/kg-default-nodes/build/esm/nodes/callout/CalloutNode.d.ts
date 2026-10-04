import { type DecoratorNodeData } from '../../generate-decorator-node.js';
declare const calloutProperties: {
    calloutText: {
        default: string;
        wordCount: true;
    };
    calloutEmoji: {
        default: string;
    };
    backgroundColor: {
        default: string;
    };
};
export type CalloutData = DecoratorNodeData<typeof calloutProperties>;
declare const CalloutNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<{
    calloutText: string;
    calloutEmoji: string;
    backgroundColor: string;
}, {
    element: HTMLDivElement;
    type: 'outer';
}>;
export declare class CalloutNode extends CalloutNode_base {
    constructor({ calloutText, calloutEmoji, backgroundColor }?: CalloutData, key?: string);
    static importDOM(): {
        div: (nodeElem: HTMLElement) => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            };
            priority: 1;
        } | null;
    };
}
export declare function $isCalloutNode(node: unknown): node is CalloutNode;
export declare const $createCalloutNode: (dataset?: CalloutData) => CalloutNode;
export {};
//# sourceMappingURL=CalloutNode.d.ts.map