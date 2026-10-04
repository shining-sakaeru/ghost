"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("@tryghost/url-utils/lib/utils/index.js");
const beforeAfterCard = {
    name: 'before-after',
    type: 'dom',
    render({ payload, env: { dom }, options = {} }) {
        const cardWidth = payload.cardWidth === 'full' ? 'full' : 'wide';
        const startingPosition = Math.max(0, Math.min(100, Number.isNaN(parseInt(payload.startingPosition))
            ? 50
            : parseInt(payload.startingPosition)));
        const caption = payload.caption;
        const beforeImage = payload.beforeImage;
        const afterImage = payload.afterImage;
        const figure = dom.createElement('figure');
        figure.setAttribute('class', `kg-card kg-before-after-card kg-width-${cardWidth} ${caption ? 'kg-card-hascaption' : ''}`);
        let html = `
            <div class="kg-before-after-card-slider">
                <div class="kg-before-after-card-image-after">
                    <img src="${afterImage.src}" width="${afterImage.width}"/>
                </div>
                <div class="kg-before-after-card-image-before">
                    <img src="${beforeImage.src}" width="${beforeImage.width}"/>
                </div>
                <input class="kg-before-after-card-slider-input" type="range" min="0" max="100" value="${startingPosition}"/>
                <span class="kg-before-after-card-slider-handle"></span>
            </div>
        `;
        if (options.target === 'email') {
            // @TODO Support for emails
            html = ``;
        }
        figure.appendChild(dom.createRawHTMLSection(html));
        if (caption) {
            const figcaption = dom.createElement('figcaption');
            figcaption.appendChild(dom.createRawHTMLSection(caption));
            figure.appendChild(figcaption);
        }
        return figure;
    },
    absoluteToRelative(payload, options) {
        payload.caption =
            payload.caption &&
                (0, index_js_1.htmlAbsoluteToRelative)(payload.caption, options.siteUrl, options);
        return payload;
    },
    relativeToAbsolute(payload, options) {
        payload.caption =
            payload.caption &&
                (0, index_js_1.htmlRelativeToAbsolute)(payload.caption, options.siteUrl, options.itemUrl ?? '', options);
        return payload;
    },
    toTransformReady(payload, options) {
        payload.html =
            payload.html && (0, index_js_1.htmlToTransformReady)(payload.html, options.siteUrl, options);
        return payload;
    },
};
exports.default = beforeAfterCard;
