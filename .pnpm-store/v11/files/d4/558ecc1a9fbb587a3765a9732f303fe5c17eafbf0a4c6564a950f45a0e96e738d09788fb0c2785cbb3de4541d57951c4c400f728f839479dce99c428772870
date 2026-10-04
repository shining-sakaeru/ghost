import { generateDecoratorNode } from '../../generate-decorator-node.js';
import { renderFileNode } from './file-renderer.js';
import { parseFileNode } from './file-parser.js';
import { bytesToSize } from '../../utils/size-byte-converter.js';
const fileProperties = {
    src: { default: '', urlType: 'url' },
    fileTitle: { default: '', wordCount: true },
    fileCaption: { default: '', wordCount: true },
    fileName: { default: '' },
    fileSize: { default: 0 }
};
export class FileNode extends generateDecoratorNode({
    nodeType: 'file',
    properties: fileProperties,
    defaultRenderFn: renderFileNode
}) {
    /* @override */
    exportJSON() {
        const { src, fileTitle, fileCaption, fileName, fileSize } = this;
        const isBlob = src && src.startsWith('data:');
        return {
            type: 'file',
            version: 1,
            src: isBlob ? '<base64String>' : src,
            fileTitle,
            fileCaption,
            fileName,
            fileSize
        };
    }
    static importDOM() {
        return parseFileNode(this);
    }
    get formattedFileSize() {
        return bytesToSize(this.fileSize);
    }
}
export function $isFileNode(node) {
    return node instanceof FileNode;
}
export const $createFileNode = (dataset = {}) => {
    return new FileNode(dataset);
};
//# sourceMappingURL=FileNode.js.map