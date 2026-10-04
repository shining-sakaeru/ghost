import { generateDecoratorNode } from '../../generate-decorator-node.js';
import { parseAudioNode } from './audio-parser.js';
import { renderAudioNode } from './audio-renderer.js';
const audioProperties = {
    duration: { default: 0 },
    mimeType: { default: '' },
    src: { default: '', urlType: 'url' },
    title: { default: '' },
    thumbnailSrc: { default: '' }
};
export class AudioNode extends generateDecoratorNode({
    nodeType: 'audio',
    properties: audioProperties,
    defaultRenderFn: renderAudioNode
}) {
    static importDOM() {
        return parseAudioNode(this);
    }
}
export const $createAudioNode = (dataset = {}) => {
    return new AudioNode(dataset);
};
export function $isAudioNode(node) {
    return node instanceof AudioNode;
}
//# sourceMappingURL=AudioNode.js.map