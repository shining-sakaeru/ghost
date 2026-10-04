import { type DecoratorNodeData } from '../../generate-decorator-node.js';
declare const toggleProperties: {
    heading: {
        default: string;
        urlType: string;
        wordCount: true;
    };
    content: {
        default: string;
        urlType: string;
        wordCount: true;
    };
};
export type ToggleData = DecoratorNodeData<typeof toggleProperties>;
declare const ToggleNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<{
    heading: string;
    content: string;
}, {
    element: HTMLElement;
    type: 'outer';
}>;
export declare class ToggleNode extends ToggleNode_base {
    static importDOM(): {
        div: (nodeElem: HTMLElement) => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            };
            priority: 1;
        } | null;
    };
}
export declare const $createToggleNode: (dataset?: ToggleData) => ToggleNode;
export declare function $isToggleNode(node: unknown): node is ToggleNode;
export {};
//# sourceMappingURL=ToggleNode.d.ts.map