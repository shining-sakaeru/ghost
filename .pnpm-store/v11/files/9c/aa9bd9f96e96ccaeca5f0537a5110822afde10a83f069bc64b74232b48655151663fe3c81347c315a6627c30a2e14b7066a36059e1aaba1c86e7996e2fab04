"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const relative_to_absolute_1 = __importDefault(require("./relative-to-absolute"));
const absolute_to_transform_ready_1 = __importDefault(require("./absolute-to-transform-ready"));
function toTransformReady(url, siteUrl, itemPath, options) {
    let finalItemPath = null;
    let finalOptions = options || {};
    if (typeof itemPath === 'object' && itemPath !== null && !options) {
        finalOptions = itemPath;
        finalItemPath = null;
    }
    else if (typeof itemPath === 'string') {
        finalItemPath = itemPath;
    }
    const absoluteUrl = (0, relative_to_absolute_1.default)(url, siteUrl, finalItemPath, finalOptions);
    return (0, absolute_to_transform_ready_1.default)(absoluteUrl, siteUrl, finalOptions);
}
exports.default = toTransformReady;
