"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const relative_to_transform_ready_1 = __importDefault(require("./relative-to-transform-ready"));
const plaintextRelativeToTransformReady = function plaintextRelativeToTransformReady(plaintext, rootUrl, itemPath, options) {
    // itemPath is optional, if it's an object may be the options param instead
    let finalItemPath = null;
    let finalOptions = options || {};
    if (typeof itemPath === 'object' && itemPath !== null && !options) {
        finalOptions = itemPath;
        finalItemPath = null;
    }
    else if (typeof itemPath === 'string') {
        finalItemPath = itemPath;
    }
    // plaintext links look like "Link title [url]"
    // those are all we care about so we can do a fast regex here
    return plaintext.replace(/ \[(\/.*?)\]/g, function (fullMatch, path) {
        const newPath = (0, relative_to_transform_ready_1.default)(`${path}`, rootUrl, finalItemPath, finalOptions);
        return ` [${newPath}]`;
    });
};
exports.default = plaintextRelativeToTransformReady;
