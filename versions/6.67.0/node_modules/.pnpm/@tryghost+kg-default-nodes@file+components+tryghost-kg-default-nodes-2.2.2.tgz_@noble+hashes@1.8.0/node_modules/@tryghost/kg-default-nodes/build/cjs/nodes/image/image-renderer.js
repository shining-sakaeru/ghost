"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderImageNode = renderImageNode;
const get_available_image_widths_js_1 = require("../../utils/get-available-image-widths.js");
const is_content_image_js_1 = require("../../utils/is-content-image.js");
const srcset_attribute_js_1 = require("../../utils/srcset-attribute.js");
const get_resized_image_dimensions_js_1 = require("../../utils/get-resized-image-dimensions.js");
const add_create_document_option_js_1 = require("../../utils/add-create-document-option.js");
const render_empty_container_js_1 = require("../../utils/render-empty-container.js");
const MODERN_IMAGE_FORMATS = ['avif', 'webp'];
function isAnimatedImage(url = '') {
    try {
        const parsedUrl = new URL(url, 'http://localhost');
        return parsedUrl.pathname.toLowerCase().endsWith('.gif');
    }
    catch {
        return false;
    }
}
function renderImageNode(node, options = {}) {
    (0, add_create_document_option_js_1.addCreateDocumentOption)(options);
    const document = options.createDocument();
    if (!node.src || node.src.trim() === '') {
        return (0, render_empty_container_js_1.renderEmptyContainer)(document);
    }
    const figure = document.createElement('figure');
    let figureClasses = 'kg-card kg-image-card';
    if (node.cardWidth !== 'regular') {
        figureClasses += ` kg-width-${node.cardWidth}`;
    }
    if (node.caption) {
        figureClasses += ' kg-card-hascaption';
    }
    figure.setAttribute('class', figureClasses);
    const img = document.createElement('img');
    img.setAttribute('src', node.src);
    img.setAttribute('class', 'kg-image');
    img.setAttribute('alt', node.alt);
    img.setAttribute('loading', 'lazy');
    if (node.title) {
        img.setAttribute('title', node.title);
    }
    if (node.width && node.height) {
        img.setAttribute('width', String(node.width));
        img.setAttribute('height', String(node.height));
    }
    // images can be resized to max width, if that's the case output
    // the resized width/height attrs to ensure 3rd party gallery plugins
    // aren't affected by differing sizes
    const { canTransformImage } = options;
    const { defaultMaxWidth } = options.imageOptimization || {};
    if (defaultMaxWidth &&
        node.width > defaultMaxWidth &&
        (0, is_content_image_js_1.isContentImage)(node.src, options.siteUrl, options.imageBaseUrl) &&
        canTransformImage &&
        canTransformImage(node.src)) {
        const imageDimensions = {
            width: node.width,
            height: node.height
        };
        const { width, height } = (0, get_resized_image_dimensions_js_1.getResizedImageDimensions)(imageDimensions, { width: defaultMaxWidth });
        img.setAttribute('width', String(width));
        img.setAttribute('height', String(height));
    }
    const imgAttributes = {
        src: node.src,
        width: node.width,
        height: node.height
    };
    let picture = null;
    if (options.target !== 'email') {
        (0, srcset_attribute_js_1.setSrcsetAttribute)(img, imgAttributes, options);
        let sizes;
        if (img.getAttribute('srcset') && node.width && node.width >= 720) {
            // standard size
            if (!node.cardWidth || node.cardWidth === 'regular') {
                sizes = '(min-width: 720px) 720px';
            }
            if (node.cardWidth === 'wide' && node.width >= 1200) {
                sizes = '(min-width: 1200px) 1200px';
            }
        }
        if (sizes) {
            img.setAttribute('sizes', sizes);
        }
        const shouldRenderPicture = Boolean(options.feature?.pictureImageFormats &&
            img.getAttribute('srcset') &&
            !isAnimatedImage(node.src) &&
            (0, is_content_image_js_1.isContentImage)(node.src, options.siteUrl, options.imageBaseUrl) &&
            options.canTransformImage?.(node.src) &&
            typeof options.canTransformImageToFormat === 'function');
        if (shouldRenderPicture) {
            picture = document.createElement('picture');
            let sourcesAdded = false;
            MODERN_IMAGE_FORMATS.forEach((format) => {
                if (!options.canTransformImageToFormat(format)) {
                    return;
                }
                const formattedSrcset = (0, srcset_attribute_js_1.getSrcsetAttribute)({
                    src: node.src,
                    width: node.width,
                    options,
                    format
                });
                if (!formattedSrcset) {
                    return;
                }
                const source = document.createElement('source');
                source.setAttribute('srcset', formattedSrcset);
                source.setAttribute('type', `image/${format}`);
                if (sizes) {
                    source.setAttribute('sizes', sizes);
                }
                picture.appendChild(source);
                sourcesAdded = true;
            });
            if (sourcesAdded) {
                picture.appendChild(img);
            }
            else {
                picture = null;
            }
        }
    }
    // Outlook is unable to properly resize images without a width/height
    // so we add that at the expected size in emails (600px) and use a higher
    // resolution image to keep images looking good on retina screens
    if (options.target === 'email' && node.width && node.height) {
        let imageDimensions = {
            width: node.width,
            height: node.height
        };
        if (node.width >= 600) {
            imageDimensions = (0, get_resized_image_dimensions_js_1.getResizedImageDimensions)(imageDimensions, { width: 600 });
        }
        img.setAttribute('width', String(imageDimensions.width));
        img.setAttribute('height', String(imageDimensions.height));
        const contentImageSizes = options.imageOptimization?.contentImageSizes;
        if (contentImageSizes && (0, is_content_image_js_1.isContentImage)(node.src, options.siteUrl, options.imageBaseUrl) && options.canTransformImage?.(node.src)) {
            // find available image size next up from 2x600 so we can use it for the "retina" src
            const availableImageWidths = (0, get_available_image_widths_js_1.getAvailableImageWidths)(node, contentImageSizes);
            const srcWidth = availableImageWidths.find(width => width >= 1200);
            if (!srcWidth || srcWidth === node.width) {
                // do nothing, width is smaller than retina or matches the original node src
            }
            else {
                const match = node.src.match(/(.*\/content\/images)\/(.*)/);
                if (match) {
                    const [, imagesPath, filename] = match;
                    img.setAttribute('src', `${imagesPath}/size/w${srcWidth}/${filename}`);
                }
            }
        }
    }
    if (node.href) {
        const a = document.createElement('a');
        a.setAttribute('href', node.href);
        a.appendChild(picture || img);
        figure.appendChild(a);
    }
    else {
        figure.appendChild(picture || img);
    }
    if (node.caption) {
        const caption = document.createElement('figcaption');
        caption.innerHTML = node.caption;
        figure.appendChild(caption);
    }
    return { element: figure, type: 'outer' };
}
