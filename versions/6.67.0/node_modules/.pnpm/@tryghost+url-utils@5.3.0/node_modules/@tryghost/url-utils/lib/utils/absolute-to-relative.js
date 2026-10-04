"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
const strip_subdirectory_from_path_1 = __importDefault(require("./strip-subdirectory-from-path"));
/**
 * Convert an absolute URL to a root-relative path if it matches the supplied root domain.
 *
 * @param {string} url Absolute URL to convert to relative if possible
 * @param {string} rootUrl Absolute URL to which the returned relative URL will match the domain root
 * @param {Object} [options] Options that affect the conversion
 * @param {boolean} [options.ignoreProtocol=true] Ignore protocol when matching url to root
 * @param {boolean} [options.withoutSubdirectory=false] Strip the root subdirectory from the returned path
 * @returns {string} The passed-in url or a relative path
 */
const absoluteToRelative = function absoluteToRelative(url, rootUrl, _options = {}) {
    const defaultOptions = {
        ignoreProtocol: true,
        withoutSubdirectory: false,
        assetsOnly: false,
        staticImageUrlPrefix: 'content/images'
    };
    const options = Object.assign({}, defaultOptions, _options);
    if (options.assetsOnly) {
        const staticImageUrlPrefixRegex = new RegExp(options.staticImageUrlPrefix);
        if (!url.match(staticImageUrlPrefixRegex)) {
            return url;
        }
    }
    let parsedUrl;
    let parsedRoot;
    try {
        parsedUrl = new url_1.URL(url, 'http://relative');
        parsedRoot = parsedUrl.origin === 'null' ? undefined : new url_1.URL(rootUrl || parsedUrl.origin);
        // return the url as-is if it was relative or non-http
        if (parsedUrl.origin === 'null' || parsedUrl.origin === 'http://relative') {
            return url;
        }
    }
    catch {
        return url;
    }
    if (!parsedRoot) {
        return url;
    }
    const matchesHost = parsedUrl.host === parsedRoot.host;
    const matchesProtocol = parsedUrl.protocol === parsedRoot.protocol;
    const matchesPath = parsedUrl.pathname.indexOf(parsedRoot.pathname) === 0;
    if (matchesHost && (options.ignoreProtocol || matchesProtocol) && matchesPath) {
        let path = parsedUrl.href.replace(parsedUrl.origin, '');
        if (options.withoutSubdirectory) {
            path = (0, strip_subdirectory_from_path_1.default)(path, rootUrl);
        }
        return path;
    }
    return url;
};
exports.default = absoluteToRelative;
