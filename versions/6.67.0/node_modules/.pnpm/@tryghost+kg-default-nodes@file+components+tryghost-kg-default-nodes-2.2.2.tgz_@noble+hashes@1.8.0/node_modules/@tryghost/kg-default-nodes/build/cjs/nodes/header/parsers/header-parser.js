"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHeaderNode = parseHeaderNode;
/**
 * Reverses the class names applied by the v2 renderer's `getCardClasses`.
 *
 * The layout is encoded in the card's classes, so inferring it from the presence of an image alone collapses
 * every regular/wide/full card into split when rendered HTML is imported again (e.g. via the Admin API with
 * `?source=html`).
 */
function getHeaderV2Layout(div) {
    // Split has to be checked first — split cards also carry `kg-width-full`.
    if (div.classList.contains('kg-layout-split')) {
        return 'split';
    }
    if (div.classList.contains('kg-width-full')) {
        return 'full';
    }
    if (div.classList.contains('kg-width-wide')) {
        return 'wide';
    }
    if (div.classList.contains('kg-width-regular')) {
        return 'regular';
    }
    // Hand-authored HTML may omit the width classes. The renderer only nests the image inside the content
    // wrapper for split layouts, so the structure is the next best signal.
    const image = div.querySelector('.kg-header-card-image');
    const content = div.querySelector('.kg-header-card-content');
    if (image && content?.contains(image)) {
        return 'split';
    }
    return 'full';
}
function parseHeaderNode(HeaderNode) {
    return {
        div: (nodeElem) => {
            const isHeaderCardv1 = nodeElem.classList?.contains('kg-header-card') && !nodeElem.classList?.contains('kg-v2');
            const isHeaderCardv2 = nodeElem.classList?.contains('kg-header-card') && nodeElem.classList?.contains('kg-v2');
            // v1 parser
            if (nodeElem.tagName === 'DIV' && isHeaderCardv1) {
                return {
                    conversion(domNode) {
                        const div = domNode;
                        const headerElement = domNode.querySelector('.kg-header-card-header');
                        const subheaderElement = domNode.querySelector('.kg-header-card-subheader');
                        const buttonElement = domNode.querySelector('.kg-header-card-button');
                        const size = div.classList.contains('kg-size-large') ? 'large' : 'small';
                        const style = div.classList.contains('kg-style-image') ? 'image' : 'text';
                        const backgroundImageSrc = div.getAttribute('data-kg-background-image');
                        const hasHeader = !!headerElement;
                        const header = hasHeader ? headerElement.textContent : '';
                        const hasSubheader = !!subheaderElement;
                        const subheader = hasSubheader ? subheaderElement.textContent : '';
                        const buttonEnabled = !!buttonElement;
                        const buttonUrl = buttonEnabled ? buttonElement.getAttribute('href') : '';
                        const buttonText = buttonEnabled ? buttonElement.textContent : '';
                        const payload = {
                            size,
                            style,
                            backgroundImageSrc,
                            header,
                            subheader,
                            buttonEnabled,
                            buttonUrl,
                            buttonText,
                            version: 1
                        };
                        const node = new HeaderNode(payload);
                        return { node };
                    },
                    priority: 1
                };
            }
            // V2 parser
            if (nodeElem.tagName === 'DIV' && isHeaderCardv2) {
                return {
                    conversion(domNode) {
                        const div = domNode;
                        const headerElement = div.querySelector('.kg-header-card-heading');
                        const subheaderElement = div.querySelector('.kg-header-card-subheading');
                        const buttonElement = div.querySelector('.kg-header-card-button');
                        const alignment = div.classList.contains('kg-align-center') ? 'center' : '';
                        const backgroundImageSrc = div.querySelector('.kg-header-card-image')?.getAttribute('src');
                        const layout = getHeaderV2Layout(div);
                        const backgroundColor = div.classList.contains('kg-style-accent') ? 'accent' : div.getAttribute('data-background-color');
                        const buttonColor = buttonElement?.getAttribute('data-button-color') || '';
                        const textColor = headerElement?.getAttribute('data-text-color') || '';
                        const buttonTextColor = buttonElement?.getAttribute('data-button-text-color') || '';
                        const header = headerElement?.textContent || '';
                        const subheader = subheaderElement?.textContent || '';
                        const buttonEnabled = !!buttonElement;
                        const buttonUrl = buttonEnabled ? buttonElement.getAttribute('href') : '';
                        const buttonText = buttonEnabled ? buttonElement.textContent : '';
                        const payload = {
                            backgroundColor,
                            buttonColor,
                            alignment,
                            backgroundImageSrc,
                            layout,
                            textColor,
                            header,
                            subheader,
                            buttonEnabled,
                            buttonUrl,
                            buttonText,
                            buttonTextColor,
                            version: 2
                        };
                        const node = new HeaderNode(payload);
                        return { node };
                    },
                    priority: 1
                };
            }
            return null;
        }
    };
}
