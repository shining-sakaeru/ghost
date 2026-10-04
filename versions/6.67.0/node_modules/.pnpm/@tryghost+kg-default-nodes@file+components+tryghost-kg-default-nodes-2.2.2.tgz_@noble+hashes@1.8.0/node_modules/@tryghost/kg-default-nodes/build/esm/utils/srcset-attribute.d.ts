import type { ExportDOMOptions } from '../export-dom.js';
export interface ImageRenderOptions extends ExportDOMOptions {
    imageOptimization?: {
        srcsets?: boolean;
        contentImageSizes?: Record<string, {
            width: number;
        }>;
    };
}
export declare const getSrcsetAttribute: ({ src, width, options, format }: {
    src: string;
    width: number;
    options: ImageRenderOptions;
    format?: string;
}) => string | undefined;
export declare const setSrcsetAttribute: (elem: Element | null, image: {
    src: string;
    width: number;
}, options: ImageRenderOptions) => void;
//# sourceMappingURL=srcset-attribute.d.ts.map