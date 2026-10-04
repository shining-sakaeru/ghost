import { type DecoratorNodeData } from '../../generate-decorator-node.js';
import type { CardWidth } from '../../utils/card-widths.js';
declare const videoProperties: {
    src: {
        default: string;
        urlType: string;
    };
    caption: {
        default: string;
        urlType: string;
        wordCount: true;
    };
    fileName: {
        default: string;
    };
    mimeType: {
        default: string;
    };
    width: {
        default: number | null;
    };
    height: {
        default: number | null;
    };
    duration: {
        default: number;
    };
    thumbnailSrc: {
        default: string;
        urlType: string;
    };
    customThumbnailSrc: {
        default: string;
        urlType: string;
    };
    thumbnailWidth: {
        default: number | null;
    };
    thumbnailHeight: {
        default: number | null;
    };
    cardWidth: {
        default: CardWidth;
    };
    loop: {
        default: boolean;
    };
};
export type VideoData = DecoratorNodeData<typeof videoProperties>;
declare const VideoNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<{
    src: string;
    caption: string;
    fileName: string;
    mimeType: string;
    width: number | null;
    height: number | null;
    duration: number;
    thumbnailSrc: string;
    customThumbnailSrc: string;
    thumbnailWidth: number | null;
    thumbnailHeight: number | null;
    cardWidth: "full" | "regular" | "wide";
    loop: boolean;
}, {
    element: HTMLElement;
    type: 'outer';
} | import("../../utils/render-empty-container.js").EmptyContainerOutput>;
export declare class VideoNode extends VideoNode_base {
    exportJSON(): {
        type: string;
        version: number;
        src: string;
        caption: string;
        fileName: string;
        mimeType: string;
        width: number | null;
        height: number | null;
        duration: number;
        thumbnailSrc: string;
        customThumbnailSrc: string;
        thumbnailWidth: number | null;
        thumbnailHeight: number | null;
        cardWidth: "full" | "regular" | "wide";
        loop: boolean;
    };
    static importDOM(): {
        figure: (nodeElem: HTMLElement) => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            } | null;
            priority: 1;
        } | null;
    };
    get formattedDuration(): string;
}
export declare const $createVideoNode: (dataset?: VideoData) => VideoNode;
export declare function $isVideoNode(node: unknown): node is VideoNode;
export {};
//# sourceMappingURL=VideoNode.d.ts.map