"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isLocalContentImage;
function isLocalContentImage(url, siteUrl = '') {
    const normalizedSiteUrl = siteUrl.replace(/\/$/, '');
    const imagePath = url.replace(normalizedSiteUrl, '');
    return /^(\/.*|__GHOST_URL__)\/?content\/images\//.test(imagePath);
}
