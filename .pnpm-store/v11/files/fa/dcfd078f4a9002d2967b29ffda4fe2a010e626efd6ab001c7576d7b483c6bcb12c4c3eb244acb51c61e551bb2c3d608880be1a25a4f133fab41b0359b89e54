import { htmlAbsoluteToRelative, htmlRelativeToAbsolute, htmlToTransformReady, } from '@tryghost/url-utils/lib/utils/index.js';
const htmlCard = {
    name: 'html',
    type: 'dom',
    config: {
        commentWrapper: true,
    },
    render({ payload, env: { dom } }) {
        if (!payload.html) {
            return dom.createTextNode('');
        }
        // use the SimpleDOM document to create a raw HTML section.
        // avoids parsing/rendering of potentially broken or unsupported HTML
        return dom.createRawHTMLSection(payload.html);
    },
    absoluteToRelative(payload, options) {
        payload.html =
            payload.html && htmlAbsoluteToRelative(payload.html, options.siteUrl, options);
        return payload;
    },
    relativeToAbsolute(payload, options) {
        payload.html =
            payload.html &&
                htmlRelativeToAbsolute(payload.html, options.siteUrl, options.itemUrl ?? '', options);
        return payload;
    },
    toTransformReady(payload, options) {
        payload.html =
            payload.html && htmlToTransformReady(payload.html, options.siteUrl, options);
        return payload;
    },
};
export default htmlCard;
//# sourceMappingURL=html.js.map