"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFileNode = parseFileNode;
const size_byte_converter_js_1 = require("../../utils/size-byte-converter.js");
function parseFileNode(FileNode) {
    return {
        div: (nodeElem) => {
            const isKgFileCard = nodeElem.classList?.contains('kg-file-card');
            if (nodeElem.tagName === 'DIV' && isKgFileCard) {
                return {
                    conversion(domNode) {
                        const link = domNode.querySelector('a');
                        const src = link?.getAttribute('href') ?? '';
                        const fileTitle = domNode.querySelector('.kg-file-card-title')?.textContent || '';
                        const fileCaption = domNode.querySelector('.kg-file-card-caption')?.textContent || '';
                        const fileName = domNode.querySelector('.kg-file-card-filename')?.textContent || '';
                        const fileSize = (0, size_byte_converter_js_1.sizeToBytes)(domNode.querySelector('.kg-file-card-filesize')?.textContent || '');
                        const payload = {
                            src,
                            fileTitle,
                            fileCaption,
                            fileName,
                            fileSize
                        };
                        const node = new FileNode(payload);
                        return { node };
                    },
                    priority: 1
                };
            }
            return null;
        }
    };
}
