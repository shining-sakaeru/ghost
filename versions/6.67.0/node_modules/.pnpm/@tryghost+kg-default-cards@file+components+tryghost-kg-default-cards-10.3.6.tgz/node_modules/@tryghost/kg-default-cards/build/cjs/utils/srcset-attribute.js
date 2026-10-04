"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSrcsetAttribute = exports.getSrcsetAttribute = void 0;
const is_local_content_image_js_1 = __importDefault(require("./is-local-content-image.js"));
const get_available_image_widths_js_1 = __importDefault(require("./get-available-image-widths.js"));
const is_unsplash_image_js_1 = __importDefault(require("./is-unsplash-image.js"));
// default content sizes: [600, 1000, 1600, 2400]
const getSrcsetAttribute = function ({ src, width, options, }) {
    if (!options.imageOptimization ||
        options.imageOptimization.srcsets === false ||
        !width ||
        !options.imageOptimization.contentImageSizes) {
        return;
    }
    if ((0, is_local_content_image_js_1.default)(src, options.siteUrl) &&
        options.canTransformImage &&
        !options.canTransformImage(src)) {
        return;
    }
    const srcsetWidths = (0, get_available_image_widths_js_1.default)({ width }, options.imageOptimization.contentImageSizes);
    // apply srcset if this is a relative image that matches Ghost's image url structure
    if ((0, is_local_content_image_js_1.default)(src, options.siteUrl)) {
        const match = src.match(/(.*\/content\/images)\/(.*)/);
        if (!match) {
            return;
        }
        const [, imagesPath, filename] = match;
        const srcs = [];
        srcsetWidths.forEach((srcsetWidth) => {
            if (srcsetWidth === width) {
                // use original image path if width matches exactly (avoids 302s from size->original)
                srcs.push(`${src} ${srcsetWidth}w`);
            }
            else if (srcsetWidth <= width) {
                // avoid creating srcset sizes larger than intrinsic image width
                srcs.push(`${imagesPath}/size/w${srcsetWidth}/${filename} ${srcsetWidth}w`);
            }
        });
        if (srcs.length) {
            return srcs.join(', ');
        }
    }
    // apply srcset if this is an Unsplash image
    if ((0, is_unsplash_image_js_1.default)(src)) {
        const unsplashUrl = new URL(src);
        const srcs = [];
        srcsetWidths.forEach((srcsetWidth) => {
            unsplashUrl.searchParams.set('w', String(srcsetWidth));
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
