"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kg_markdown_html_renderer_1 = require("@tryghost/kg-markdown-html-renderer");
const index_js_1 = require("@tryghost/url-utils/lib/utils/index.js");
const markdownCard = {
    name: 'markdown',
    type: 'dom',
    config: {
        commentWrapper: true,
    },
    render({ payload, env: { dom }, options }) {
        // convert markdown to HTML ready for insertion into dom
        const html = (0, kg_markdown_html_renderer_1.render)(payload.markdown || '', options);
        if (!html) {
            return dom.createTextNode('');
        }
        // use the SimpleDOM document to create a raw HTML section.
        // avoids parsing/rendering of potentially broken or unsupported HTML
        return dom.createRawHTMLSection(html);
    },
    absoluteToRelative(payload, options) {
        payload.markdown =
            payload.markdown &&
                (0, index_js_1.markdownAbsoluteToRelative)(payload.markdown, options.siteUrl, options);
        return payload;
    },
    relativeToAbsolute(payload, options) {
        payload.markdown =
            payload.markdown &&
                (0, index_js_1.markdownRelativeToAbsolute)(payload.markdown, options.siteUrl, options.itemUrl ?? '', options);
        return payload;
    },
    toTransformReady(payload, options) {
        payload.markdown =
            payload.markdown &&
                (0, index_js_1.markdownToTransformReady)(payload.markdown, options.siteUrl, options);
        return payload;
    },
};
exports.default = markdownCard;
