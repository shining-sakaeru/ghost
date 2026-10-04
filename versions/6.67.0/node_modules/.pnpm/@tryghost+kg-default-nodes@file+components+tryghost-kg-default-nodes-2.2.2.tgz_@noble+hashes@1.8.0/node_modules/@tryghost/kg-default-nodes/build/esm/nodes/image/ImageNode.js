import { generateDecoratorNode } from '../../generate-decorator-node.js';
import { parseImageNode } from './image-parser.js';
import { renderImageNode } from './image-renderer.js';
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
export class ImageNode extends generateDecoratorNode({
    nodeType: 'image',
    properties: imageProperties,
    defaultRenderFn: renderImageNode
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
        return parseImageNode(this);
    }
    hasEditMode() {
        return false;
    }
}
export const $createImageNode = (dataset) => {
    return new ImageNode(dataset);
};
export function $isImageNode(node) {
    return node instanceof ImageNode;
}
//# sourceMappingURL=ImageNode.js.map