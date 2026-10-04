import { generateDecoratorNode } from '../../generate-decorator-node.js';
import { parseGalleryNode } from './gallery-parser.js';
import { renderGalleryNode } from './gallery-renderer.js';
const galleryProperties = {
    images: { default: [] },
    caption: { default: '', wordCount: true }
};
export class GalleryNode extends generateDecoratorNode({
    nodeType: 'gallery',
    properties: galleryProperties,
    defaultRenderFn: renderGalleryNode
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
        return parseGalleryNode(this);
    }
    hasEditMode() {
        return false;
    }
}
export const $createGalleryNode = (dataset) => {
    return new GalleryNode(dataset);
};
export function $isGalleryNode(node) {
    return node instanceof GalleryNode;
}
//# sourceMappingURL=GalleryNode.js.map