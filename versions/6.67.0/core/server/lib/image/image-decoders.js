"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllowedImageLoaders = getAllowedImageLoaders;
exports.restrictImageDecoders = restrictImageDecoders;
const image_formats_1 = require("./image-formats");
// sharp picks its decoder from a file's contents, not its name, so limit the
// libvips loaders it can use to the image formats Ghost is configured to
// accept.
// Gift link previews are rendered from an internal PNG and SVG, whatever the
// upload config says
const ALWAYS_ALLOWED_LOADERS = ['VipsForeignLoadPng', 'VipsForeignLoadSvg'];
function getAllowedImageLoaders(extensions) {
    const loaders = new Set(ALWAYS_ALLOWED_LOADERS);
    for (const ext of extensions) {
        const loader = (0, image_formats_1.getImageLoader)(ext);
        if (loader) {
            loaders.add(loader);
        }
    }
    return [...loaders].sort();
}
function loadSharp() {
    try {
        return require('sharp');
    }
    catch {
        // sharp is optional - without it Ghost stores images without processing them
        return undefined;
    }
}
/**
 * Blocks every libvips loader except the ones needed for the given extensions.
 * The block is process-wide, but lives in libvips, so it only covers copies of
 * sharp that share Ghost's libvips.
 *
 * @returns the allowed loaders, or undefined when sharp isn't installed
 */
function restrictImageDecoders(extensions, { requireSharp = loadSharp } = {}) {
    const sharp = requireSharp();
    if (!sharp) {
        return undefined;
    }
    const loaders = getAllowedImageLoaders(extensions);
    sharp.block({ operation: ['VipsForeignLoad'] });
    sharp.unblock({ operation: loaders });
    return loaders;
}
