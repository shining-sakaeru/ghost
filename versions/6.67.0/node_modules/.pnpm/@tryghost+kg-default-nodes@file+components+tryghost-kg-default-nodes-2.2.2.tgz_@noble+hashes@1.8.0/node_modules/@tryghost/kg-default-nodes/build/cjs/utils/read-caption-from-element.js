"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCaptionFromElement = readCaptionFromElement;
const build_clean_basic_html_for_element_js_1 = require("./build-clean-basic-html-for-element.js");
function readCaptionFromElement(element, { selector = 'figcaption' } = {}) {
    const cleanBasicHtml = (0, build_clean_basic_html_for_element_js_1.buildCleanBasicHtmlForElement)(element);
    let caption;
    const figcaptions = Array.from(element.querySelectorAll(selector));
    if (figcaptions.length) {
        figcaptions.forEach((figcaption) => {
            const cleanHtml = cleanBasicHtml(figcaption.innerHTML) ?? '';
            if (!cleanHtml.trim()) {
                return;
            }
            caption = caption ? `${caption} / ${cleanHtml}` : cleanHtml;
        });
    }
    return caption;
}
