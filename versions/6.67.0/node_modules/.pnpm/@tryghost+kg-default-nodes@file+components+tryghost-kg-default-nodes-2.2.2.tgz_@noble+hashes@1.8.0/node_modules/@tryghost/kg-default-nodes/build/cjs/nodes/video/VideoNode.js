"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$createVideoNode = exports.VideoNode = void 0;
exports.$isVideoNode = $isVideoNode;
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const video_parser_js_1 = require("./video-parser.js");
const video_renderer_js_1 = require("./video-renderer.js");
const videoProperties = {
    src: { default: '', urlType: 'url' },
    caption: { default: '', urlType: 'html', wordCount: true },
    fileName: { default: '' },
    mimeType: { default: '' },
    width: { default: null },
    height: { default: null },
    duration: { default: 0 },
    thumbnailSrc: { default: '', urlType: 'url' },
    customThumbnailSrc: { default: '', urlType: 'url' },
    thumbnailWidth: { default: null },
    thumbnailHeight: { default: null },
    cardWidth: { default: 'regular' },
    loop: { default: false }
};
class VideoNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'video',
    properties: videoProperties,
    defaultRenderFn: video_renderer_js_1.renderVideoNode
}) {
    /* override */
    exportJSON() {
        const { src, caption, fileName, mimeType, width, height, duration, thumbnailSrc, customThumbnailSrc, thumbnailWidth, thumbnailHeight, cardWidth, loop } = this;
        // checks if src is a data string
        const isBlob = src && src.startsWith('data:');
        const dataset = {
            type: 'video',
            version: 1,
            src: isBlob ? '<base64String>' : src,
            caption,
            fileName,
            mimeType,
            width,
            height,
            duration,
            thumbnailSrc,
            customThumbnailSrc,
            thumbnailWidth,
            thumbnailHeight,
            cardWidth,
            loop
        };
        return dataset;
    }
    static importDOM() {
        return (0, video_parser_js_1.parseVideoNode)(this);
    }
    get formattedDuration() {
        const minutes = Math.floor(this.duration / 60);
        const seconds = Math.floor(this.duration - (minutes * 60));
        const paddedSeconds = String(seconds).padStart(2, '0');
        const formattedDuration = `${minutes}:${paddedSeconds}`;
        return formattedDuration;
    }
}
exports.VideoNode = VideoNode;
const $createVideoNode = (dataset) => {
    return new VideoNode(dataset);
};
exports.$createVideoNode = $createVideoNode;
function $isVideoNode(node) {
    return node instanceof VideoNode;
}
