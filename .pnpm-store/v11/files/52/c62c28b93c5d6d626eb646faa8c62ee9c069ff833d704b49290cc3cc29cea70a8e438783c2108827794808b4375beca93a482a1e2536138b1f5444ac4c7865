import type { ExportDOMOptions } from '../../export-dom.js';
import type { CardWidth } from '../../utils/card-widths.js';
interface ImageNodeData {
    src: string;
    width: number;
    height: number;
    alt: string;
    title: string;
    caption: string;
    cardWidth: CardWidth;
    href: string;
}
interface ImageRenderOptions extends ExportDOMOptions {
    imageOptimization?: {
        defaultMaxWidth?: number;
        contentImageSizes?: Record<string, {
            width: number;
        }>;
        [key: string]: unknown;
    };
}
export declare function renderImageNode(node: ImageNodeData, options?: ImageRenderOptions): {
    element: HTMLElement;
    type: 'outer';
} | import("../../utils/render-empty-container.js").EmptyContainerOutput;
export {};
//# sourceMappingURL=image-renderer.d.ts.map