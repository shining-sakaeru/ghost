import { isLocalContentImage, isUnsplashImage, getAvailableImageWidths, setSrcsetAttribute, resizeImage, } from '../utils/index.js';
import { absoluteToRelative, relativeToAbsolute, htmlAbsoluteToRelative, htmlRelativeToAbsolute, htmlToTransformReady, toTransformReady, } from '@tryghost/url-utils/lib/utils/index.js';
/**
 * <figure class="kg-gallery-card kg-width-wide">
 *   <div class="kg-gallery-container>
 *      <div class="kg-gallery-row">
 *        <div class="kg-gallery-image"><img width="" height=""></div>
 *        <div class="kg-gallery-image"><img width="" height=""></div>
 *        <div class="kg-gallery-image"><img width="" height=""></div>
 *      </div>
 *      <div class="kg-gallery-row">
 *        <div class="kg-gallery-image"><img></div>
 *        <div class="kg-gallery-image"><img></div>
 *      </div>
 *   </div>
 *   <figcaption></figcaption>
 * </figure>
 */
const MAX_IMG_PER_ROW = 3;
const galleryCard = {
    name: 'gallery',
    type: 'dom',
    render({ payload: _payload, env: { dom }, options = {} }) {
        const payload = _payload;
        const isValidImage = (image) => {
            return image.fileName && image.src && image.width && image.height;
        };
        let validImages = [];
        if (payload.images && payload.images.length) {
            validImages = payload.images.filter(isValidImage);
        }
        if (validImages.length === 0) {
            return dom.createTextNode('');
        }
        const figure = dom.createElement('figure');
        figure.setAttribute('class', 'kg-card kg-gallery-card kg-width-wide');
        const container = dom.createElement('div');
        container.setAttribute('class', 'kg-gallery-container');
        figure.appendChild(container);
        const buildStructure = function buildStructure(images) {
            const rows = [];
            const noOfImages = images.length;
            images.forEach((image, idx) => {
                let row = image.row;
                if (noOfImages > 1 && noOfImages % MAX_IMG_PER_ROW === 1 && idx === noOfImages - 2) {
                    row = row + 1;
                }
                if (!rows[row]) {
                    rows[row] = [];
                }
                rows[row].push(image);
            });
            return rows;
        };
        const rows = buildStructure(validImages);
        rows.forEach((row) => {
            const rowDiv = dom.createElement('div');
            rowDiv.setAttribute('class', 'kg-gallery-row');
            row.forEach((image) => {
                const imgDiv = dom.createElement('div');
                imgDiv.setAttribute('class', 'kg-gallery-image');
                const img = dom.createElement('img');
                img.setAttribute('src', image.src);
                img.setAttribute('width', image.width);
                img.setAttribute('height', image.height);
                img.setAttribute('loading', 'lazy');
                img.setAttribute('alt', image.alt || '');
                if (image.title) {
                    img.setAttribute('title', image.title);
                }
                // images can be resized to max width, if that's the case output
                // the resized width/height attrs to ensure 3rd party gallery plugins
                // aren't affected by differing sizes
                const { canTransformImage } = options;
                const { defaultMaxWidth } = options.imageOptimization || {};
                if (defaultMaxWidth &&
                    image.width > defaultMaxWidth &&
                    isLocalContentImage(image.src, options.siteUrl) &&
                    canTransformImage &&
                    canTransformImage(image.src)) {
                    const resized = resizeImage(image, { width: defaultMaxWidth });
                    img.setAttribute('width', resized.width);
                    img.setAttribute('height', resized.height);
                }
                // add srcset+sizes except for email clients which do not have good support for either
                if (options.target !== 'email') {
                    setSrcsetAttribute(img, image, options);
                    if (img.getAttribute('srcset') && image.width >= 720) {
                        if (rows.length === 1 && row.length === 1 && image.width >= 1200) {
                            img.setAttribute('sizes', '(min-width: 1200px) 1200px');
                        }
                        else {
                            img.setAttribute('sizes', '(min-width: 720px) 720px');
                        }
                    }
                }
                // Outlook is unable to properly resize images without a width/height
                // so we modify those to fit max width (600px) and use appropriately
                // resized images if available
                if (options.target === 'email') {
                    // only resize if needed, width/height always exists for gallery image unline image cards
                    if (image.width > 600) {
                        const newImageDimensions = resizeImage(image, { width: 600 });
                        img.setAttribute('width', newImageDimensions.width);
                        img.setAttribute('height', newImageDimensions.height);
                    }
                    if (isLocalContentImage(image.src, options.siteUrl) &&
                        options.canTransformImage &&
                        options.canTransformImage(image.src)) {
                        // find available image size next up from 2x600 so we can use it for the "retina" src
                        const availableImageWidths = getAvailableImageWidths(image, options.imageOptimization.contentImageSizes);
                        const srcWidth = availableImageWidths.find((width) => width >= 1200);
                        if (!srcWidth || srcWidth === image.width) {
                            // do nothing, width is smaller than retina or matches the original payload src
                        }
                        else {
                            const match = image.src.match(/(.*\/content\/images)\/(.*)/);
                            if (match) {
                                const [, imagesPath, filename] = match;
                                img.setAttribute('src', `${imagesPath}/size/w${srcWidth}/${filename}`);
                            }
                        }
                    }
                    if (isUnsplashImage(image.src)) {
                        const unsplashUrl = new URL(image.src);
                        unsplashUrl.searchParams.set('w', '1200');
                        img.setAttribute('src', unsplashUrl.href);
                    }
                }
                if (image.href) {
                    const a = dom.createElement('a');
                    a.setAttribute('href', image.href);
                    a.appendChild(img);
                    imgDiv.appendChild(a);
                }
                else {
                    imgDiv.appendChild(img);
                }
                rowDiv.appendChild(imgDiv);
            });
            container.appendChild(rowDiv);
        });
        if (payload.caption) {
            const figcaption = dom.createElement('figcaption');
            figcaption.appendChild(dom.createRawHTMLSection(payload.caption));
            figure.appendChild(figcaption);
            figure.setAttribute('class', `${figure.getAttribute('class')} kg-card-hascaption`);
        }
        return figure;
    },
    absoluteToRelative(payload, options) {
        const p = payload;
        if (p.images) {
            p.images.forEach((image) => {
                image.src = image.src && absoluteToRelative(image.src, options.siteUrl, options);
                image.caption =
                    image.caption && htmlAbsoluteToRelative(image.caption, options.siteUrl, options);
            });
        }
        p.caption = p.caption && htmlAbsoluteToRelative(p.caption, options.siteUrl, options);
        return payload;
    },
    relativeToAbsolute(payload, options) {
        const p = payload;
        if (p.images) {
            p.images.forEach((image) => {
                image.src =
                    image.src &&
                        relativeToAbsolute(image.src, options.siteUrl, options.itemUrl ?? '', options);
                image.caption =
                    image.caption &&
                        htmlRelativeToAbsolute(image.caption, options.siteUrl, options.itemUrl ?? '', options);
            });
        }
        p.caption =
            p.caption &&
                htmlRelativeToAbsolute(p.caption, options.siteUrl, options.itemUrl ?? '', options);
        return payload;
    },
    toTransformReady(payload, options) {
        const p = payload;
        if (p.images) {
            p.images.forEach((image) => {
                image.src = image.src && toTransformReady(image.src, options.siteUrl, options);
                image.caption =
                    image.caption && htmlToTransformReady(image.caption, options.siteUrl, options);
            });
        }
        p.caption = p.caption && htmlToTransformReady(p.caption, options.siteUrl, options);
        return payload;
    },
};
export default galleryCard;
//# sourceMappingURL=gallery.js.map