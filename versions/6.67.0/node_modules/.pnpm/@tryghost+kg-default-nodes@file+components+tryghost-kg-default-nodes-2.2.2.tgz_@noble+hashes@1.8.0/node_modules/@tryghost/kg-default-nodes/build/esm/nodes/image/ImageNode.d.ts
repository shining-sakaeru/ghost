import { type DecoratorNodeData } from '../../generate-decorator-node.js';
import type { CardWidth } from '../../utils/card-widths.js';
declare const imageProperties: {
    src: {
        default: string;
        urlType: string;
    };
    caption: {
        default: string;
        urlType: string;
        wordCount: true;
    };
    title: {
        default: string;
    };
    alt: {
        default: string;
    };
    cardWidth: {
        default: CardWidth;
    };
    width: {
        default: number | null;
    };
    height: {
        default: number | null;
    };
    href: {
        default: string;
        urlType: string;
    };
};
export type ImageData = DecoratorNodeData<typeof imageProperties>;
declare const ImageNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<{
    src: string;
    caption: string;
    title: string;
    alt: string;
    cardWidth: "full" | "regular" | "wide";
    width: number | null;
    height: number | null;
    href: string;
}, {
    element: HTMLElement;
    type: 'outer';
} | import("../../utils/render-empty-container.js").EmptyContainerOutput>;
export declare class ImageNode extends ImageNode_base {
    exportJSON(): {
        type: string;
        version: number;
        src: string;
        width: number | null;
        height: number | null;
        title: string;
        alt: string;
        caption: string;
        cardWidth: "full" | "regular" | "wide";
        href: string;
    };
    static importDOM(): {
        img: () => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            } | null;
            priority: 1;
        };
        figure: (nodeElem: HTMLElement) => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            } | null;
            priority: 0;
        } | null;
    };
    hasEditMode(): boolean;
}
export declare const $createImageNode: (dataset?: ImageData) => ImageNode;
export declare function $isImageNode(node: unknown): node is ImageNode;
export {};
//# sourceMappingURL=ImageNode.d.ts.map