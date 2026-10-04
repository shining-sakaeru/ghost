"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const absolute_to_relative_1 = __importDefault(require("./absolute-to-relative"));
const url_1 = require("url");
function isRelative(url) {
    let parsedInput;
    try {
        parsedInput = new url_1.URL(url, 'http://relative');
    }
    catch {
        // url was unparseable
        return false;
    }
    return parsedInput.origin === 'http://relative';
}
const absoluteToTransformReady = function (url, root, _options = {}) {
    const defaultOptions = {
        replacementStr: '__GHOST_URL__',
        withoutSubdirectory: true,
        staticImageUrlPrefix: 'content/images',
        staticFilesUrlPrefix: 'content/files',
        staticMediaUrlPrefix: 'content/media',
        imageBaseUrl: null,
        filesBaseUrl: null,
        mediaBaseUrl: null,
        ignoreProtocol: true,
        assetsOnly: false
    };
    const options = Object.assign({}, defaultOptions, _options);
    if (isRelative(url)) {
        return url;
    }
    // convert to relative with stripped subdir
    // always returns root-relative starting with forward slash
    const rootRelativeUrl = (0, absolute_to_relative_1.default)(url, root, options);
    if (isRelative(rootRelativeUrl)) {
        return `${options.replacementStr}${rootRelativeUrl}`;
    }
    if (options.mediaBaseUrl) {
        const mediaRelativeUrl = (0, absolute_to_relative_1.default)(url, options.mediaBaseUrl, options);
        if (isRelative(mediaRelativeUrl)) {
            return `${options.replacementStr}${mediaRelativeUrl}`;
        }
    }
    if (options.filesBaseUrl) {
        const filesRelativeUrl = (0, absolute_to_relative_1.default)(url, options.filesBaseUrl, options);
        if (isRelative(filesRelativeUrl)) {
            return `${options.replacementStr}${filesRelativeUrl}`;
        }
    }
    if (options.imageBaseUrl) {
        const imageRelativeUrl = (0, absolute_to_relative_1.default)(url, options.imageBaseUrl, options);
        if (isRelative(imageRelativeUrl)) {
            return `${options.replacementStr}${imageRelativeUrl}`;
        }
    }
    return url;
};
exports.default = absoluteToTransformReady;
