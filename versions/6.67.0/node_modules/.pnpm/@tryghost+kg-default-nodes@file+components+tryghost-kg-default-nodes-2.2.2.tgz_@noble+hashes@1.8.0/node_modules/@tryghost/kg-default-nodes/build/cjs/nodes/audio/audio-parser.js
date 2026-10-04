"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAudioNode = parseAudioNode;
function parseAudioNode(AudioNode) {
    return {
        div: (nodeElem) => {
            const isKgAudioCard = nodeElem.classList?.contains('kg-audio-card');
            if (nodeElem.tagName === 'DIV' && isKgAudioCard) {
                return {
                    conversion(domNode) {
                        const titleNode = domNode?.querySelector('.kg-audio-title');
                        const audioNode = domNode?.querySelector('.kg-audio-player-container audio');
                        const durationNode = domNode?.querySelector('.kg-audio-duration');
                        const thumbnailNode = domNode?.querySelector('.kg-audio-thumbnail');
                        const title = titleNode && titleNode.innerHTML.trim();
                        const audioSrc = audioNode && audioNode.src;
                        const thumbnailSrc = thumbnailNode && thumbnailNode.src;
                        const durationText = durationNode && durationNode.innerHTML.trim();
                        const payload = {
                            src: audioSrc,
                            title: title
                        };
                        if (thumbnailSrc) {
                            payload.thumbnailSrc = thumbnailSrc;
                        }
                        if (durationText) {
                            if (durationText.includes(':')) {
                                const [rawMinutes, rawSeconds = '0'] = durationText.split(':');
                                const minutes = Number(rawMinutes.trim());
                                const seconds = Number(rawSeconds.trim());
                                if (Number.isInteger(minutes) && Number.isInteger(seconds)) {
                                    payload.duration = minutes * 60 + seconds;
                                }
                            }
                            else {
                                const duration = Number(durationText);
                                if (Number.isFinite(duration)) {
                                    payload.duration = duration;
                                }
                            }
                        }
                        const node = new AudioNode(payload);
                        return { node };
                    },
                    priority: 1
                };
            }
            return null;
        }
    };
}
