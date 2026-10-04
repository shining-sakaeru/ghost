"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupParser = signupParser;
const rgb_to_hex_js_1 = require("../../utils/rgb-to-hex.js");
function getLayout(domNode) {
    if (domNode.classList.contains('kg-layout-split')) {
        return 'split';
    }
    else if (domNode.classList.contains('kg-layout-full')) {
        return 'full';
    }
    else if (domNode.classList.contains('kg-layout-wide')) {
        return 'wide';
    }
    else {
        return 'regular';
    }
}
function signupParser(SignupNode) {
    return {
        div: (nodeElem) => {
            const isSignupNode = nodeElem.hasAttribute('data-lexical-signup-form');
            if (nodeElem.tagName === 'DIV' && isSignupNode) {
                return {
                    conversion(domNode) {
                        const layout = getLayout(domNode);
                        const header = domNode.querySelector('h2')?.textContent || '';
                        const subheader = domNode.querySelector('h3')?.textContent || '';
                        const disclaimer = domNode.querySelector('p')?.textContent || '';
                        const backgroundImageSrc = domNode.querySelector('.kg-signup-card-image')?.getAttribute('src');
                        const backgroundColor = domNode.style.backgroundColor || '';
                        const buttonColor = domNode.querySelector('.kg-signup-card-button')?.style.backgroundColor || '';
                        const buttonText = domNode.querySelector('.kg-signup-card-button-default')?.textContent?.trim() || 'Subscribe';
                        const buttonTextColor = domNode.querySelector('.kg-signup-card-button')?.style.color || '';
                        const textColor = domNode.querySelector('.kg-signup-card-success')?.style.color || '';
                        const alignment = domNode.querySelector('.kg-signup-card-text')?.classList.contains('kg-align-center') ? 'center' : 'left';
                        const successMessage = domNode.querySelector('.kg-signup-card-success')?.textContent?.trim() || '';
                        const labels = [...domNode.querySelectorAll('input[data-members-label]')].map(input => input.value);
                        const isAccentBackground = domNode.classList?.contains('kg-style-accent') ?? false;
                        const isAccentButton = domNode.querySelector('.kg-signup-card-button')?.classList?.contains('kg-style-accent') ?? false;
                        const isSwapped = domNode.classList.contains('kg-swapped');
                        const backgroundSize = domNode.classList.contains('kg-content-wide') ? 'contain' : 'cover';
                        const payload = {
                            layout,
                            buttonText,
                            header,
                            subheader,
                            disclaimer,
                            backgroundImageSrc,
                            backgroundSize,
                            backgroundColor: isAccentBackground ? 'accent' : ((0, rgb_to_hex_js_1.rgbToHex)(backgroundColor) || '#ffffff'),
                            buttonColor: isAccentButton ? 'accent' : ((0, rgb_to_hex_js_1.rgbToHex)(buttonColor) || '#ffffff'),
                            textColor: (0, rgb_to_hex_js_1.rgbToHex)(textColor) || '#ffffff',
                            buttonTextColor: (0, rgb_to_hex_js_1.rgbToHex)(buttonTextColor) || '#000000',
                            alignment,
                            successMessage,
                            labels,
                            swapped: isSwapped
                        };
                        const node = new SignupNode(payload);
                        return { node };
                    },
                    priority: 1
                };
            }
            return null;
        }
    };
}
