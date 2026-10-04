"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("@tryghost/url-utils/lib/utils/index.js");
const index_js_2 = require("../utils/index.js");
const productCard = {
    name: 'product',
    type: 'dom',
    render({ payload: _payload, env: { dom }, options = {} }) {
        const payload = _payload;
        const productButtonEnabled = payload.productButtonEnabled && payload.productButton && payload.productUrl;
        if (!payload.productTitle && !payload.productDescription && !productButtonEnabled) {
            return dom.createTextNode('');
        }
        const frontendTemplate = (0, index_js_2.hbs) `
        <div class="kg-card kg-product-card">
            <div class="kg-product-card-container">
                {{#if productImageEnabled}}
                    <img {{{productImageAttrs}}} class="kg-product-card-image" loading="lazy" />
                {{/if}}
                <div class="kg-product-card-title-container">
                    <h4 class="kg-product-card-title">{{{productTitle}}}</h4>
                </div>
                {{#if productRatingEnabled}}
                <div class="kg-product-card-rating">
                    <span class="{{star1}} kg-product-card-rating-star">{{{starIcon}}}</span>
                    <span class="{{star2}} kg-product-card-rating-star">{{{starIcon}}}</span>
                    <span class="{{star3}} kg-product-card-rating-star">{{{starIcon}}}</span>
                    <span class="{{star4}} kg-product-card-rating-star">{{{starIcon}}}</span>
                    <span class="{{star5}} kg-product-card-rating-star">{{{starIcon}}}</span>
                </div>
                {{/if}}
                <div class="kg-product-card-description">{{{productDescription}}}</div>
                {{#if productButtonEnabled}}
                    <a href="{{productUrl}}" class="kg-product-card-button kg-product-card-btn-accent" target="_blank" rel="noopener noreferrer">
                        <span>
                            {{productButton}}
                        </span>
                    </a>
                {{/if}}
            </div>
        </div>
        `;
        const emailTemplate = (0, index_js_2.hbs) `
        <table cellspacing="0" cellpadding="0" border="0" class="kg-product-card">
            {{#if productImageEnabled}}
            <tr>
                <td align="center" style="padding-top:0; padding-bottom:0; margin-bottom:0; padding-bottom:0;">
                    <img {{{productImageAttrs}}} style="height: auto; border: none; padding-bottom: 16px;" border="0">
                </td>
            </tr>
            {{/if}}
            <tr>
                <td valign="top">
                    <h4 style="font-size: 22px !important; margin-top: 0 !important; margin-bottom: 0 !important; font-weight: 700;">{{{productTitle}}}</h4>
                </td>
            </tr>
            {{#if productRatingEnabled}}
            <tr style="padding-top:0; padding-bottom:0; margin-bottom:0; padding-bottom:0;">
                <td valign="top" class="kg-product-rating">
                    <img src="https://static.ghost.org/v4.0.0/images/star-rating-darkmode-{{productStarRating}}.png" border="0" class="is-dark-background">
                    <img src="https://static.ghost.org/v4.0.0/images/star-rating-{{productStarRating}}.png" border="0" class="is-light-background">
                </td>
            </tr>
            {{/if}}
            <tr>
                <td style="padding-top:0; padding-bottom:0; margin-bottom:0; padding-bottom:0;">
                    <div style="padding-top: 8px; opacity: 0.7; font-size: 17px; line-height: 1.4; margin-bottom: -24px;">{{{productDescription}}}</div>
                </td>
            </tr>
            {{#if productButtonEnabled}}
            <tr>
                <td style="padding-top:0; padding-bottom:0; margin-bottom:0; padding-bottom:0;">
                    <div class="btn btn-accent" style="box-sizing: border-box;display: table;width: 100%;padding-top: 16px;">
                        <a href="{{productUrl}}" style="overflow-wrap: anywhere;border: solid 1px;border-radius: 5px;box-sizing: border-box;cursor: pointer;display: inline-block;font-size: 14px;font-weight: bold;margin: 0;padding: 0;text-decoration: none;color: #FFFFFF; width: 100%; text-align: center;">
                            <span style="display: block;padding: 12px 25px;">{{productButton}}</span>
                        </a>
                    </div>
                </td>
            </tr>
            {{/if}}
        </table>
        `;
        const templateData = {
            productButtonEnabled,
            productRatingEnabled: payload.productRatingEnabled,
            productImageEnabled: Boolean(payload.productImageSrc),
            productImageAttrs: (0, index_js_2.generateImgAttrs)({
                src: payload.productImageSrc,
                width: payload.productImageWidth,
                height: payload.productImageHeight,
                options,
            }),
            productTitle: payload.productTitle,
            productStarRating: payload.productStarRating,
            productDescription: payload.productDescription,
            productButton: payload.productButton,
            productUrl: payload.productUrl,
            starIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.729,1.2l3.346,6.629,6.44.638a.805.805,0,0,1,.5,1.374l-5.3,5.253,1.965,7.138a.813.813,0,0,1-1.151.935L12,19.934,5.48,23.163a.813.813,0,0,1-1.151-.935L6.294,15.09.99,9.837a.805.805,0,0,1,.5-1.374l6.44-.638L11.271,1.2A.819.819,0,0,1,12.729,1.2Z"/></svg>`,
        };
        const starActiveClasses = 'kg-product-card-rating-active';
        for (let i = 1; i <= 5; i++) {
            templateData['star' + i] = '';
            if (payload.productStarRating && payload.productStarRating >= i) {
                templateData['star' + i] = starActiveClasses;
            }
        }
        const renderTemplate = options.target === 'email' ? emailTemplate : frontendTemplate;
        const html = (0, index_js_2.dedent)(renderTemplate(templateData));
        return dom.createRawHTMLSection(html);
    },
    absoluteToRelative(payload, options) {
        const p = payload;
        p.productTitle =
            p.productTitle && (0, index_js_1.htmlAbsoluteToRelative)(p.productTitle, options.siteUrl, options);
        p.productDescription =
            p.productDescription &&
                (0, index_js_1.htmlAbsoluteToRelative)(p.productDescription, options.siteUrl, options);
        p.productImageSrc =
            p.productImageSrc && (0, index_js_1.absoluteToRelative)(p.productImageSrc, options.siteUrl, options);
        p.productUrl = p.productUrl && (0, index_js_1.absoluteToRelative)(p.productUrl, options.siteUrl, options);
        return payload;
    },
    relativeToAbsolute(payload, options) {
        const p = payload;
        p.productTitle =
            p.productTitle &&
                (0, index_js_1.htmlRelativeToAbsolute)(p.productTitle, options.siteUrl, options.itemUrl ?? '', options);
        p.productDescription =
            p.productDescription &&
                (0, index_js_1.htmlRelativeToAbsolute)(p.productDescription, options.siteUrl, options.itemUrl ?? '', options);
        p.productImageSrc =
            p.productImageSrc &&
                (0, index_js_1.relativeToAbsolute)(p.productImageSrc, options.siteUrl, options.itemUrl ?? '', options);
        p.productUrl =
            p.productUrl &&
                (0, index_js_1.relativeToAbsolute)(p.productUrl, options.siteUrl, options.itemUrl ?? '', options);
        return payload;
    },
    toTransformReady(payload, options) {
        const p = payload;
        p.productTitle =
            p.productTitle &&
                (0, index_js_1.htmlToTransformReady)(p.productTitle, options.siteUrl, options.itemUrl ?? '', options);
        p.productDescription =
            p.productDescription &&
                (0, index_js_1.htmlToTransformReady)(p.productDescription, options.siteUrl, options.itemUrl ?? '', options);
        p.productImageSrc =
            p.productImageSrc &&
                (0, index_js_1.toTransformReady)(p.productImageSrc, options.siteUrl, options.itemUrl ?? '', options);
        p.productUrl =
            p.productUrl &&
                (0, index_js_1.toTransformReady)(p.productUrl, options.siteUrl, options.itemUrl ?? '', options);
        return payload;
    },
};
exports.default = productCard;
