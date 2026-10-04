"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderEmailNode = renderEmailNode;
const add_create_document_option_js_1 = require("../../utils/add-create-document-option.js");
const replacement_strings_js_1 = require("../../utils/replacement-strings.js");
const render_empty_container_js_1 = require("../../utils/render-empty-container.js");
function renderEmailNode(node, options = {}) {
    (0, add_create_document_option_js_1.addCreateDocumentOption)(options);
    const document = options.createDocument();
    const html = node.html;
    if (!html || options.target !== 'email') {
        return (0, render_empty_container_js_1.renderEmptyContainer)(document);
    }
    const cleanedHtml = (0, replacement_strings_js_1.wrapReplacementStrings)((0, replacement_strings_js_1.removeCodeWrappersFromHelpers)((0, replacement_strings_js_1.removeSpaces)(html), document));
    const element = document.createElement('div');
    element.innerHTML = cleanedHtml;
    // `type: 'inner'` will render only the innerHTML of the element
    // @see @tryghost/kg-lexical-html-renderer package
    return { element, type: 'inner' };
}
