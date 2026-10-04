"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderMarkdownNode = renderMarkdownNode;
const add_create_document_option_js_1 = require("../../utils/add-create-document-option.js");
const kg_markdown_html_renderer_1 = require("@tryghost/kg-markdown-html-renderer");
function renderMarkdownNode(node, options = {}) {
    (0, add_create_document_option_js_1.addCreateDocumentOption)(options);
    const document = options.createDocument();
    const html = (0, kg_markdown_html_renderer_1.render)(node.markdown || '', options);
    const element = document.createElement('div');
    element.innerHTML = html;
    // `type: 'inner'` will render only the innerHTML of the element
    // @see @tryghost/kg-lexical-html-renderer package
    return { element, type: 'inner' };
}
