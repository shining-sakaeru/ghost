import { generateDecoratorNode } from '../../generate-decorator-node.js';
import { renderHeaderNodeV1 } from './renderers/v1/header-renderer.js';
import { parseHeaderNode } from './parsers/header-parser.js';
// V2 imports below
import { renderHeaderNodeV2 } from './renderers/v2/header-renderer.js';
const headerProperties = {
    size: { default: 'small' },
    style: { default: 'dark' },
    buttonEnabled: { default: false },
    buttonUrl: { default: '', urlType: 'url' },
    buttonText: { default: '' },
    header: { default: '', urlType: 'html', wordCount: true },
    subheader: { default: '', urlType: 'html', wordCount: true },
    backgroundImageSrc: { default: '', urlType: 'url' },
    version: { default: 1 },
    accentColor: { default: '#FF1A75' },
    alignment: { default: 'center' },
    backgroundColor: { default: '#000000' },
    backgroundImageWidth: { default: null },
    backgroundImageHeight: { default: null },
    backgroundSize: { default: 'cover' },
    textColor: { default: '#FFFFFF' },
    buttonColor: { default: '#ffffff' },
    buttonTextColor: { default: '#000000' },
    layout: { default: 'full' },
    swapped: { default: false }
};
// This is our first node that has a custom version property
export class HeaderNode extends generateDecoratorNode({
    nodeType: 'header',
    properties: headerProperties,
    defaultRenderFn: {
        1: renderHeaderNodeV1,
        2: renderHeaderNodeV2
    }
}) {
    static importDOM() {
        return parseHeaderNode(this);
    }
}
export const $createHeaderNode = (dataset = {}) => {
    return new HeaderNode(dataset);
};
export function $isHeaderNode(node) {
    return node instanceof HeaderNode;
}
//# sourceMappingURL=HeaderNode.js.map