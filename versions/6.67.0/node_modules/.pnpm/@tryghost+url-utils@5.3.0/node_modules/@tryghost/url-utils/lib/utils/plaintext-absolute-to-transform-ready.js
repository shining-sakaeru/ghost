"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const absolute_to_transform_ready_1 = __importDefault(require("./absolute-to-transform-ready"));
const build_early_exit_match_1 = __importDefault(require("./build-early-exit-match"));
const { escapeRegExp } = build_early_exit_match_1.default;
const url_1 = require("url");
function buildLinkRegex(rootUrl, options = {}) {
    // Build a regex that matches links from ANY configured base URL (site + CDNs)
    const baseUrls = [rootUrl, options.imageBaseUrl, options.filesBaseUrl, options.mediaBaseUrl]
        .filter((value) => Boolean(value));
    const patterns = baseUrls.map((baseUrl) => {
        const parsed = new url_1.URL(baseUrl);
        const escapedUrl = escapeRegExp(`${parsed.hostname}${parsed.pathname.replace(/\/$/, '')}`);
        return escapedUrl;
    });
    if (!patterns.length) {
        return null;
    }
    const pattern = patterns.length === 1 ? patterns[0] : `(?:${patterns.join('|')})`;
    return new RegExp(` \\[(https?://${pattern}.*?)\\]`, 'g');
}
const plaintextAbsoluteToTransformReady = function plaintextAbsoluteToTransformReady(plaintext, rootUrl, itemPath, options) {
    // itemPath is optional, if it's an object may be the options param instead
    let finalOptions = options || {};
    if (typeof itemPath === 'object' && itemPath !== null && !options) {
        finalOptions = itemPath;
    }
    // plaintext links look like "Link title [url]"
    // those links are all we care about so we can do a fast regex here
    const linkRegex = buildLinkRegex(rootUrl, finalOptions);
    return plaintext.replace(linkRegex, function (fullMatch, url) {
        const newUrl = (0, absolute_to_transform_ready_1.default)(`${url}`, rootUrl, finalOptions);
        return ` [${newUrl}]`;
    });
};
exports.default = plaintextAbsoluteToTransformReady;
