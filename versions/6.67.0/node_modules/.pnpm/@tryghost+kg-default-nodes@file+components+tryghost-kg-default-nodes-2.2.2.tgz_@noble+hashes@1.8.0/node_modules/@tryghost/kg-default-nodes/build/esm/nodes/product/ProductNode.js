import { generateDecoratorNode } from '../../generate-decorator-node.js';
import { parseProductNode } from './product-parser.js';
import { renderProductNode } from './product-renderer.js';
const productProperties = {
    productImageSrc: { default: '', urlType: 'url' },
    productImageWidth: { default: null },
    productImageHeight: { default: null },
    productTitle: { default: '', urlType: 'html', wordCount: true },
    productDescription: { default: '', urlType: 'html', wordCount: true },
    productRatingEnabled: { default: false },
    productStarRating: { default: 5 },
    productButtonEnabled: { default: false },
    productButton: { default: '' },
    productUrl: { default: '' }
};
export class ProductNode extends generateDecoratorNode({
    nodeType: 'product',
    properties: productProperties,
    defaultRenderFn: renderProductNode
}) {
    /* override */
    exportJSON() {
        // checks if src is a data string
        const { productImageSrc, productImageWidth, productImageHeight, productTitle, productDescription, productRatingEnabled, productStarRating, productButtonEnabled, productButton, productUrl } = this;
        const isBlob = productImageSrc && productImageSrc.startsWith('data:');
        const dataset = {
            type: 'product',
            version: 1,
            productImageSrc: isBlob ? '<base64String>' : productImageSrc,
            productImageWidth,
            productImageHeight,
            productTitle,
            productDescription,
            productRatingEnabled,
            productStarRating,
            productButtonEnabled,
            productButton,
            productUrl
        };
        return dataset;
    }
    static importDOM() {
        return parseProductNode(this);
    }
    isEmpty() {
        const isButtonFilled = this.__productButtonEnabled && this.__productUrl && this.__productButton;
        return !this.__productTitle && !this.__productDescription && !isButtonFilled && !this.__productImageSrc && !this.__productRatingEnabled;
    }
}
export const $createProductNode = (dataset = {}) => {
    return new ProductNode(dataset);
};
export function $isProductNode(node) {
    return node instanceof ProductNode;
}
//# sourceMappingURL=ProductNode.js.map