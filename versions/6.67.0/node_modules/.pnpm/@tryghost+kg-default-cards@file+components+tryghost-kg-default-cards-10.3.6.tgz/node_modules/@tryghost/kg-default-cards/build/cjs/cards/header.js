"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("@tryghost/url-utils/lib/utils/index.js");
const kg_utils_1 = require("@tryghost/kg-utils");
const index_js_2 = require("../utils/index.js");
const headerCard = {
    name: 'header',
    type: 'dom',
    render({ payload: _payload, env: { dom }, options: { ghostVersion } = {} }) {
        const payload = _payload;
        if (!payload.header &&
            !payload.subheader &&
            (!payload.buttonEnabled || !payload.buttonUrl || !payload.buttonText)) {
            return dom.createTextNode('');
        }
        const frontendTemplate = (0, index_js_2.hbs) `
            <div class="kg-card kg-header-card kg-width-full kg-size-{{size}} kg-style-{{style}}" style="{{backgroundImageStyle}}" data-kg-background-image="{{backgroundImageSrc}}">
                {{#if this.hasHeader}}
                    <h2 class="kg-header-card-header" id="{{headerSlug}}">{{{header}}}</h2>
                {{/if}}
                {{#if this.hasSubheader}}
                    <h3 class="kg-header-card-subheader" id="{{subheaderSlug}}">{{{subheader}}}</h3>
                {{/if}}
                {{#if buttonEnabled}}
                    <a href="{{buttonUrl}}" class="kg-header-card-button">
                        {{buttonText}}
                    </a>
                {{/if}}
            </div>
        `;
        const templateData = {
            size: payload.size,
            style: payload.style,
            buttonEnabled: payload.buttonEnabled && Boolean(payload.buttonUrl) && Boolean(payload.buttonText),
            buttonUrl: payload.buttonUrl,
            buttonText: payload.buttonText,
            header: payload.header,
            headerSlug: (0, kg_utils_1.slugify)(payload.header || '', { ghostVersion }),
            subheader: payload.subheader,
            subheaderSlug: (0, kg_utils_1.slugify)(payload.subheader || '', { ghostVersion }),
            hasHeader: payload.header && true,
            hasSubheader: payload.subheader && Boolean(payload.subheader.replace(/(<br>)+$/g, '').trim()),
            backgroundImageStyle: payload.style === 'image' ? `background-image: url(${payload.backgroundImageSrc})` : '',
            backgroundImageSrc: payload.backgroundImageSrc,
        };
        const html = (0, index_js_2.dedent)(frontendTemplate(templateData));
        return dom.createRawHTMLSection(html);
    },
    absoluteToRelative(payload, options) {
        const p = payload;
        p.buttonUrl = p.buttonUrl && (0, index_js_1.absoluteToRelative)(p.buttonUrl, options.siteUrl, options);
        p.backgroundImageSrc =
            p.backgroundImageSrc && (0, index_js_1.absoluteToRelative)(p.backgroundImageSrc, options.siteUrl, options);
        p.header = p.header && (0, index_js_1.htmlAbsoluteToRelative)(p.header, options.siteUrl, options);
        p.subheader = p.subheader && (0, index_js_1.htmlAbsoluteToRelative)(p.subheader, options.siteUrl, options);
        return payload;
    },
    relativeToAbsolute(payload, options) {
        const p = payload;
        p.buttonUrl =
            p.buttonUrl &&
                (0, index_js_1.relativeToAbsolute)(p.buttonUrl, options.siteUrl, options.itemUrl ?? '', options);
        p.backgroundImageSrc =
            p.backgroundImageSrc &&
                (0, index_js_1.relativeToAbsolute)(p.backgroundImageSrc, options.siteUrl, options.itemUrl ?? '', options);
        p.header =
            p.header && (0, index_js_1.htmlRelativeToAbsolute)(p.header, options.siteUrl, options.itemUrl ?? '', options);
        p.subheader =
            p.subheader &&
                (0, index_js_1.htmlRelativeToAbsolute)(p.subheader, options.siteUrl, options.itemUrl ?? '', options);
        return payload;
    },
    toTransformReady(payload, options) {
        const p = payload;
        p.buttonUrl =
            p.buttonUrl && (0, index_js_1.toTransformReady)(p.buttonUrl, options.siteUrl, options.itemUrl ?? '', options);
        p.backgroundImageSrc =
            p.backgroundImageSrc &&
                (0, index_js_1.toTransformReady)(p.backgroundImageSrc, options.siteUrl, options.itemUrl ?? '', options);
        p.header =
            p.header && (0, index_js_1.htmlToTransformReady)(p.header, options.siteUrl, options.itemUrl ?? '', options);
        p.subheader =
            p.subheader &&
                (0, index_js_1.htmlToTransformReady)(p.subheader, options.siteUrl, options.itemUrl ?? '', options);
        return payload;
    },
};
exports.default = headerCard;
