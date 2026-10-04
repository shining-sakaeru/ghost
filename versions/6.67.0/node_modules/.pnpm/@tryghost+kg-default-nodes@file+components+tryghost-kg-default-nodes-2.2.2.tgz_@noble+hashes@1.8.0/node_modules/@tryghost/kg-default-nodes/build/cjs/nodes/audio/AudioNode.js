"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$createAudioNode = exports.AudioNode = void 0;
exports.$isAudioNode = $isAudioNode;
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const audio_parser_js_1 = require("./audio-parser.js");
const audio_renderer_js_1 = require("./audio-renderer.js");
const audioProperties = {
    duration: { default: 0 },
    mimeType: { default: '' },
    src: { default: '', urlType: 'url' },
    title: { default: '' },
    thumbnailSrc: { default: '' }
};
class AudioNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'audio',
    properties: audioProperties,
    defaultRenderFn: audio_renderer_js_1.renderAudioNode
}) {
    static importDOM() {
        return (0, audio_parser_js_1.parseAudioNode)(this);
    }
}
exports.AudioNode = AudioNode;
const $createAudioNode = (dataset = {}) => {
    return new AudioNode(dataset);
};
exports.$createAudioNode = $createAudioNode;
function $isAudioNode(node) {
    return node instanceof AudioNode;
}
