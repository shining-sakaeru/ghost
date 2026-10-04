import type { ExportDOMOptions } from '../../export-dom.js';
import type { CardWidth } from '../../utils/card-widths.js';
interface VideoNodeData {
    src: string;
    width: number | null;
    height: number | null;
    caption: string;
    loop: boolean;
    thumbnailSrc: string;
    customThumbnailSrc: string;
    formattedDuration: string;
    cardWidth: CardWidth;
}
interface BaseVideoRenderOptions extends ExportDOMOptions {
}
interface VideoRenderOptions extends BaseVideoRenderOptions {
    target?: string;
    postUrl?: string;
}
export declare function renderVideoNode(node: VideoNodeData, options?: VideoRenderOptions): {
    element: HTMLElement;
    type: 'outer';
} | import("../../utils/render-empty-container.js").EmptyContainerOutput;
export {};
//# sourceMappingURL=video-renderer.d.ts.map