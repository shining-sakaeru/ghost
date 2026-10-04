"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const relative_to_absolute_1 = __importDefault(require("./relative-to-absolute"));
const url_1 = require("url");
const relativeToTransformReady = function (url, root, itemPath, _options) {
    // itemPath is optional, if it's an object may be the options param instead
    let finalItemPath = null;
    let finalOptions = _options || {};
    if (typeof itemPath === 'object' && itemPath !== null && !_options) {
        finalOptions = itemPath;
        finalItemPath = null;
    }
    else if (typeof itemPath === 'string') {
        finalItemPath = itemPath;
    }
    const defaultOptions = {
        replacementStr: '__GHOST_URL__',
        staticImageUrlPrefix: 'content/images'
    };
    const overrideOptions = {
        secure: false
    };
    const options = Object.assign({}, defaultOptions, finalOptions, overrideOptions);
    // convert to absolute
    const absoluteUrl = (0, relative_to_absolute_1.default)(url, root, finalItemPath, options);
    if (absoluteUrl === url) {
        return url;
    }
    const rootUrl = new url_1.URL(root);
    const rootPathname = rootUrl.pathname.replace(/\/$/, '');
    // only convert to transform-ready if root url has no subdirectory or the subdirectory matches
    if (!url.match(/^\//) || rootPathname === '' || url.indexOf(rootPathname) === 0 || url.indexOf(`/${options.staticImageUrlPrefix}`) === 0) {
        // normalize root to match the protocol of absoluteUrl (in case secure option changed it)
        const absoluteUrlParsed = new url_1.URL(absoluteUrl);
        const normalizedRoot = `${absoluteUrlParsed.protocol}//${rootUrl.host}${rootUrl.pathname}`.replace(/\/$/, '');
        // replace root with replacement string
        const transformedUrl = absoluteUrl
            .replace(normalizedRoot, `${options.replacementStr}/`) // always have trailing slash after magic string
            .replace(/([^:])\/\//g, '$1/');
        return transformedUrl;
    }
    return url;
};
exports.default = relativeToTransformReady;
