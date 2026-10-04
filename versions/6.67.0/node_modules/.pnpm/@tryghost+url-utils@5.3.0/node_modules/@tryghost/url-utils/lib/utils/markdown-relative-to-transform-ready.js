"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const markdown_transform_1 = __importDefault(require("./markdown-transform"));
const html_relative_to_transform_ready_1 = __importDefault(require("./html-relative-to-transform-ready"));
const relative_to_transform_ready_1 = __importDefault(require("./relative-to-transform-ready"));
function markdownRelativeToTransformReady(markdown = '', siteUrl, itemPath, _options = {}) {
    const defaultOptions = { assetsOnly: false };
    const options = Object.assign({}, defaultOptions, _options);
    options.earlyExitMatchStr = '\\]\\([^\\s\\)]|href=|src=|srcset=';
    if (options.assetsOnly) {
        options.earlyExitMatchStr = options.staticImageUrlPrefix;
    }
    const transformFunctions = {
        html: html_relative_to_transform_ready_1.default,
        url: relative_to_transform_ready_1.default
    };
    return (0, markdown_transform_1.default)(markdown, siteUrl, transformFunctions, itemPath, options);
}
exports.default = markdownRelativeToTransformReady;
