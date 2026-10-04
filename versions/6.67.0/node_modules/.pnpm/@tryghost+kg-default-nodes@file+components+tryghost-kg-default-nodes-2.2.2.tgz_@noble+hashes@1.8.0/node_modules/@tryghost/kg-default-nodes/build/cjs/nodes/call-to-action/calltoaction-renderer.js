"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderCallToActionNode = renderCallToActionNode;
const email_button_js_1 = require("../../utils/render-helpers/email-button.js");
const add_create_document_option_js_1 = require("../../utils/add-create-document-option.js");
const visibility_js_1 = require("../../utils/visibility.js");
const get_resized_image_dimensions_js_1 = require("../../utils/get-resized-image-dimensions.js");
const is_content_image_js_1 = require("../../utils/is-content-image.js");
const build_clean_basic_html_for_element_js_1 = require("../../utils/build-clean-basic-html-for-element.js");
const get_first_html_element_js_1 = require("../../utils/get-first-html-element.js");
const showButton = (dataset) => dataset.showButton && dataset.buttonUrl && dataset.buttonText;
const wrapWithLink = (dataset, content) => {
    if (!showButton(dataset)) {
        return content;
    }
    return `<a href="${dataset.buttonUrl}">${content}</a>`;
};
function ctaCardTemplate(dataset) {
    // Add validation for buttonColor
    if (!dataset.buttonColor || !dataset.buttonColor.match(/^(?:[a-zA-Z\d-]+|#(?:[a-fA-F\d]{3}|[a-fA-F\d]{6}))$/)) {
        dataset.buttonColor = 'accent';
    }
    const buttonAccent = dataset.buttonColor === 'accent' ? 'kg-style-accent' : '';
    const buttonStyle = dataset.buttonColor === 'accent'
        ? `style="color: ${dataset.buttonTextColor};"`
        : `style="background-color: ${dataset.buttonColor}; color: ${dataset.buttonTextColor};"`;
    return `
        <div class="kg-card kg-cta-card kg-cta-bg-${dataset.backgroundColor} kg-cta-${dataset.layout} ${dataset.showDividers ? '' : 'kg-cta-no-dividers'} ${dataset.imageUrl ? 'kg-cta-has-img' : ''} ${dataset.linkColor === 'accent' ? 'kg-cta-link-accent' : ''} ${dataset.alignment === 'center' ? 'kg-cta-centered' : ''}" data-layout="${dataset.layout}">
            ${dataset.hasSponsorLabel ? `
                <div class="kg-cta-sponsor-label-wrapper">
                    <div class="kg-cta-sponsor-label">
                        ${dataset.sponsorLabel}
                    </div>
                </div>
            ` : ''}
            <div class="kg-cta-content">
                ${dataset.imageUrl ? `
                    <div class="kg-cta-image-container">
                        ${wrapWithLink(dataset, `<img src="${dataset.imageUrl}" alt="CTA Image" ${dataset?.imageWidth && dataset.imageHeight ? `data-image-dimensions="${dataset.imageWidth}x${dataset.imageHeight}"` : ''}>`)}
                    </div>
                ` : ''}
                ${dataset.textValue || dataset.showButton ? `
                    <div class="kg-cta-content-inner">
                    ${dataset.textValue ? `
                        <div class="kg-cta-text">
                            ${dataset.textValue}
                        </div>
                    ` : ''}
                    ${showButton(dataset) ? `
                        <a href="${dataset.buttonUrl}" class="kg-cta-button ${buttonAccent}" ${buttonStyle}>
                            ${dataset.buttonText}
                        </a>
                        ` : ''}
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}
function emailCTATemplate(dataset, options = {}) {
    let imageDimensions;
    if (dataset.imageUrl && dataset.imageWidth && dataset.imageHeight) {
        imageDimensions = {
            width: dataset.imageWidth,
            height: dataset.imageHeight
        };
        if (dataset.imageWidth >= 560) {
            imageDimensions = (0, get_resized_image_dimensions_js_1.getResizedImageDimensions)(imageDimensions, { width: 560 });
        }
    }
    if (dataset.layout === 'minimal' && dataset.imageUrl) {
        if ((0, is_content_image_js_1.isContentImage)(dataset.imageUrl, options.siteUrl, options.imageBaseUrl) && options.canTransformImage?.(dataset.imageUrl)) {
            const match = dataset.imageUrl.match(/(.*\/content\/images)\/(.*)/);
            if (match) {
                const [, imagesPath, filename] = match;
                const iconSize = options?.imageOptimization?.internalImageSizes?.['email-cta-minimal-image'] || { width: 256, height: 256 }; // default to 256 since we know the image is a square
                dataset.imageUrl = `${imagesPath}/size/w${iconSize.width}h${iconSize.height}/${filename}`;
            }
        }
    }
    const isTransparentCTA = dataset.backgroundColor === 'none' || dataset.backgroundColor === 'white';
    const isDarkBackground = options.design?.backgroundIsDark;
    const isBlackButton = dataset.buttonColor === 'black' || dataset.buttonColor === '#000000' || dataset.buttonColor === '#000';
    if (isTransparentCTA && isDarkBackground && isBlackButton) {
        dataset.buttonColor = '#ffffff';
    }
    const buttonHtml = (0, email_button_js_1.renderEmailButton)({
        url: dataset.buttonUrl,
        text: dataset.buttonText,
        color: dataset.buttonColor,
        style: options?.design?.buttonStyle
    });
    const renderContent = () => {
        if (dataset.layout === 'minimal') {
            return `
                <tr>
                    <td class="kg-cta-content">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="kg-cta-content-wrapper">
                            <tr>
                                ${dataset.imageUrl ? `
                                    <td class="kg-cta-image-container" width="64">
                                        ${wrapWithLink(dataset, `<img src="${dataset.imageUrl}" alt="CTA Image" class="kg-cta-image" width="64" height="64">`)}
                                    </td>
                                ` : ''}
                                <td class="kg-cta-content-inner">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        ${dataset.textValue ? `
                                            <tr>
                                                <td class="kg-cta-text">
                                                    ${dataset.textValue}
                                                </td>
                                            </tr>
                                        ` : ''}
                                        ${showButton(dataset) ? `
                                            <tr>
                                                <td class="kg-cta-button-container">
                                                    ${buttonHtml}
                                                </td>
                                            </tr>
                                        ` : ''}
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            `;
        }
        return `
            <tr>
                <td class="kg-cta-content">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="kg-cta-content-wrapper">
                        ${dataset.imageUrl ? `
                            <tr>
                                <td class="kg-cta-image-container">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td>
                                                ${wrapWithLink(dataset, `<img src="${dataset.imageUrl}" alt="CTA Image" class="kg-cta-image" ${imageDimensions ? `width="${imageDimensions.width}"` : ''} ${imageDimensions ? `height="${imageDimensions.height}"` : ''}>`)}
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        ` : ''}
                        <tr>
                            <td class="kg-cta-text">
                                ${dataset.textValue}
                            </td>
                        </tr>
                        ${showButton(dataset) ? `
                            <tr>
                                <td class="kg-cta-button-container" align="${dataset.alignment}">
                                    ${buttonHtml}
                                </td>
                            </tr>
                        ` : ''}
                    </table>
                </td>
            </tr>
        `;
    };
    return `
        <table class="kg-card kg-cta-card kg-cta-bg-${dataset.backgroundColor} ${dataset.showDividers ? '' : 'kg-cta-no-dividers'} kg-cta-${dataset.layout} ${dataset.hasSponsorLabel ? '' : 'kg-cta-no-label'} ${dataset.textValue ? '' : 'kg-cta-no-text'} ${dataset.imageUrl ? 'kg-cta-has-img' : ''} ${dataset.linkColor === 'accent' ? 'kg-cta-link-accent' : ''} ${dataset.alignment === 'center' ? 'kg-cta-centered' : ''}" border="0" cellpadding="0" cellspacing="0" width="100%">
            ${dataset.hasSponsorLabel ? `
                <tr>
                    <td>
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td class="kg-cta-sponsor-label">
                                    ${dataset.sponsorLabel}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            ` : ''}
            ${renderContent()}
        </table>
    `;
}
function renderCallToActionNode(node, options = {}) {
    (0, add_create_document_option_js_1.addCreateDocumentOption)(options);
    const document = options.createDocument();
    const dataset = {
        layout: node.layout,
        alignment: node.alignment,
        textValue: node.textValue,
        showButton: node.showButton,
        showDividers: node.showDividers,
        buttonText: node.buttonText,
        buttonUrl: node.buttonUrl,
        buttonColor: node.buttonColor,
        buttonTextColor: node.buttonTextColor,
        hasSponsorLabel: node.hasSponsorLabel,
        backgroundColor: node.backgroundColor,
        sponsorLabel: node.sponsorLabel,
        imageUrl: node.imageUrl,
        imageWidth: node.imageWidth,
        imageHeight: node.imageHeight,
        linkColor: node.linkColor
    };
    // Add validation for backgroundColor
    if (!dataset.backgroundColor || !dataset.backgroundColor.match(/^(?:[a-zA-Z\d-]+|#(?:[a-fA-F\d]{3}|[a-fA-F\d]{6}))$/)) {
        dataset.backgroundColor = 'white';
    }
    if (options.target === 'email') {
        const emailDoc = options.createDocument();
        const emailDiv = emailDoc.createElement('div');
        emailDiv.innerHTML = emailCTATemplate(dataset, options);
        return (0, visibility_js_1.renderWithVisibility)({ element: (0, get_first_html_element_js_1.getFirstHtmlElement)(emailDiv, 'renderCallToActionNode email'), type: 'outer' }, node.visibility, options);
    }
    const element = document.createElement('div');
    if (dataset.hasSponsorLabel) {
        const cleanBasicHtml = (0, build_clean_basic_html_for_element_js_1.buildCleanBasicHtmlForElement)(element);
        const cleanedHtml = cleanBasicHtml(dataset.sponsorLabel, { firstChildInnerContent: true });
        dataset.sponsorLabel = cleanedHtml || '';
    }
    const htmlString = ctaCardTemplate(dataset);
    element.innerHTML = htmlString?.trim();
    return (0, visibility_js_1.renderWithVisibility)({ element: (0, get_first_html_element_js_1.getFirstHtmlElement)(element, 'renderCallToActionNode'), type: 'outer' }, node.visibility, options);
}
