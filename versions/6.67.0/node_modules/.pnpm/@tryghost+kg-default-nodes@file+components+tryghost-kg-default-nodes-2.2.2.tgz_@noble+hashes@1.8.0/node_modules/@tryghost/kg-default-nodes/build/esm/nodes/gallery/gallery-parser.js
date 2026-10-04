import { readCaptionFromElement } from '../../utils/read-caption-from-element.js';
import { readImageAttributesFromElement } from '../../utils/read-image-attributes-from-element.js';
function readGalleryImageAttributesFromElement(element, imgNum) {
    const image = readImageAttributesFromElement(element);
    image.fileName = element.src.match(/[^/]*$/)[0];
    image.row = Math.floor(imgNum / 3);
    return image;
}
export function parseGalleryNode(GalleryNode) {
    return {
        figure: (nodeElem) => {
            // Koenig gallery card
            if (nodeElem.classList?.contains('kg-gallery-card')) {
                return {
                    conversion(domNode) {
                        const payload = {};
                        const imgs = Array.from(domNode.querySelectorAll('img'));
                        payload.images = imgs.map(readGalleryImageAttributesFromElement);
                        payload.caption = readCaptionFromElement(domNode);
                        const node = new GalleryNode(payload);
                        return { node };
                    },
                    priority: 1
                };
            }
            return null;
        },
        div: (nodeElem) => {
            // Medium "graf" galleries
            function isGrafGallery(node) {
                return node.tagName === 'DIV'
                    && node.dataset?.paragraphCount
                    && node.querySelectorAll('img').length > 0;
            }
            if (isGrafGallery(nodeElem)) {
                return {
                    conversion(domNode) {
                        const payload = {};
                        const captions = [readCaptionFromElement(domNode)].filter((caption) => Boolean(caption));
                        // These galleries exist as a series of divs containing multiple figure+img.
                        // Grab the first set of imgs...
                        let imgs = Array.from(domNode.querySelectorAll('img'));
                        // ...and then iterate over any remaining divs until we run out of matches
                        let nextNode = domNode.nextElementSibling;
                        while (nextNode && isGrafGallery(nextNode)) {
                            const currentNode = nextNode;
                            imgs = imgs.concat(Array.from(currentNode.querySelectorAll('img')));
                            const currentNodeCaption = readCaptionFromElement(currentNode);
                            if (currentNodeCaption) {
                                captions.push(currentNodeCaption);
                            }
                            nextNode = currentNode.nextElementSibling;
                            // remove nodes as we go so that they don't go through the parser
                            currentNode.remove();
                        }
                        if (captions.length > 0) {
                            payload.caption = captions.join(' / ');
                        }
                        payload.images = imgs.map(readGalleryImageAttributesFromElement);
                        const node = new GalleryNode(payload);
                        return { node };
                    },
                    priority: 1
                };
            }
            // Squarespace SQS galleries
            function isSqsGallery(node) {
                return node.tagName === 'DIV'
                    && node.className.match(/sqs-gallery-container/)
                    && !node.className.match(/summary-/);
            }
            if (isSqsGallery(nodeElem)) {
                return {
                    conversion(domNode) {
                        const payload = {};
                        // Each image exists twice...
                        // The first image is wrapped in `<noscript>`
                        // The second image contains image dimensions but the src property needs to be taken from `data-src`.
                        let imgs = Array.from(domNode.querySelectorAll('img.thumb-image'));
                        imgs = imgs.map((img) => {
                            if (!img.getAttribute('src')) {
                                if (img.previousElementSibling?.tagName === 'NOSCRIPT' && img.previousElementSibling.getElementsByTagName('img').length) {
                                    const prevNode = img.previousElementSibling;
                                    img.setAttribute('src', img.getAttribute('data-src') ?? '');
                                    prevNode.remove();
                                }
                                else {
                                    return undefined;
                                }
                            }
                            return img;
                        }).filter(img => img !== undefined);
                        // Process nodes into the payload
                        payload.images = imgs.map(readGalleryImageAttributesFromElement);
                        payload.caption = readCaptionFromElement(domNode, { selector: '.meta-title' });
                        const node = new GalleryNode(payload);
                        return { node };
                    },
                    priority: 1
                };
            }
            return null;
        }
    };
}
//# sourceMappingURL=gallery-parser.js.map