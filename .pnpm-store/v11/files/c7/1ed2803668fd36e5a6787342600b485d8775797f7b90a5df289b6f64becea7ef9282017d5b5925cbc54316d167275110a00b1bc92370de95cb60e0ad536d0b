"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseImageNode = parseImageNode;
const read_caption_from_element_js_1 = require("../../utils/read-caption-from-element.js");
const read_image_attributes_from_element_js_1 = require("../../utils/read-image-attributes-from-element.js");
function parseImageNode(ImageNode) {
    return {
        img: () => ({
            conversion(domNode) {
                if (domNode.tagName === 'IMG') {
                    const { src, width, height, alt, title, href } = (0, read_image_attributes_from_element_js_1.readImageAttributesFromElement)(domNode);
                    const node = new ImageNode({ alt, src, title, width, height, href });
                    return { node };
                }
                return null;
            },
            priority: 1
        }),
        figure: (nodeElem) => {
            const img = nodeElem.querySelector('img');
            if (img) {
                return {
                    conversion(domNode) {
                        const kgClass = domNode.className.match(/kg-width-(wide|full)/);
                        const grafClass = domNode.className.match(/graf--layout(FillWidth|OutsetCenter)/);
                        if (!img) {
                            return null;
                        }
                        const payload = (0, read_image_attributes_from_element_js_1.readImageAttributesFromElement)(img);
                        if (kgClass) {
                            payload.cardWidth = kgClass[1];
                        }
                        else if (grafClass) {
                            payload.cardWidth = grafClass[1] === 'FillWidth' ? 'full' : 'wide';
                        }
                        payload.caption = (0, read_caption_from_element_js_1.readCaptionFromElement)(domNode) ?? '';
                        const { src, width, height, alt, title, caption, cardWidth, href } = payload;
                        const node = new ImageNode({ alt, src, title, width, height, caption, cardWidth, href });
                        return { node };
                    },
                    priority: 0 // since we are generically parsing figure elements, we want this to run after others (like the gallery)
                };
            }
            return null;
        }
    };
}
