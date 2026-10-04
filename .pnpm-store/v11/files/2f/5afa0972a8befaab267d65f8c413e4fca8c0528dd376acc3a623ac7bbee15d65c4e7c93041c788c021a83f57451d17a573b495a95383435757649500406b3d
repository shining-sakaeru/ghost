"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$createProductNode = exports.ProductNode = void 0;
exports.$isProductNode = $isProductNode;
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const product_parser_js_1 = require("./product-parser.js");
const product_renderer_js_1 = require("./product-renderer.js");
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
class ProductNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'product',
    properties: productProperties,
    defaultRenderFn: product_renderer_js_1.renderProductNode
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
        return (0, product_parser_js_1.parseProductNode)(this);
    }
    isEmpty() {
        const isButtonFilled = this.__productButtonEnabled && this.__productUrl && this.__productButton;
        return !this.__productTitle && !this.__productDescription && !isButtonFilled && !this.__productImageSrc && !this.__productRatingEnabled;
    }
}
exports.ProductNode = ProductNode;
const $createProductNode = (dataset = {}) => {
    return new ProductNode(dataset);
};
exports.$createProductNode = $createProductNode;
function $isProductNode(node) {
    return node instanceof ProductNode;
}
