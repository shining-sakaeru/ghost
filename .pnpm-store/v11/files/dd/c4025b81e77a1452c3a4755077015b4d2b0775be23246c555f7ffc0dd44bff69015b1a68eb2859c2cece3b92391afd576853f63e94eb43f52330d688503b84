import type { ExportDOMFeatureOptions, ExportDOMOptions } from '../../export-dom.js';
interface ProductNodeData {
    productStarRating: number;
    isEmpty: () => boolean;
    getDataset: () => ProductTemplateBaseData;
}
interface ProductRenderOptions extends ExportDOMOptions {
    design?: {
        backgroundIsDark?: boolean;
    };
}
interface ProductTemplateBaseData {
    productImageSrc: string;
    productImageWidth: number | null;
    productImageHeight: number | null;
    productTitle: string;
    productDescription: string;
    productRatingEnabled: boolean;
    productStarRating: number;
    productButtonEnabled: boolean;
    productButton: string;
    productUrl: string;
}
interface ProductTemplateData extends ProductTemplateBaseData {
    starIcon: string;
    ratingImage: string;
    star1: string;
    star2: string;
    star3: string;
    star4: string;
    star5: string;
}
export declare function renderProductNode(node: ProductNodeData, options?: ProductRenderOptions): {
    element: HTMLElement;
    type: 'outer';
} | import("../../utils/render-empty-container.js").EmptyContainerOutput;
export declare function cardTemplate({ data }: {
    data: ProductTemplateData;
    feature?: ExportDOMFeatureOptions;
}): string;
export declare function emailCardTemplate({ data }: {
    data: ProductTemplateData;
    feature?: ExportDOMFeatureOptions;
}): string;
export {};
//# sourceMappingURL=product-renderer.d.ts.map