"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCallToActionNode = parseCallToActionNode;
const rgb_to_hex_js_1 = require("../../utils/rgb-to-hex.js");
const read_image_attributes_from_element_js_1 = require("../../utils/read-image-attributes-from-element.js");
function parseCallToActionNode(CallToActionNode) {
    return {
        div: (nodeElem) => {
            const isCallToActionElement = nodeElem.classList?.contains('kg-cta-card');
            if (isCallToActionElement) {
                return {
                    conversion(domNode) {
                        const div = domNode;
                        const layout = div.getAttribute('data-layout') || 'minimal';
                        const alignment = div.getAttribute('data-alignment') || 'left';
                        const textValueElement = domNode.querySelector('.kg-cta-text');
                        const buttonElement = domNode.querySelector('.kg-cta-button');
                        const buttonStyles = buttonElement?.style || {};
                        const buttonColor = buttonStyles.backgroundColor || '#000000';
                        const buttonTextColor = buttonStyles.color || '#ffffff';
                        const sponsorLabelElement = domNode.querySelector('.kg-cta-sponsor-label');
                        const bgMatch = div.className.match(/kg-cta-bg-(\w+)/);
                        const backgroundColor = bgMatch ? bgMatch[1] : 'grey';
                        const showDividers = div.classList.contains('kg-cta-has-dividers');
                        const imageContainer = domNode.querySelector('.kg-cta-image-container');
                        const imageElement = imageContainer?.querySelector('img');
                        const imageData = {
                            imageUrl: '',
                            imageWidth: null,
                            imageHeight: null
                        };
                        if (imageElement) {
                            const { src, width, height } = (0, read_image_attributes_from_element_js_1.readImageAttributesFromElement)(imageElement);
                            imageData.imageUrl = src;
                            imageData.imageWidth = width || null;
                            imageData.imageHeight = height || null;
                        }
                        // sponsorLabel gets rendered without <p> in the web rendered version.
                        // however we need to keep the <p> tag in the lexical stored version to ensure
                        // consistency in the editor when a CTA card is copied and pasted into the editor.
                        if (sponsorLabelElement) {
                            sponsorLabelElement.innerHTML = `<p>${sponsorLabelElement.innerHTML.trim()}</p>`;
                        }
                        const payload = {
                            layout: layout,
                            alignment: alignment,
                            textValue: textValueElement?.textContent?.trim() || '',
                            showButton: buttonElement ? true : false,
                            showDividers: showDividers,
                            buttonText: buttonElement?.textContent?.trim() || '',
                            buttonUrl: buttonElement?.getAttribute('href'),
                            buttonColor: (0, rgb_to_hex_js_1.rgbToHex)(buttonColor),
                            buttonTextColor: (0, rgb_to_hex_js_1.rgbToHex)(buttonTextColor),
                            hasSponsorLabel: sponsorLabelElement ? true : false,
                            sponsorLabel: sponsorLabelElement?.innerHTML || '',
                            backgroundColor: backgroundColor,
                            imageUrl: imageData.imageUrl,
                            imageWidth: imageData.imageWidth,
                            imageHeight: imageData.imageHeight
                        };
                        const node = new CallToActionNode(payload);
                        return { node };
                    },
                    priority: 1
                };
            }
            return null;
        }
    };
}
