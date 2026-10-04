"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderCodeBlockNode = renderCodeBlockNode;
const add_create_document_option_js_1 = require("../../utils/add-create-document-option.js");
const render_empty_container_js_1 = require("../../utils/render-empty-container.js");
function renderCodeBlockNode(node, options = {}) {
    (0, add_create_document_option_js_1.addCreateDocumentOption)(options);
    const document = options.createDocument();
    if (!node.code || node.code.trim() === '') {
        return (0, render_empty_container_js_1.renderEmptyContainer)(document);
    }
    const pre = document.createElement('pre');
    const code = document.createElement('code');
    if (node.language) {
        code.setAttribute('class', `language-${node.language}`);
    }
    code.appendChild(document.createTextNode(node.code));
    pre.appendChild(code);
    if (node.caption) {
        const figure = document.createElement('figure');
        figure.setAttribute('class', 'kg-card kg-code-card');
        figure.appendChild(pre);
        const figcaption = document.createElement('figcaption');
        figcaption.innerHTML = node.caption;
        figure.appendChild(figcaption);
        return { element: figure, type: 'outer' };
    }
    else {
        return { element: pre, type: 'outer' };
    }
}
