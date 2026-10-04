"use strict";
// utils/retrieve.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJson = exports.getHtml = void 0;
/**
 * Fetch a URL and return the response body as text.
 *
 * @param url - URL to fetch
 * @param fetcher - Custom fetch function (url) => Promise<Response>
 * @returns Response body as text
 * @throws If HTTP status is 400 or higher
 */
const getHtml = async (url, fetcher) => {
    const res = await fetcher(url);
    const status = res.status;
    if (status >= 400) {
        throw new Error(`Request failed with error code ${status}`);
    }
    const text = await res.text();
    return text;
};
exports.getHtml = getHtml;
/**
 * Fetch a URL and parse the response body as JSON.
 *
 * @param url - URL to fetch
 * @param fetcher - Custom fetch function (url) => Promise<Response>
 * @returns Parsed JSON response
 * @throws If HTTP status is 400+ or response is not valid JSON
 */
const getJson = async (url, fetcher) => {
    const res = await fetcher(url);
    const status = res.status;
    if (status >= 400) {
        throw new Error(`Request failed with error code ${status}`);
    }
    try {
        const text = await res.text();
        return JSON.parse(text.trim());
    }
    catch {
        throw new Error("Failed to convert data to JSON object");
    }
};
exports.getJson = getJson;
