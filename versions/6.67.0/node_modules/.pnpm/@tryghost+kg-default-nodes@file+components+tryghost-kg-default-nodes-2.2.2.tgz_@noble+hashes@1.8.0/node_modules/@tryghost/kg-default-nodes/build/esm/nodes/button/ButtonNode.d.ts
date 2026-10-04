import { type DecoratorNodeData } from '../../generate-decorator-node.js';
declare const buttonProperties: {
    buttonText: {
        default: string;
    };
    alignment: {
        default: string;
    };
    buttonUrl: {
        default: string;
        urlType: string;
    };
};
export type ButtonData = DecoratorNodeData<typeof buttonProperties>;
declare const ButtonNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<{
    buttonText: string;
    alignment: string;
    buttonUrl: string;
}, {
    element: HTMLDivElement;
    type: 'outer';
} | {
    element: HTMLDivElement;
    type: 'inner';
} | import("../../utils/render-empty-container.js").EmptyContainerOutput>;
export declare class ButtonNode extends ButtonNode_base {
    static importDOM(): {
        div: (nodeElem: HTMLElement) => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            };
            priority: 1;
        } | null;
    };
}
export declare const $createButtonNode: (dataset?: ButtonData) => ButtonNode;
export declare function $isButtonNode(node: unknown): node is ButtonNode;
export {};
//# sourceMappingURL=ButtonNode.d.ts.map