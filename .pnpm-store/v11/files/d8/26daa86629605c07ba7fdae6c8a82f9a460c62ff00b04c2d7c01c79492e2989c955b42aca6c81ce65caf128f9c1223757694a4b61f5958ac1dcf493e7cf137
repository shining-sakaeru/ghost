"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderHeaderNodeV1 = renderHeaderNodeV1;
const add_create_document_option_js_1 = require("../../../../utils/add-create-document-option.js");
const tagged_template_fns_js_1 = require("../../../../utils/tagged-template-fns.js");
const render_empty_container_js_1 = require("../../../../utils/render-empty-container.js");
const slugify_js_1 = require("../../../../utils/slugify.js");
function renderHeaderNodeV1(node, options = {}) {
    (0, add_create_document_option_js_1.addCreateDocumentOption)(options);
    const document = options.createDocument();
    if (!node.header && !node.subheader && (!node.buttonEnabled || (!node.buttonUrl || !node.buttonText))) {
        return (0, render_empty_container_js_1.renderEmptyContainer)(document);
    }
    const templateData = {
        size: node.size,
        style: node.style,
        buttonEnabled: node.buttonEnabled && Boolean(node.buttonUrl) && Boolean(node.buttonText),
        buttonUrl: node.buttonUrl,
        buttonText: node.buttonText,
        header: node.header,
        headerSlug: (0, slugify_js_1.slugify)(node.header),
        subheader: node.subheader,
        subheaderSlug: (0, slugify_js_1.slugify)(node.subheader),
        hasHeader: !!node.header,
        hasSubheader: !!node.subheader && !!node.subheader.replace(/(<br\s*\/?>)+$/i, '').trim(),
        backgroundImageStyle: node.style === 'image' ? `background-image: url(${node.backgroundImageSrc})` : '',
        backgroundImageSrc: node.backgroundImageSrc
    };
    const headerHtml = (0, tagged_template_fns_js_1.html) `
        <div
            class="kg-card kg-header-card kg-width-full kg-size-${templateData.size} kg-style-${templateData.style}"
            data-kg-background-image="${templateData.backgroundImageSrc}"
            style="${templateData.backgroundImageStyle}"
        >
            ${templateData.hasHeader && (0, tagged_template_fns_js_1.html) `
                <h2 class="kg-header-card-header" id="${templateData.headerSlug}">
                    ${templateData.header}
                </h2>
            `}
            ${templateData.hasSubheader && (0, tagged_template_fns_js_1.html) `
                <h3 class="kg-header-card-subheader" id="${templateData.subheaderSlug}">
                    ${templateData.subheader}
                </h3>
            `}
            ${templateData.buttonEnabled && (0, tagged_template_fns_js_1.html) `
                <a class="kg-header-card-button" href="${templateData.buttonUrl}">
                    ${templateData.buttonText}
                </a>
            `}
        </div>
    `;
    const div = document.createElement('div');
    div.innerHTML = headerHtml;
    return { element: div, type: 'inner' };
}
