"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEmbedNode = parseEmbedNode;
const read_caption_from_element_js_1 = require("../../utils/read-caption-from-element.js");
// TODO: add NFT card parser
function parseEmbedNode(EmbedNode) {
    return {
        figure: (nodeElem) => {
            if (nodeElem.nodeType === 1 && nodeElem.tagName === 'FIGURE') {
                const iframe = nodeElem.querySelector('iframe');
                if (iframe) {
                    return {
                        conversion(domNode) {
                            const payload = _createPayloadForIframe(iframe);
                            if (!payload) {
                                return null;
                            }
                            payload.caption = (0, read_caption_from_element_js_1.readCaptionFromElement)(domNode);
                            const node = new EmbedNode(payload);
                            return { node };
                        },
                        priority: 1
                    };
                }
                const blockquote = nodeElem.querySelector('blockquote');
                if (blockquote) {
                    return {
                        conversion(domNode) {
                            const link = domNode.querySelector('a');
                            if (!link) {
                                return null;
                            }
                            const url = link.getAttribute('href');
                            // If we don't have a url, or it's not an absolute URL, we can't handle this
                            if (!url || !url.match(/^https?:\/\//i)) {
                                return null;
                            }
                            const payload = { url: url };
                            // append caption, remove element from blockquote
                            payload.caption = (0, read_caption_from_element_js_1.readCaptionFromElement)(domNode);
                            const figcaption = domNode.querySelector('figcaption');
                            figcaption?.remove();
                            payload.html = domNode.innerHTML;
                            const node = new EmbedNode(payload);
                            return { node };
                        },
                        priority: 1
                    };
                }
            }
            return null;
        },
        iframe: (nodeElem) => {
            if (nodeElem.nodeType === 1 && nodeElem.tagName === 'IFRAME') {
                return {
                    conversion(domNode) {
                        if (domNode.tagName !== 'IFRAME') {
                            return null;
                        }
                        const payload = _createPayloadForIframe(domNode);
                        if (!payload) {
                            return null;
                        }
                        const node = new EmbedNode(payload);
                        return { node };
                    },
                    priority: 1
                };
            }
            return null;
        }
    };
}
function _createPayloadForIframe(iframe) {
    // If we don't have a src Or it's not an absolute URL, we can't handle this
    // This regex handles http://, https:// or //
    if (!iframe.src || !iframe.src.match(/^(https?:)?\/\//i)) {
        return;
    }
    // if it's a schemaless URL, convert to https
    if (iframe.src.match(/^\/\//)) {
        iframe.src = `https:${iframe.src}`;
    }
    const payload = {
        url: iframe.src
    };
    payload.html = iframe.outerHTML;
    return payload;
}
