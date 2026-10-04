"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("@tryghost/url-utils/lib/utils/index.js");
const index_js_2 = require("../utils/index.js");
const calloutCard = {
    name: 'callout',
    type: 'dom',
    render({ payload, env: { dom } }) {
        if (!payload.calloutText) {
            return dom.createTextNode('');
        }
        const template = (0, index_js_2.hbs) `
            <div class="kg-card kg-callout-card kg-callout-card-{{backgroundColor}}">
                {{#if calloutEmoji}}
                    <div class="kg-callout-emoji">{{calloutEmoji}}</div>
                {{/if}}
                    <div class="kg-callout-text">{{{calloutText}}}</div>
            </div>
        `;
        const html = (0, index_js_2.dedent)(template({
            calloutEmoji: payload.calloutEmoji,
            calloutText: payload.calloutText,
            backgroundColor: payload.backgroundColor,
        }));
        return dom.createRawHTMLSection(html);
    },
    absoluteToRelative(payload, options) {
        payload.calloutText =
            payload.calloutText &&
                (0, index_js_1.htmlAbsoluteToRelative)(payload.calloutText, options.siteUrl, options);
        return payload;
    },
    relativeToAbsolute(payload, options) {
        payload.calloutText =
            payload.calloutText &&
                (0, index_js_1.htmlRelativeToAbsolute)(payload.calloutText, options.siteUrl, options.itemUrl ?? '', options);
        return payload;
    },
    toTransformReady(payload, options) {
        payload.calloutText =
            payload.calloutText &&
                (0, index_js_1.htmlToTransformReady)(payload.calloutText, options.siteUrl, options);
        return payload;
    },
};
exports.default = calloutCard;
