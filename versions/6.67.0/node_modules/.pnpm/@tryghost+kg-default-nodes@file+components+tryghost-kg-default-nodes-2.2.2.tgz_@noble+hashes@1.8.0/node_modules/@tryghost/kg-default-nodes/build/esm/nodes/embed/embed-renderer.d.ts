import type { ExportDOMOptions } from '../../export-dom.js';
interface EmbedNodeData {
    embedType: string;
    html: string;
    url: string;
    caption: string;
    metadata: {
        thumbnail_url?: string;
        thumbnail_width?: number | string;
        thumbnail_height?: number | string;
        tweet_data?: Record<string, unknown>;
        [key: string]: unknown;
    };
    isEmpty: () => boolean;
}
interface RenderOptions extends ExportDOMOptions {
}
export declare function renderEmbedNode(node: EmbedNodeData, options?: RenderOptions): {
    element: HTMLElement;
    type: 'outer';
} | import("../../utils/render-empty-container.js").EmptyContainerOutput;
export {};
//# sourceMappingURL=embed-renderer.d.ts.map