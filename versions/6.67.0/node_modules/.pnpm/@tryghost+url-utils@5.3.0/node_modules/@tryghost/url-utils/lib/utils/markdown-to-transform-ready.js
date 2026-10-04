"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const markdown_relative_to_absolute_1 = __importDefault(require("./markdown-relative-to-absolute"));
const markdown_absolute_to_transform_ready_1 = __importDefault(require("./markdown-absolute-to-transform-ready"));
function markdownToTransformReady(markdown, siteUrl, itemPath, options) {
    let finalItemPath = null;
    let finalOptions = options || {};
    if (typeof itemPath === 'object' && itemPath !== null && !options) {
        finalOptions = itemPath;
        finalItemPath = null;
    }
    else if (typeof itemPath === 'string') {
        finalItemPath = itemPath;
    }
    const absolute = (0, markdown_relative_to_absolute_1.default)(markdown, siteUrl, finalItemPath, finalOptions);
    return (0, markdown_absolute_to_transform_ready_1.default)(absolute, siteUrl, finalOptions);
}
exports.default = markdownToTransformReady;
