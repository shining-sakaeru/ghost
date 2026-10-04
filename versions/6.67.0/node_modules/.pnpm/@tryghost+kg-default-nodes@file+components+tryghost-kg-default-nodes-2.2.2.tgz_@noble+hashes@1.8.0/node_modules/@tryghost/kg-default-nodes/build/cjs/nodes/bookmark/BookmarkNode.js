"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$createBookmarkNode = exports.BookmarkNode = void 0;
exports.$isBookmarkNode = $isBookmarkNode;
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const bookmark_parser_js_1 = require("./bookmark-parser.js");
const bookmark_renderer_js_1 = require("./bookmark-renderer.js");
const bookmarkProperties = {
    title: { default: '', wordCount: true },
    description: { default: '', wordCount: true },
    url: { default: '', urlType: 'url', wordCount: true },
    caption: { default: '', wordCount: true },
    author: { default: '' },
    publisher: { default: '' },
    icon: { urlPath: 'metadata.icon', default: '', urlType: 'url' },
    thumbnail: { urlPath: 'metadata.thumbnail', default: '', urlType: 'url' }
};
class BookmarkNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'bookmark',
    properties: bookmarkProperties,
    defaultRenderFn: bookmark_renderer_js_1.renderBookmarkNode
}) {
    static importDOM() {
        return (0, bookmark_parser_js_1.parseBookmarkNode)(this);
    }
    /* override */
    constructor({ url, metadata, caption } = {}, key) {
        super({}, key);
        this.__url = url || '';
        this.__icon = metadata?.icon || '';
        this.__title = metadata?.title || '';
        this.__description = metadata?.description || '';
        this.__author = metadata?.author || '';
        this.__publisher = metadata?.publisher || '';
        this.__thumbnail = metadata?.thumbnail || '';
        this.__caption = caption || '';
    }
    /* @override */
    getDataset() {
        const self = this.getLatest();
        return {
            url: self.url,
            metadata: {
                icon: self.icon,
                title: self.title,
                description: self.description,
                author: self.author,
                publisher: self.publisher,
                thumbnail: self.thumbnail
            },
            caption: self.caption
        };
    }
    /* @override */
    static importJSON(serializedNode) {
        const { url, metadata, caption } = serializedNode;
        const node = new this({
            url,
            metadata,
            caption
        });
        return node;
    }
    /* @override */
    exportJSON() {
        const dataset = {
            type: 'bookmark',
            version: 1,
            url: this.url,
            metadata: {
                icon: this.icon,
                title: this.title,
                description: this.description,
                author: this.author,
                publisher: this.publisher,
                thumbnail: this.thumbnail
            },
            caption: this.caption
        };
        return dataset;
    }
    isEmpty() {
        return !this.url;
    }
}
exports.BookmarkNode = BookmarkNode;
const $createBookmarkNode = (dataset = {}) => {
    return new BookmarkNode(dataset);
};
exports.$createBookmarkNode = $createBookmarkNode;
function $isBookmarkNode(node) {
    return node instanceof BookmarkNode;
}
