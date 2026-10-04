"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderEmailCtaNode = renderEmailCtaNode;
const add_create_document_option_js_1 = require("../../utils/add-create-document-option.js");
const replacement_strings_js_1 = require("../../utils/replacement-strings.js");
const escape_html_js_1 = require("../../utils/escape-html.js");
const render_empty_container_js_1 = require("../../utils/render-empty-container.js");
function renderEmailCtaNode(node, options = {}) {
    (0, add_create_document_option_js_1.addCreateDocumentOption)(options);
    const document = options.createDocument();
    const { html, buttonText, buttonUrl, showButton, alignment, segment, showDividers } = node;
    const hasButton = showButton && !!buttonText && !!buttonUrl;
    if ((!html && !hasButton) || options.target !== 'email') {
        return (0, render_empty_container_js_1.renderEmptyContainer)(document);
    }
    const element = document.createElement('div');
    if (segment) {
        element.setAttribute('data-gh-segment', segment);
    }
    if (alignment === 'center') {
        element.setAttribute('class', 'align-center');
    }
    if (showDividers) {
        element.appendChild(document.createElement('hr'));
    }
    const cleanedHtml = (0, replacement_strings_js_1.wrapReplacementStrings)((0, replacement_strings_js_1.removeCodeWrappersFromHelpers)((0, replacement_strings_js_1.removeSpaces)(html), document));
    element.innerHTML = element.innerHTML + cleanedHtml;
    if (hasButton) {
        const buttonTemplate = `
            <div class="btn btn-accent">
                <table border="0" cellspacing="0" cellpadding="0" align="${(0, escape_html_js_1.escapeHtml)(alignment)}">
                    <tbody>
                        <tr>
                            <td align="center">
                                <a href="${(0, escape_html_js_1.escapeHtml)(buttonUrl)}">${(0, escape_html_js_1.escapeHtml)(buttonText)}</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p></p>
        `; // the inline <p> element is so we get a line break if there's no separators/hr used
        const cleanedButton = (0, replacement_strings_js_1.wrapReplacementStrings)((0, replacement_strings_js_1.removeCodeWrappersFromHelpers)((0, replacement_strings_js_1.removeSpaces)(buttonTemplate), document));
        element.innerHTML = element.innerHTML + cleanedButton;
    }
    if (showDividers) {
        element.appendChild(document.createElement('hr'));
    }
    return { element, type: 'outer' };
}
