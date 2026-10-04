"use strict";
// utils/linker.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDomain = exports.isValid = void 0;
/**
 * Check if a string is a valid HTTP or HTTPS URL.
 *
 * @param url - URL to validate
 * @returns True if URL is valid and uses http/https protocol
 */
const isValid = (url = "") => {
    try {
        const ourl = new URL(url);
        return ourl !== null && ourl.protocol.startsWith("http");
    }
    catch {
        return false;
    }
};
exports.isValid = isValid;
/**
 * Extract the domain from a URL, stripping the www. prefix.
 *
 * @param url - Full URL
 * @returns Domain without www.
 */
const getDomain = (url) => {
    const host = (new URL(url)).host;
    return host.replace("www.", "");
};
exports.getDomain = getDomain;
