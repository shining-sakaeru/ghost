"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCodeBlockNode = parseCodeBlockNode;
const read_caption_from_element_js_1 = require("../../utils/read-caption-from-element.js");
function parseCodeBlockNode(CodeBlockNode) {
    return {
        figure: (nodeElem) => {
            const pre = nodeElem.querySelector('pre');
            if (nodeElem.tagName === 'FIGURE' && pre) {
                return {
                    conversion(domNode) {
                        const code = pre.querySelector('code');
                        const figcaption = domNode.querySelector('figcaption');
                        // if there's no caption the pre key should pick it up
                        if (!code || !figcaption) {
                            return null;
                        }
                        const payload = {
                            code: code.textContent,
                            caption: (0, read_caption_from_element_js_1.readCaptionFromElement)(domNode)
                        };
                        const preClass = pre.getAttribute('class') || '';
                        const codeClass = code.getAttribute('class') || '';
                        const langRegex = /lang(?:uage)?-(.*?)(?:\s|$)/i;
                        const languageMatches = preClass.match(langRegex) || codeClass.match(langRegex);
                        if (languageMatches) {
                            payload.language = languageMatches[1].toLowerCase();
                        }
                        const node = new CodeBlockNode(payload);
                        return { node };
                    },
                    priority: 2 // falls back to pre if no caption
                };
            }
            return null;
        },
        pre: () => ({
            conversion(domNode) {
                if (domNode.tagName === 'PRE') {
                    const [codeElement] = domNode.children;
                    if (codeElement && codeElement.tagName === 'CODE') {
                        const payload = { code: codeElement.textContent };
                        const preClass = domNode.getAttribute('class') || '';
                        const codeClass = codeElement.getAttribute('class') || '';
                        const langRegex = /lang(?:uage)?-(.*?)(?:\s|$)/i;
                        const languageMatches = preClass.match(langRegex) || codeClass.match(langRegex);
                        if (languageMatches) {
                            payload.language = languageMatches[1].toLowerCase();
                        }
                        const node = new CodeBlockNode(payload);
                        return { node };
                    }
                }
                return null;
            },
            priority: 1
        })
    };
}
