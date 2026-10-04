"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderHtmlNode = renderHtmlNode;
const add_create_document_option_js_1 = require("../../utils/add-create-document-option.js");
const render_empty_container_js_1 = require("../../utils/render-empty-container.js");
const visibility_js_1 = require("../../utils/visibility.js");
const replacement_strings_js_1 = require("../../utils/replacement-strings.js");
function renderHtmlNode(node, options = {}) {
    (0, add_create_document_option_js_1.addCreateDocumentOption)(options);
    const document = options.createDocument();
    const html = node.html;
    if (!html) {
        return (0, render_empty_container_js_1.renderEmptyContainer)(document);
    }
    // Wrap replacement strings like {uniqueid} with %% for email processing
    // Only wrap if emailUniqueid labs flag is enabled
    let processedHtml = html;
    if (options.feature?.emailUniqueid) {
        processedHtml = (0, replacement_strings_js_1.wrapReplacementStrings)(html);
    }
    const wrappedHtml = `\n<!--kg-card-begin: html-->\n${processedHtml}\n<!--kg-card-end: html-->\n`;
    const textarea = document.createElement('textarea');
    textarea.value = wrappedHtml;
    if (node.visibility) {
        const renderOutput = { element: textarea, type: 'value' };
        return (0, visibility_js_1.renderWithVisibility)(renderOutput, node.visibility, options);
    }
    // `type: 'value'` will render the value of the textarea element
    return { element: textarea, type: 'value' };
}
