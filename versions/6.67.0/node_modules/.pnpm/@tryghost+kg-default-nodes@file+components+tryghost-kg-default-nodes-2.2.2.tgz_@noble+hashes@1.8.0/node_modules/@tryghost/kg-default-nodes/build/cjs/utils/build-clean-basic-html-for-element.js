"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCleanBasicHtmlForElement = buildCleanBasicHtmlForElement;
const kg_clean_basic_html_1 = require("@tryghost/kg-clean-basic-html");
function buildCleanBasicHtmlForElement(domNode) {
    return function _cleanBasicHtml(html, additionalOptions = {}) {
        const cleanedHtml = (0, kg_clean_basic_html_1.cleanBasicHtml)(html, {
            createDocument: (_html) => {
                const newDoc = domNode.ownerDocument.implementation.createHTMLDocument();
                newDoc.body.innerHTML = _html;
                return newDoc;
            },
            ...additionalOptions
        });
        return cleanedHtml;
    };
}
