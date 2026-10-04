"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$createImageNode = exports.ImageNode = void 0;
exports.$isImageNode = $isImageNode;
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const image_parser_js_1 = require("./image-parser.js");
const image_renderer_js_1 = require("./image-renderer.js");
const imageProperties = {
    src: { default: '', urlType: 'url' },
    caption: { default: '', urlType: 'html', wordCount: true },
    title: { default: '' },
    alt: { default: '' },
    cardWidth: { default: 'regular' },
    width: { default: null },
    height: { default: null },
    href: { default: '', urlType: 'url' }
};
class ImageNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'image',
    properties: imageProperties,
    defaultRenderFn: image_renderer_js_1.renderImageNode
}) {
    /* @override */
    exportJSON() {
        // checks if src is a data string
        const { src, width, height, title, alt, caption, cardWidth, href } = this;
        const isBlob = src && src.startsWith('data:');
        const dataset = {
            type: 'image',
            version: 1,
            src: isBlob ? '<base64String>' : src,
            width,
            height,
            title,
            alt,
            caption,
            cardWidth,
            href
        };
        return dataset;
    }
    static importDOM() {
        return (0, image_parser_js_1.parseImageNode)(this);
    }
    hasEditMode() {
        return false;
    }
}
exports.ImageNode = ImageNode;
const $createImageNode = (dataset) => {
    return new ImageNode(dataset);
};
exports.$createImageNode = $createImageNode;
function $isImageNode(node) {
    return node instanceof ImageNode;
}
