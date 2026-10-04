export default function isLocalContentImage(url, siteUrl = '') {
    const normalizedSiteUrl = siteUrl.replace(/\/$/, '');
    const imagePath = url.replace(normalizedSiteUrl, '');
    return /^(\/.*|__GHOST_URL__)\/?content\/images\//.test(imagePath);
}
//# sourceMappingURL=is-local-content-image.js.map