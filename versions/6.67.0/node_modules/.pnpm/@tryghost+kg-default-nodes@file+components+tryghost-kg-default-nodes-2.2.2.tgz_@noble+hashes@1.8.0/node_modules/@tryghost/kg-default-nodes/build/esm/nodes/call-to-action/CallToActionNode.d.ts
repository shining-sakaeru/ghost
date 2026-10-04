import { type DecoratorNodeData } from '../../generate-decorator-node.js';
declare const callToActionProperties: {
    layout: {
        default: string;
    };
    alignment: {
        default: string;
    };
    textValue: {
        default: string;
        wordCount: true;
    };
    showButton: {
        default: boolean;
    };
    showDividers: {
        default: boolean;
    };
    buttonText: {
        default: string;
    };
    buttonUrl: {
        default: string;
    };
    buttonColor: {
        default: string;
    };
    buttonTextColor: {
        default: string;
    };
    hasSponsorLabel: {
        default: boolean;
    };
    sponsorLabel: {
        default: string;
    };
    backgroundColor: {
        default: string;
    };
    linkColor: {
        default: string;
    };
    imageUrl: {
        default: string | null;
    };
    imageWidth: {
        default: number | null;
    };
    imageHeight: {
        default: number | null;
    };
};
export type CallToActionData = DecoratorNodeData<typeof callToActionProperties, true>;
declare const CallToActionNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<import("../../generate-decorator-node.js").DecoratorNodeValueMap<{
    layout: {
        default: string;
    };
    alignment: {
        default: string;
    };
    textValue: {
        default: string;
        wordCount: true;
    };
    showButton: {
        default: boolean;
    };
    showDividers: {
        default: boolean;
    };
    buttonText: {
        default: string;
    };
    buttonUrl: {
        default: string;
    };
    buttonColor: {
        default: string;
    };
    buttonTextColor: {
        default: string;
    };
    hasSponsorLabel: {
        default: boolean;
    };
    sponsorLabel: {
        default: string;
    };
    backgroundColor: {
        default: string;
    };
    linkColor: {
        default: string;
    };
    imageUrl: {
        default: string | null;
    };
    imageWidth: {
        default: number | null;
    };
    imageHeight: {
        default: number | null;
    };
}, true>, import("../../export-dom.js").ExportDOMOutput>;
export declare class CallToActionNode extends CallToActionNode_base {
    static importDOM(): {
        div: (nodeElem: HTMLElement) => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            };
            priority: 1;
        } | null;
    };
}
export declare const $createCallToActionNode: (dataset?: CallToActionData) => CallToActionNode;
export declare const $isCallToActionNode: (node: unknown) => node is CallToActionNode;
export {};
//# sourceMappingURL=CallToActionNode.d.ts.map