// main.ts
import { isValid as isValidURL } from "./utils/linker.js";
import extractWithDiscovery from "./utils/autoDiscovery.js";
import fetchEmbed from "./utils/fetchEmbed.js";
import { getEndpoint } from "./utils/provider.js";
import { find, has, set } from "./utils/provider.js";
/**
 * Extract oEmbed data from a given URL.
 *
 * @param url - URL of a valid oEmbed resource
 * @param params - Optional parameters (maxwidth, maxheight, theme, lang, etc.)
 * @param fetcher - Custom fetch function (url) => Promise<Response>. Defaults to globalThis.fetch.
 * @returns oEmbed data object
 * @throws If URL is invalid
 */
export const extract = async (url, params = {}, fetcher = globalThis.fetch) => {
    if (!isValidURL(url)) {
        throw new Error("Invalid input URL");
    }
    const endpoint = getEndpoint(url);
    const result = endpoint
        ? await fetchEmbed(url, params, endpoint, fetcher)
        : await extractWithDiscovery(url, params, fetcher);
    return result;
};
/**
 * Find the provider that matches a given URL.
 *
 * @param url - URL to look up
 * @returns Provider info or null if not found
 */
export const findProvider = find;
/**
 * Check if a URL is supported by any registered provider.
 *
 * @param url - URL to check
 * @returns True if a matching provider exists
 */
export const hasProvider = has;
/**
 * Replace the provider list with a custom set of providers.
 *
 * @param providers - List of providers in oEmbed registry format
 * @returns Number of providers in the new list
 */
export const setProviderList = set;
