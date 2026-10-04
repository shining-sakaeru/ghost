import { type DecoratorNodeData } from '../../generate-decorator-node.js';
declare const audioProperties: {
    duration: {
        default: number;
    };
    mimeType: {
        default: string;
    };
    src: {
        default: string;
        urlType: string;
    };
    title: {
        default: string;
    };
    thumbnailSrc: {
        default: string;
    };
};
export type AudioData = DecoratorNodeData<typeof audioProperties>;
declare const AudioNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<{
    duration: number;
    mimeType: string;
    src: string;
    title: string;
    thumbnailSrc: string;
}, import("../../export-dom.js").ExportDOMOutput>;
export declare class AudioNode extends AudioNode_base {
    static importDOM(): {
        div: (nodeElem: HTMLElement) => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            };
            priority: 1;
        } | null;
    };
}
export declare const $createAudioNode: (dataset?: AudioData) => AudioNode;
export declare function $isAudioNode(node: unknown): node is AudioNode;
export {};
//# sourceMappingURL=AudioNode.d.ts.map