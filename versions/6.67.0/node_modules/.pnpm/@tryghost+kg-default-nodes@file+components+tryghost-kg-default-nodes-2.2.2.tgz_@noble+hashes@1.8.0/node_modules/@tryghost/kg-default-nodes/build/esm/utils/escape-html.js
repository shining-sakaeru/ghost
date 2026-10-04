import { decodeHTML } from 'entities';
/**
 * Escape HTML special characters
 */
export function escapeHtml(unsafe) {
    return decodeHTML(unsafe ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
//# sourceMappingURL=escape-html.js.map