import { addCreateDocumentOption } from '../../utils/add-create-document-option.js';
export function renderPaywallNode(_, options = {}) {
    addCreateDocumentOption(options);
    const document = options.createDocument();
    const element = document.createElement('div');
    element.appendChild(document.createComment('members-only'));
    // `type: 'inner'` will render only the innerHTML of the element
    // @see @tryghost/kg-lexical-html-renderer package
    return { element, type: 'inner' };
}
//# sourceMappingURL=paywall-renderer.js.map