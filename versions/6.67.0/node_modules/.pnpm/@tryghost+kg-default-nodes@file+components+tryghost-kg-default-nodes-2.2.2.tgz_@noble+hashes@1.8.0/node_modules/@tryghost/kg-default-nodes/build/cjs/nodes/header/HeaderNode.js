"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$createHeaderNode = exports.HeaderNode = void 0;
exports.$isHeaderNode = $isHeaderNode;
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const header_renderer_js_1 = require("./renderers/v1/header-renderer.js");
const header_parser_js_1 = require("./parsers/header-parser.js");
// V2 imports below
const header_renderer_js_2 = require("./renderers/v2/header-renderer.js");
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
class HeaderNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'header',
    properties: headerProperties,
    defaultRenderFn: {
        1: header_renderer_js_1.renderHeaderNodeV1,
        2: header_renderer_js_2.renderHeaderNodeV2
    }
}) {
    static importDOM() {
        return (0, header_parser_js_1.parseHeaderNode)(this);
    }
}
exports.HeaderNode = HeaderNode;
const $createHeaderNode = (dataset = {}) => {
    return new HeaderNode(dataset);
};
exports.$createHeaderNode = $createHeaderNode;
function $isHeaderNode(node) {
    return node instanceof HeaderNode;
}
