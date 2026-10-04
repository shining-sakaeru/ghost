"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeHtml = escapeHtml;
const entities_1 = require("entities");
/**
 * Escape HTML special characters
 */
function escapeHtml(unsafe) {
    return (0, entities_1.decodeHTML)(unsafe ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
