"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("@tryghost/url-utils/lib/utils/index.js");
const string_1 = require("@tryghost/string");
function bytesToSize(bytes) {
    if (!bytes) {
        return '0 Byte';
    }
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) {
        return '0 Byte';
    }
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
}
const fileCard = {
    name: 'file',
    type: 'dom',
    render({ payload: _payload, env: { dom }, options = {} }) {
        const payload = _payload;
        if (!payload.src) {
            return dom.createTextNode('');
        }
        let classNames = '';
        const emailStyles = {
            icon: 'height: 24px; width: 24px; max-width: 24px; margin-top: 8px;',
        };
        if (!payload.fileTitle && !payload.fileCaption) {
            classNames = 'kg-file-card-small';
            emailStyles.icon =
                'margin-top: 6px; height: 20px; width: 20px; max-width: 20px; padding-top: 4px; padding-bottom: 4px;';
        }
        else if (!payload.fileTitle || !payload.fileCaption) {
            classNames = 'kg-file-card-medium';
            emailStyles.icon = 'margin-top: 6px; height: 24px; width: 24px; max-width: 24px;';
        }
        let html = `
        <div class="kg-card kg-file-card ${classNames}">
            <a class="kg-file-card-container" href="${(0, string_1.escapeHtml)(payload.src)}" title="Download" download>
                <div class="kg-file-card-contents">
                    ${payload.fileTitle ? `<div class="kg-file-card-title">${(0, string_1.escapeHtml)(payload.fileTitle)}</div>` : ``}
                    ${payload.fileCaption ? `<div class="kg-file-card-caption">${(0, string_1.escapeHtml)(payload.fileCaption)}</div>` : ``}
                    <div class="kg-file-card-metadata">
                        <div class="kg-file-card-filename">${(0, string_1.escapeHtml)(payload.fileName || '')}</div>
                        <div class="kg-file-card-filesize">${bytesToSize(payload.fileSize || 0)}</div>
                    </div>
                </div>
                <div class="kg-file-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><style>.a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}</style></defs><title>download-circle</title><polyline class="a" points="8.25 14.25 12 18 15.75 14.25"/><line class="a" x1="12" y1="6.75" x2="12" y2="18"/><circle class="a" cx="12" cy="12" r="11.25"/></svg>
                </div>
            </a>
        </div>
        `;
        const postUrl = options.postUrl || 'https://ghost.org';
        if (options.target === 'email') {
            html = `
            <table cellspacing="0" cellpadding="4" border="0" class="kg-file-card" width="100%">
                <tr>
                    <td>
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td valign="middle" style="vertical-align: middle;">
                                    ${payload.fileTitle
                ? `
                                    <table cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td>
                                        <a href="${(0, string_1.escapeHtml)(postUrl)}" class="kg-file-title">${(0, string_1.escapeHtml)(payload.fileTitle)}</a>
                                    </td></tr></table>
                                    `
                : ``}
                                    ${payload.fileCaption
                ? `
                                    <table cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td>
                                        <a href="${(0, string_1.escapeHtml)(postUrl)}" class="kg-file-description">${(0, string_1.escapeHtml)(payload.fileCaption)}</a>
                                    </td></tr></table>
                                    `
                : ``}
                                    <table cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td>
                                        <a href="${(0, string_1.escapeHtml)(postUrl)}" class="kg-file-meta"><span class="kg-file-name">${(0, string_1.escapeHtml)(payload.fileName || '')}</span> &bull; ${bytesToSize(payload.fileSize || 0)}</a>
                                    </td></tr></table>
                                </td>
                                <td width="80" valign="middle" class="kg-file-thumbnail">
                                    <a href="${(0, string_1.escapeHtml)(postUrl)}" style="position: absolute; display: block; top: 0; right: 0; bottom: 0; left: 0;"></a>
                                    <img src="https://static.ghost.org/v4.0.0/images/download-icon-darkmode.png" style="${(0, string_1.escapeHtml)(emailStyles.icon)}">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            `;
        }
        return dom.createRawHTMLSection(html);
    },
    absoluteToRelative(payload, options) {
        const p = payload;
        p.src = p.src && (0, index_js_1.absoluteToRelative)(p.src, options.siteUrl, options);
        return payload;
    },
    relativeToAbsolute(payload, options) {
        const p = payload;
        p.src = p.src && (0, index_js_1.relativeToAbsolute)(p.src, options.siteUrl, options.itemUrl ?? '', options);
        return payload;
    },
    toTransformReady(payload, options) {
        const p = payload;
        p.src = p.src && (0, index_js_1.toTransformReady)(p.src, options.siteUrl, options);
        return payload;
    },
};
exports.default = fileCard;
