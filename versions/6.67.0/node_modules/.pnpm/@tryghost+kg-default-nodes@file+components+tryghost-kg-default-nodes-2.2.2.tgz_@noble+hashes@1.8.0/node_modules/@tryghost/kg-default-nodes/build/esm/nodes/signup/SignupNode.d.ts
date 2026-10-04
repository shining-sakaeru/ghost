import { type DecoratorNodeData } from '../../generate-decorator-node.js';
declare const signupProperties: {
    alignment: {
        default: string;
    };
    backgroundColor: {
        default: string;
    };
    backgroundImageSrc: {
        default: string;
    };
    backgroundSize: {
        default: string;
    };
    textColor: {
        default: string;
    };
    buttonColor: {
        default: string;
    };
    buttonTextColor: {
        default: string;
    };
    buttonText: {
        default: string;
    };
    disclaimer: {
        default: string;
        wordCount: true;
    };
    header: {
        default: string;
        wordCount: true;
    };
    layout: {
        default: string;
    };
    subheader: {
        default: string;
        wordCount: true;
    };
    successMessage: {
        default: string;
    };
    swapped: {
        default: boolean;
    };
};
export type SignupData = DecoratorNodeData<typeof signupProperties> & {
    labels?: string[];
};
declare const SignupNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<{
    alignment: string;
    backgroundColor: string;
    backgroundImageSrc: string;
    backgroundSize: string;
    textColor: string;
    buttonColor: string;
    buttonTextColor: string;
    buttonText: string;
    disclaimer: string;
    header: string;
    layout: string;
    subheader: string;
    successMessage: string;
    swapped: boolean;
}, {
    element: HTMLElement;
    type: 'outer';
}>;
export declare class SignupNode extends SignupNode_base {
    constructor({ alignment, backgroundColor, backgroundImageSrc, backgroundSize, textColor, buttonColor, buttonTextColor, buttonText, disclaimer, header, labels, layout, subheader, successMessage, swapped }?: SignupData, key?: string);
    static importDOM(): {
        div: (nodeElem: HTMLElement) => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            };
            priority: 1;
        } | null;
    };
    static getPropertyDefaults(): {
        alignment: string;
        backgroundColor: string;
        backgroundImageSrc: string;
        backgroundSize: string;
        textColor: string;
        buttonColor: string;
        buttonTextColor: string;
        buttonText: string;
        disclaimer: string;
        header: string;
        layout: string;
        subheader: string;
        successMessage: string;
        swapped: boolean;
        labels: string[];
    };
    static importJSON(serializedNode: Record<string, unknown>): SignupNode;
    get labels(): string[];
    getDataset(): {
        labels: string[];
    };
    exportJSON(): {
        type: string;
        version: number;
        labels: string[];
    };
    setLabels(labels: string[]): void;
    addLabel(label: string): void;
    removeLabel(label: string): void;
}
export declare const $createSignupNode: (dataset?: SignupData) => SignupNode;
export declare function $isSignupNode(node: unknown): node is SignupNode;
export {};
//# sourceMappingURL=SignupNode.d.ts.map