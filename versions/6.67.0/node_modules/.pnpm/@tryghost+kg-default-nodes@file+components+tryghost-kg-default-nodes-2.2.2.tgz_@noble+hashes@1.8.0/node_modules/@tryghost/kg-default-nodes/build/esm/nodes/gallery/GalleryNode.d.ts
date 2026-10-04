import { type DecoratorNodeData } from '../../generate-decorator-node.js';
export interface GalleryImage {
    fileName: string;
    src: string;
    width: number;
    height: number;
    row: number;
    alt?: string;
    caption?: string;
    title?: string;
    href?: string;
}
declare const galleryProperties: {
    images: {
        default: GalleryImage[];
    };
    caption: {
        default: string;
        wordCount: true;
    };
};
export type GalleryData = DecoratorNodeData<typeof galleryProperties>;
export type GalleryNodeData = Required<GalleryData>;
declare const GalleryNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<{
    images: GalleryImage[];
    caption: string;
}, {
    element: HTMLElement;
    type: 'outer';
} | import("../../utils/render-empty-container.js").EmptyContainerOutput>;
export declare class GalleryNode extends GalleryNode_base {
    static get urlTransformMap(): {
        caption: string;
        images: {
            src: string;
            caption: string;
        };
    };
    static importDOM(): {
        figure: (nodeElem: HTMLElement) => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            };
            priority: 1;
        } | null;
        div: (nodeElem: HTMLElement) => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            };
            priority: 1;
        } | null;
    };
    hasEditMode(): boolean;
}
export declare const $createGalleryNode: (dataset?: GalleryData) => GalleryNode;
export declare function $isGalleryNode(node: unknown): node is GalleryNode;
export {};
//# sourceMappingURL=GalleryNode.d.ts.map