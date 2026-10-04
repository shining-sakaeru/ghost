"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncateText = truncateText;
exports.truncateHtml = truncateHtml;
const escape_html_js_1 = require("./escape-html.js");
function truncateText(text, maxLength) {
    if (text && text.length > maxLength) {
        return text.substring(0, maxLength - 1).trim() + '\u2026';
    }
    else {
        return text ?? '';
    }
}
function truncateHtml(text, maxLength, maxLengthMobile) {
    // If no mobile length specified or mobile length is larger than desktop,
    // just do a simple truncate
    if (!maxLengthMobile || maxLength <= maxLengthMobile) {
        return (0, escape_html_js_1.escapeHtml)(truncateText(text, maxLength));
    }
    // Handle text shorter than mobile length
    if (text.length <= maxLengthMobile) {
        return (0, escape_html_js_1.escapeHtml)(text);
    }
    if (text && text.length > maxLengthMobile) {
        let ellipsis = '';
        if (text.length > maxLengthMobile && text.length <= maxLength) {
            ellipsis = '<span class="hide-desktop">\u2026</span>';
        }
        else if (text.length > maxLength) {
            ellipsis = '\u2026';
        }
        return (0, escape_html_js_1.escapeHtml)(text.substring(0, maxLengthMobile - 1)) + '<span class="desktop-only">' + (0, escape_html_js_1.escapeHtml)(text.substring(maxLengthMobile - 1, maxLength - 1)) + '</span>' + ellipsis;
    }
    else {
        return (0, escape_html_js_1.escapeHtml)(text ?? '');
    }
}
