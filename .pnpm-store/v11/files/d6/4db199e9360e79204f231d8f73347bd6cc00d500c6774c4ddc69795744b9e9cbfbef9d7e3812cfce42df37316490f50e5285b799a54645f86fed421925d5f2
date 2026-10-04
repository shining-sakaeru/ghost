"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$createGalleryNode = exports.GalleryNode = void 0;
exports.$isGalleryNode = $isGalleryNode;
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const gallery_parser_js_1 = require("./gallery-parser.js");
const gallery_renderer_js_1 = require("./gallery-renderer.js");
const galleryProperties = {
    images: { default: [] },
    caption: { default: '', wordCount: true }
};
class GalleryNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'gallery',
    properties: galleryProperties,
    defaultRenderFn: gallery_renderer_js_1.renderGalleryNode
}) {
    /* override */
    static get urlTransformMap() {
        return {
            caption: 'html',
            images: {
                src: 'url',
                caption: 'html'
            }
        };
    }
    static importDOM() {
        return (0, gallery_parser_js_1.parseGalleryNode)(this);
    }
    hasEditMode() {
        return false;
    }
}
exports.GalleryNode = GalleryNode;
const $createGalleryNode = (dataset) => {
    return new GalleryNode(dataset);
};
exports.$createGalleryNode = $createGalleryNode;
function $isGalleryNode(node) {
    return node instanceof GalleryNode;
}
