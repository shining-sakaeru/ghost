"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lexical_relative_to_absolute_1 = __importDefault(require("./lexical-relative-to-absolute"));
const lexical_absolute_to_transform_ready_1 = __importDefault(require("./lexical-absolute-to-transform-ready"));
function lexicalToTransformReady(lexical, siteUrl, itemPath, options) {
    let finalItemPath = null;
    let finalOptions = options || {};
    if (typeof itemPath === 'object' && itemPath !== null && !options) {
        finalOptions = itemPath;
        finalItemPath = null;
    }
    else if (typeof itemPath === 'string') {
        finalItemPath = itemPath;
    }
    const absolute = (0, lexical_relative_to_absolute_1.default)(lexical, siteUrl, finalItemPath, finalOptions);
    return (0, lexical_absolute_to_transform_ready_1.default)(absolute, siteUrl, finalOptions);
}
exports.default = lexicalToTransformReady;
