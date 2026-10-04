"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isContentImage = exports.isLocalContentImage = void 0;
const matchesContentImagePath = function (url, baseUrl = '', pattern = /^\/?content\/images\//) {
    const normalized = baseUrl.replace(/\/$/, '');
    const path = url.replace(normalized, '');
    return pattern.test(path);
};
const isLocalContentImage = function (url, siteUrl = '') {
    return matchesContentImagePath(url, siteUrl, /^(\/.*|__GHOST_URL__)\/?content\/images\//);
};
exports.isLocalContentImage = isLocalContentImage;
const isContentImage = function (url, siteUrl = '', imageBaseUrl = '') {
    return (0, exports.isLocalContentImage)(url, siteUrl) || Boolean(imageBaseUrl && matchesContentImagePath(url, imageBaseUrl));
};
exports.isContentImage = isContentImage;
