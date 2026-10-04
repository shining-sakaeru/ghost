import { type DecoratorNodeData } from '../../generate-decorator-node.js';
declare const transistorProperties: {
    accentColor: {
        default: string;
    };
    backgroundColor: {
        default: string;
    };
};
export type TransistorData = DecoratorNodeData<typeof transistorProperties, true>;
declare const TransistorNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<import("../../generate-decorator-node.js").DecoratorNodeValueMap<{
    accentColor: {
        default: string;
    };
    backgroundColor: {
        default: string;
    };
}, true>, import("../../export-dom.js").ExportDOMOutput>;
export declare class TransistorNode extends TransistorNode_base {
    constructor(data?: TransistorData, key?: string);
    static getPropertyDefaults(): import("../../generate-decorator-node.js").DecoratorNodeValueMap<{
        accentColor: {
            default: string;
        };
        backgroundColor: {
            default: string;
        };
    }, true>;
    isEmpty(): boolean;
    hasEditMode(): boolean;
}
export declare const $createTransistorNode: (dataset?: TransistorData) => TransistorNode;
export declare const $isTransistorNode: (node: unknown) => node is TransistorNode;
export {};
//# sourceMappingURL=TransistorNode.d.ts.map