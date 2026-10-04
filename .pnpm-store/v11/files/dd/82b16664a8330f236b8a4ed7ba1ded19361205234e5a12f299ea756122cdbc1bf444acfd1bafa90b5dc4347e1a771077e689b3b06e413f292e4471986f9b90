"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$createFileNode = exports.FileNode = void 0;
exports.$isFileNode = $isFileNode;
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const file_renderer_js_1 = require("./file-renderer.js");
const file_parser_js_1 = require("./file-parser.js");
const size_byte_converter_js_1 = require("../../utils/size-byte-converter.js");
const fileProperties = {
    src: { default: '', urlType: 'url' },
    fileTitle: { default: '', wordCount: true },
    fileCaption: { default: '', wordCount: true },
    fileName: { default: '' },
    fileSize: { default: 0 }
};
class FileNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'file',
    properties: fileProperties,
    defaultRenderFn: file_renderer_js_1.renderFileNode
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
        return (0, file_parser_js_1.parseFileNode)(this);
    }
    get formattedFileSize() {
        return (0, size_byte_converter_js_1.bytesToSize)(this.fileSize);
    }
}
exports.FileNode = FileNode;
function $isFileNode(node) {
    return node instanceof FileNode;
}
const $createFileNode = (dataset = {}) => {
    return new FileNode(dataset);
};
exports.$createFileNode = $createFileNode;
