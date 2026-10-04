"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderHorizontalRuleNode = renderHorizontalRuleNode;
const add_create_document_option_js_1 = require("../../utils/add-create-document-option.js");
const tagged_template_fns_js_1 = require("../../utils/tagged-template-fns.js");
function horizontalRuleFrontendTemplate() {
    return (0, tagged_template_fns_js_1.html) `<hr />`;
}
function horizontalRuleEmailTemplate() {
    // Outlook doesn't support HR tags so we need to use a table with colored borders
    // Outer table sets spacing using padding for Outlook compatibility, inner table houses the colored border.
    // HR is kept for html-to-plaintext conversion but not shown. Must be inside the table so we can use
    // sibling selectors to adjust spacing between headings and hr cards.
    return (0, tagged_template_fns_js_1.html) `
        <table class="kg-card kg-hr-card" role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0">
            <tbody>
                <tr>
                    <td>
                        <!--[if !mso]><!-- -->
                        <hr style="display: none;" />
                        <!--<![endif]-->
                        <table class="kg-hr" role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    `;
}
function renderHorizontalRuleNode(_, options = {}) {
    (0, add_create_document_option_js_1.addCreateDocumentOption)(options);
    const document = options.createDocument();
    let renderedHtml;
    if (options.target === 'email') {
        renderedHtml = horizontalRuleEmailTemplate();
    }
    else {
        renderedHtml = horizontalRuleFrontendTemplate();
    }
    const element = document.createElement('div');
    element.innerHTML = renderedHtml;
    return { element, type: 'inner' };
}
