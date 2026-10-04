import type { ExportDOMOptions } from '../../export-dom.js';
import type { GalleryNodeData } from './GalleryNode.js';
interface GalleryRenderOptions extends ExportDOMOptions {
    imageOptimization?: {
        defaultMaxWidth?: number;
        contentImageSizes?: Record<string, {
            width: number;
        }>;
        [key: string]: unknown;
    };
}
export declare function renderGalleryNode(node: GalleryNodeData, options?: GalleryRenderOptions): {
    element: HTMLElement;
    type: 'outer';
} | import("../../utils/render-empty-container.js").EmptyContainerOutput;
export {};
//# sourceMappingURL=gallery-renderer.d.ts.map