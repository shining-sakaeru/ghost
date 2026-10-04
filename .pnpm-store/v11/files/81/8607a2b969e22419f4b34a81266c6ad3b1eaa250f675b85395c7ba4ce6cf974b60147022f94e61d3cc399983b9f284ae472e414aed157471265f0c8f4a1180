"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderPaywallNode = renderPaywallNode;
const add_create_document_option_js_1 = require("../../utils/add-create-document-option.js");
function renderPaywallNode(_, options = {}) {
    (0, add_create_document_option_js_1.addCreateDocumentOption)(options);
    const document = options.createDocument();
    const element = document.createElement('div');
    element.appendChild(document.createComment('members-only'));
    // `type: 'inner'` will render only the innerHTML of the element
    // @see @tryghost/kg-lexical-html-renderer package
    return { element, type: 'inner' };
}
