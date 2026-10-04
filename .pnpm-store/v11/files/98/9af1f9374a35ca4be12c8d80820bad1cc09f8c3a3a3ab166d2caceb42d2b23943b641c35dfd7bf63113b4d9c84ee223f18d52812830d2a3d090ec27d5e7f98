"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const html_relative_to_absolute_1 = __importDefault(require("./html-relative-to-absolute"));
const html_absolute_to_transform_ready_1 = __importDefault(require("./html-absolute-to-transform-ready"));
function htmlToTransformReady(html, siteUrl, itemPath, options) {
    let finalItemPath = null;
    let finalOptions = options || {};
    if (typeof itemPath === 'object' && itemPath !== null && !options) {
        finalOptions = itemPath;
        finalItemPath = null;
    }
    else if (typeof itemPath === 'string') {
        finalItemPath = itemPath;
    }
    const absolute = (0, html_relative_to_absolute_1.default)(html, siteUrl, finalItemPath, finalOptions);
    return (0, html_absolute_to_transform_ready_1.default)(absolute, siteUrl, finalOptions);
}
exports.default = htmlToTransformReady;
