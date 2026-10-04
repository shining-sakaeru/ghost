"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseVideoNode = parseVideoNode;
const read_caption_from_element_js_1 = require("../../utils/read-caption-from-element.js");
function parseVideoNode(VideoNode) {
    return {
        figure: (nodeElem) => {
            const isKgVideoCard = nodeElem.classList?.contains('kg-video-card');
            if (nodeElem.tagName === 'FIGURE' && isKgVideoCard) {
                return {
                    conversion(domNode) {
                        const videoNode = domNode.querySelector('.kg-video-container video');
                        const durationNode = domNode.querySelector('.kg-video-duration');
                        const videoSrc = videoNode && videoNode.src;
                        const videoWidth = videoNode && videoNode.width;
                        const videoHeight = videoNode && videoNode.height;
                        const durationText = durationNode && durationNode.innerHTML.trim();
                        const captionText = (0, read_caption_from_element_js_1.readCaptionFromElement)(domNode);
                        if (!videoSrc) {
                            return null;
                        }
                        const payload = {
                            src: videoSrc,
                            loop: !!videoNode.loop,
                            cardWidth: getCardWidth(domNode)
                        };
                        if (durationText) {
                            const [rawMinutes, rawSeconds = '0'] = durationText.split(':');
                            const minutes = Number.parseInt(rawMinutes.trim(), 10);
                            const seconds = Number.parseInt(rawSeconds.trim(), 10);
                            if (Number.isFinite(minutes) && Number.isFinite(seconds)) {
                                payload.duration = minutes * 60 + seconds;
                            }
                        }
                        if (domNode.dataset.kgThumbnail) {
                            payload.thumbnailSrc = domNode.dataset.kgThumbnail;
                        }
                        if (domNode.dataset.kgCustomThumbnail) {
                            payload.customThumbnailSrc = domNode.dataset.kgCustomThumbnail;
                        }
                        if (captionText) {
                            payload.caption = captionText;
                        }
                        if (videoWidth) {
                            payload.width = videoWidth;
                        }
                        if (videoHeight) {
                            payload.height = videoHeight;
                        }
                        const node = new VideoNode(payload);
                        return { node };
                    },
                    priority: 1
                };
            }
            return null;
        }
    };
}
function getCardWidth(domNode) {
    if (domNode.classList.contains('kg-width-full')) {
        return 'full';
    }
    else if (domNode.classList.contains('kg-width-wide')) {
        return 'wide';
    }
    else {
        return 'regular';
    }
}
