import { addCreateDocumentOption } from '../../utils/add-create-document-option.js';
import { renderEmptyContainer } from '../../utils/render-empty-container.js';
import { renderEmailButton } from '../../utils/render-helpers/email-button.js';
import { html } from '../../utils/tagged-template-fns.js';
export function renderButtonNode(node, options = {}) {
    addCreateDocumentOption(options);
    const document = options.createDocument();
    if (!node.buttonUrl || node.buttonUrl.trim() === '') {
        return renderEmptyContainer(document);
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
    const buttonHtml = renderEmailButton({
        alignment: node.alignment,
        url: buttonUrl,
        text: buttonText || 'Button Title'
    });
    const cardHtml = html `
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
//# sourceMappingURL=button-renderer.js.map