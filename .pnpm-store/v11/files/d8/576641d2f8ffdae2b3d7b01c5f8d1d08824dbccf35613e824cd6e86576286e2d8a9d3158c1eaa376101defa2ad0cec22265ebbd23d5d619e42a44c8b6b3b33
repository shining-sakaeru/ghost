"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderButtonNode = renderButtonNode;
const add_create_document_option_js_1 = require("../../utils/add-create-document-option.js");
const render_empty_container_js_1 = require("../../utils/render-empty-container.js");
const email_button_js_1 = require("../../utils/render-helpers/email-button.js");
const tagged_template_fns_js_1 = require("../../utils/tagged-template-fns.js");
function renderButtonNode(node, options = {}) {
    (0, add_create_document_option_js_1.addCreateDocumentOption)(options);
    const document = options.createDocument();
    if (!node.buttonUrl || node.buttonUrl.trim() === '') {
        return (0, render_empty_container_js_1.renderEmptyContainer)(document);
    }
    if (options.target === 'email') {
        return emailTemplate(node, document);
    }
    else {
        return frontendTemplate(node, document);
    }
}
function frontendTemplate(node, document) {
    const cardClasses = getCardClasses(node);
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', cardClasses);
    const button = document.createElement('a');
    button.setAttribute('href', node.buttonUrl);
    button.setAttribute('class', 'kg-btn kg-btn-accent');
    button.textContent = node.buttonText || 'Button Title';
    cardDiv.appendChild(button);
    return { element: cardDiv, type: 'outer' };
}
function emailTemplate(node, document) {
    const { buttonUrl, buttonText } = node;
    const buttonHtml = (0, email_button_js_1.renderEmailButton)({
        alignment: node.alignment,
        url: buttonUrl,
        text: buttonText || 'Button Title'
    });
    const cardHtml = (0, tagged_template_fns_js_1.html) `
        <table class="kg-card kg-button-card" border="0" cellpadding="0" cellspacing="0">
            <tbody>
                <tr>
                    <td class="kg-card-spacing">
                        ${buttonHtml}
                    </td>
                </tr>
            </tbody>
        </table>
    `;
    const element = document.createElement('div');
    element.innerHTML = cardHtml;
    return { element, type: 'inner' };
}
function getCardClasses(node) {
    const cardClasses = ['kg-card kg-button-card'];
    if (node.alignment) {
        cardClasses.push(`kg-align-${node.alignment}`);
    }
    return cardClasses.join(' ');
}
