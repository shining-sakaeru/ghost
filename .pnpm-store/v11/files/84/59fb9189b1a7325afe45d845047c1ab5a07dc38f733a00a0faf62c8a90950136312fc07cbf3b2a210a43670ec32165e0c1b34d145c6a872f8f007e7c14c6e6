"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../utils/index.js");
const index_js_2 = require("@tryghost/url-utils/lib/utils/index.js");
const emailCtaCard = {
    name: 'email-cta',
    type: 'dom',
    render({ payload, env: { dom }, options = {} }) {
        const hasContent = !!payload.html;
        const hasButton = payload.showButton && !!payload.buttonText && !!payload.buttonUrl;
        if ((!hasContent && !hasButton) || options.target !== 'email') {
            return dom.createTextNode('');
        }
        const container = dom.createElement('div');
        if (payload.segment) {
            container.setAttribute('data-gh-segment', payload.segment);
        }
        if (payload.alignment === 'center') {
            container.setAttribute('class', 'align-center');
        }
        if (payload.showDividers) {
            container.appendChild(dom.createElement('hr'));
        }
        // wrap the replacement %%{replacement}%% so that when performing replacements
        // it's less likely for code samples to be mistaken for our replacement strings
        // NOTE: must be plain text rather than a custom element so that it's not removed by html->plaintext conversion
        payload.html = payload.html
            ? payload.html.replace(/\{(\w*?)(?:,? *"(.*?)")?\}/g, '%%$&%%')
            : '';
        // use the SimpleDOM document to create a raw HTML section.
        // avoids parsing/rendering of potentially broken or unsupported HTML
        const htmlSection = dom.createRawHTMLSection(payload.html);
        container.appendChild(htmlSection);
        if (payload.showButton && payload.buttonText && payload.buttonUrl) {
            const buttonTemplate = (0, index_js_1.hbs) `
                <p>
                    <div class="btn btn-accent">
                        <table border="0" cellspacing="0" cellpadding="0" align="{{alignment}}">
                            <tr>
                                <td align="center">
                                    <a href="{{buttonUrl}}">{{buttonText}}</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </p>
            `;
            const templateData = Object.assign({}, payload);
            const button = dom.createRawHTMLSection((0, index_js_1.dedent)(buttonTemplate(templateData)));
            container.appendChild(button);
        }
        if (payload.showDividers) {
            container.appendChild(dom.createElement('hr'));
        }
        return container;
    },
    absoluteToRelative(payload, options) {
        payload.html =
            payload.html && (0, index_js_2.htmlAbsoluteToRelative)(payload.html, options.siteUrl, options);
        payload.buttonUrl =
            payload.buttonUrl &&
                (0, index_js_2.absoluteToRelative)(payload.buttonUrl, options.siteUrl, options);
        return payload;
    },
    relativeToAbsolute(payload, options) {
        payload.html =
            payload.html &&
                (0, index_js_2.htmlRelativeToAbsolute)(payload.html, options.siteUrl, options.itemUrl ?? '', options);
        payload.buttonUrl =
            payload.buttonUrl &&
                (0, index_js_2.relativeToAbsolute)(payload.buttonUrl, options.siteUrl, options.itemUrl ?? '', options);
        return payload;
    },
    toTransformReady(payload, options) {
        payload.html =
            payload.html && (0, index_js_2.htmlToTransformReady)(payload.html, options.siteUrl, options);
        payload.buttonUrl =
            payload.buttonUrl && (0, index_js_2.toTransformReady)(payload.buttonUrl, options.siteUrl, options);
        return payload;
    },
};
exports.default = emailCtaCard;
