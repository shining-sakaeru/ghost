"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plaintext_relative_to_transform_ready_1 = __importDefault(require("./plaintext-relative-to-transform-ready"));
const plaintext_absolute_to_transform_ready_1 = __importDefault(require("./plaintext-absolute-to-transform-ready"));
function plaintextToTransformReady(plaintext, siteUrl, itemPath, options) {
    let finalItemPath = null;
    let finalOptions = options || {};
    if (typeof itemPath === 'object' && itemPath !== null && !options) {
        finalOptions = itemPath;
        finalItemPath = null;
    }
    else if (typeof itemPath === 'string') {
        finalItemPath = itemPath;
    }
    const relativeTransformed = (0, plaintext_relative_to_transform_ready_1.default)(plaintext, siteUrl, finalItemPath, finalOptions);
    return (0, plaintext_absolute_to_transform_ready_1.default)(relativeTransformed, siteUrl, finalOptions);
}
exports.default = plaintextToTransformReady;
