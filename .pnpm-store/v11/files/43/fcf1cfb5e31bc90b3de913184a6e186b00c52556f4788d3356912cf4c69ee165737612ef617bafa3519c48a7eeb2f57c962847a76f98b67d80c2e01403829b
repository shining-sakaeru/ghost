"use strict";
// main.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProviderList = exports.hasProvider = exports.findProvider = exports.extract = void 0;
const linker_js_1 = require("./utils/linker.js");
const autoDiscovery_js_1 = __importDefault(require("./utils/autoDiscovery.js"));
const fetchEmbed_js_1 = __importDefault(require("./utils/fetchEmbed.js"));
const provider_js_1 = require("./utils/provider.js");
const provider_js_2 = require("./utils/provider.js");
/**
 * Extract oEmbed data from a given URL.
 *
 * @param url - URL of a valid oEmbed resource
 * @param params - Optional parameters (maxwidth, maxheight, theme, lang, etc.)
 * @param fetcher - Custom fetch function (url) => Promise<Response>. Defaults to globalThis.fetch.
 * @returns oEmbed data object
 * @throws If URL is invalid
 */
const extract = async (url, params = {}, fetcher = globalThis.fetch) => {
    if (!(0, linker_js_1.isValid)(url)) {
        throw new Error("Invalid input URL");
    }
    const endpoint = (0, provider_js_1.getEndpoint)(url);
    const result = endpoint
        ? await (0, fetchEmbed_js_1.default)(url, params, endpoint, fetcher)
        : await (0, autoDiscovery_js_1.default)(url, params, fetcher);
    return result;
};
exports.extract = extract;
/**
 * Find the provider that matches a given URL.
 *
 * @param url - URL to look up
 * @returns Provider info or null if not found
 */
exports.findProvider = provider_js_2.find;
/**
 * Check if a URL is supported by any registered provider.
 *
 * @param url - URL to check
 * @returns True if a matching provider exists
 */
exports.hasProvider = provider_js_2.has;
/**
 * Replace the provider list with a custom set of providers.
 *
 * @param providers - List of providers in oEmbed registry format
 * @returns Number of providers in the new list
 */
exports.setProviderList = provider_js_2.set;
