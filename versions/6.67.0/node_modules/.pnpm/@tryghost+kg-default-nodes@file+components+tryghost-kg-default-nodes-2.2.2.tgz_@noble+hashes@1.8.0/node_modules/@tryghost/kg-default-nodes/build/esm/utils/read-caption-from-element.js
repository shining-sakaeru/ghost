import { buildCleanBasicHtmlForElement } from './build-clean-basic-html-for-element.js';
export function readCaptionFromElement(element, { selector = 'figcaption' } = {}) {
    const cleanBasicHtml = buildCleanBasicHtmlForElement(element);
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
//# sourceMappingURL=read-caption-from-element.js.map