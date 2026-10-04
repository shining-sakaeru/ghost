"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSrcsetAttribute = exports.getSrcsetAttribute = void 0;
const is_content_image_js_1 = require("./is-content-image.js");
const get_available_image_widths_js_1 = require("./get-available-image-widths.js");
const is_unsplash_image_js_1 = require("./is-unsplash-image.js");
const getSrcsetAttribute = function ({ src, width, options, format }) {
    if (!options.imageOptimization || options.imageOptimization.srcsets === false || !width || !options.imageOptimization.contentImageSizes) {
        return;
    }
    if ((0, is_content_image_js_1.isContentImage)(src, options.siteUrl, options.imageBaseUrl) && options.canTransformImage && !options.canTransformImage(src)) {
        return;
    }
    const srcsetWidths = (0, get_available_image_widths_js_1.getAvailableImageWidths)({ width }, options.imageOptimization.contentImageSizes);
    // apply srcset if this is a local or CDN image that matches Ghost's image url structure
    if ((0, is_content_image_js_1.isContentImage)(src, options.siteUrl, options.imageBaseUrl)) {
        const match = src.match(/(.*\/content\/images)\/(.*)/);
        if (!match) {
            return;
        }
        const [, imagesPath, filename] = match;
        const srcs = [];
        srcsetWidths.forEach((srcsetWidth) => {
            if (srcsetWidth === width) {
                // use original image path if width matches exactly (avoids 302s from size->original)
                // unless a specific output format was requested
                if (format) {
                    srcs.push(`${imagesPath}/size/w${srcsetWidth}/format/${format}/${filename} ${srcsetWidth}w`);
                }
                else {
                    srcs.push(`${src} ${srcsetWidth}w`);
                }
            }
            else if (srcsetWidth <= width) {
                // avoid creating srcset sizes larger than intrinsic image width
                if (format) {
                    srcs.push(`${imagesPath}/size/w${srcsetWidth}/format/${format}/${filename} ${srcsetWidth}w`);
                }
                else {
                    srcs.push(`${imagesPath}/size/w${srcsetWidth}/${filename} ${srcsetWidth}w`);
                }
            }
        });
        if (srcs.length) {
            return srcs.join(', ');
        }
    }
    // apply srcset if this is an Unsplash image
    if ((0, is_unsplash_image_js_1.isUnsplashImage)(src)) {
        const unsplashUrl = new URL(src);
        const srcs = [];
        srcsetWidths.forEach((srcsetWidth) => {
            unsplashUrl.searchParams.set('w', String(srcsetWidth));
            if (format) {
                unsplashUrl.searchParams.set('fm', format);
            }
            srcs.push(`${unsplashUrl.href} ${srcsetWidth}w`);
        });
        return srcs.join(', ');
    }
};
exports.getSrcsetAttribute = getSrcsetAttribute;
const setSrcsetAttribute = function (elem, image, options) {
    if (!elem || !['IMG', 'SOURCE'].includes(elem.tagName) || !elem.getAttribute('src') || !image) {
        return;
    }
    const { src, width } = image;
    const srcset = (0, exports.getSrcsetAttribute)({ src, width, options });
    if (srcset) {
        elem.setAttribute('srcset', srcset);
    }
};
exports.setSrcsetAttribute = setSrcsetAttribute;
