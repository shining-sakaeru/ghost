import { type DecoratorNodeData } from '../../generate-decorator-node.js';
declare const emailCtaProperties: {
    alignment: {
        default: string;
    };
    buttonText: {
        default: string;
    };
    buttonUrl: {
        default: string;
        urlType: string;
    };
    html: {
        default: string;
        urlType: string;
    };
    segment: {
        default: string;
    };
    showButton: {
        default: boolean;
    };
    showDividers: {
        default: boolean;
    };
};
export type EmailCtaData = DecoratorNodeData<typeof emailCtaProperties>;
declare const EmailCtaNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<{
    alignment: string;
    buttonText: string;
    buttonUrl: string;
    html: string;
    segment: string;
    showButton: boolean;
    showDividers: boolean;
}, {
    element: HTMLDivElement;
    type: 'outer';
} | import("../../utils/render-empty-container.js").EmptyContainerOutput>;
export declare class EmailCtaNode extends EmailCtaNode_base {
}
export declare const $createEmailCtaNode: (dataset?: EmailCtaData) => EmailCtaNode;
export declare function $isEmailCtaNode(node: unknown): node is EmailCtaNode;
export {};
//# sourceMappingURL=EmailCtaNode.d.ts.map