"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("@tryghost/url-utils/lib/utils/index.js");
const codeCard = {
    name: 'code',
    type: 'dom',
    render({ payload, env: { dom } }) {
        if (!payload.code) {
            return dom.createTextNode('');
        }
        const pre = dom.createElement('pre');
        const code = dom.createElement('code');
        if (payload.language) {
            code.setAttribute('class', `language-${payload.language}`);
        }
        code.appendChild(dom.createTextNode(payload.code));
        pre.appendChild(code);
        if (payload.caption) {
            const figure = dom.createElement('figure');
            figure.setAttribute('class', 'kg-card kg-code-card');
            figure.appendChild(pre);
            const figcaption = dom.createElement('figcaption');
            figcaption.appendChild(dom.createRawHTMLSection(payload.caption));
            figure.appendChild(figcaption);
            return figure;
        }
        else {
            return pre;
        }
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
        payload.caption =
            payload.caption && (0, index_js_1.htmlToTransformReady)(payload.caption, options.siteUrl, options);
        return payload;
    },
};
exports.default = codeCard;
