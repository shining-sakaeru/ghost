import { type DecoratorNodeData } from '../../generate-decorator-node.js';
declare const productProperties: {
    productImageSrc: {
        default: string;
        urlType: string;
    };
    productImageWidth: {
        default: number | null;
    };
    productImageHeight: {
        default: number | null;
    };
    productTitle: {
        default: string;
        urlType: string;
        wordCount: true;
    };
    productDescription: {
        default: string;
        urlType: string;
        wordCount: true;
    };
    productRatingEnabled: {
        default: boolean;
    };
    productStarRating: {
        default: number;
    };
    productButtonEnabled: {
        default: boolean;
    };
    productButton: {
        default: string;
    };
    productUrl: {
        default: string;
    };
};
export type ProductData = DecoratorNodeData<typeof productProperties>;
declare const ProductNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<{
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
}, {
    element: HTMLElement;
    type: 'outer';
} | import("../../utils/render-empty-container.js").EmptyContainerOutput>;
export declare class ProductNode extends ProductNode_base {
    exportJSON(): {
        type: string;
        version: number;
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
    };
    static importDOM(): {
        div: (nodeElem: HTMLElement) => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            } | null;
            priority: 1;
        } | null;
    };
    isEmpty(): boolean;
}
export declare const $createProductNode: (dataset?: ProductData) => ProductNode;
export declare function $isProductNode(node: unknown): node is ProductNode;
export {};
//# sourceMappingURL=ProductNode.d.ts.map