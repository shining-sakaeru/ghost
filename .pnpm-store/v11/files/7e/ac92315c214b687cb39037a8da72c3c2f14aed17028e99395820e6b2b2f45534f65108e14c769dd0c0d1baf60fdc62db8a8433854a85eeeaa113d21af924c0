"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("@tryghost/url-utils/lib/utils/index.js");
const index_js_2 = require("../utils/index.js");
const buttonCard = {
    name: 'button',
    type: 'dom',
    render({ payload, env: { dom }, options = {} }) {
        if (!payload.buttonUrl || !payload.buttonText) {
            return dom.createTextNode('');
        }
        const frontendTemplate = (0, index_js_2.hbs) `
            <div class="kg-card kg-button-card kg-align-{{alignment}}">
                <a href="{{buttonUrl}}" class="kg-btn kg-btn-accent">{{buttonText}}</a>
            </div>
        `;
        const emailTemplate = (0, index_js_2.hbs) `
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
        const renderTemplate = options.target === 'email' ? emailTemplate : frontendTemplate;
        const templateData = Object.assign({ alignment: 'left' }, payload);
        const html = (0, index_js_2.dedent)(renderTemplate(templateData));
        return dom.createRawHTMLSection(html);
    },
    absoluteToRelative(payload, options) {
        payload.buttonUrl =
            payload.buttonUrl &&
                (0, index_js_1.absoluteToRelative)(payload.buttonUrl, options.siteUrl, options);
        return payload;
    },
    relativeToAbsolute(payload, options) {
        payload.buttonUrl =
            payload.buttonUrl &&
                (0, index_js_1.relativeToAbsolute)(payload.buttonUrl, options.siteUrl, options.itemUrl ?? '', options);
        return payload;
    },
    toTransformReady(payload, options) {
        payload.buttonUrl =
            payload.buttonUrl &&
                (0, index_js_1.toTransformReady)(payload.buttonUrl, options.siteUrl, options.itemUrl, options);
        return payload;
    },
};
exports.default = buttonCard;
