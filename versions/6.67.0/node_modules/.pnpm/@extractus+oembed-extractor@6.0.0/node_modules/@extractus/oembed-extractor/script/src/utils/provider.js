"use strict";
// utils/provider.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndpoint = exports.has = exports.find = exports.set = exports.get = exports.simplify = void 0;
const linker_js_1 = require("./linker.js");
const providers_latest_js_1 = require("./providers.latest.js");
/**
 * Convert a scheme string into a RegExp for URL matching.
 *
 * @param scheme - Scheme pattern with wildcards
 * @returns Compiled regular expression
 */
const toRegExp = (scheme = "") => {
    return new RegExp(scheme
        .replace(/\\./g, ".")
        .replace(/\*/g, "(.*)")
        .replace(/\?/g, "\\?")
        .replace(/,$/g, ""), "i");
};
/**
 * Remove duplicate entries from an array.
 *
 * @param arr - Input array
 * @returns Array with unique values
 */
const uniquify = (arr) => {
    return [...new Set(arr)];
};
/**
 * Escape dots in a scheme string for regex use.
 *
 * @param scheme - Scheme string
 * @returns Scheme with escaped dots
 */
const undotted = (scheme = "") => {
    return scheme.replace(/\./g, "\\.");
};
/**
 * Strip protocol prefix (https:// or http://) from a URL.
 *
 * @param url - URL with protocol
 * @returns URL without protocol (protocol-relative)
 */
const removeProtocol = (url) => {
    return url.replace("https://", "//").replace("http://", "//");
};
/**
 * Simplify raw provider data into a compact format for internal use.
 *
 * @param providers - Raw provider list from oEmbed registry
 * @returns Simplified provider entries with { s: patterns, e: endpoint }
 */
const simplify = (providers) => {
    return providers
        .map((item) => {
        const endpoints = item.endpoints;
        return endpoints.map((endpoint) => {
            const schemes = endpoint.schemes || [];
            const url = endpoint.url;
            const patterns = schemes.length > 0
                ? uniquify(schemes.map(removeProtocol).map(undotted))
                : [];
            return {
                s: patterns,
                e: removeProtocol(url).replace(/\{format\}/g, "json"),
            };
        });
    })
        .reduce((prev, curr) => {
        return prev.concat(curr);
    }, []);
};
exports.simplify = simplify;
/**
 * Build internal provider entries from simplified format with compiled regex patterns.
 *
 * @param providers - Simplified provider entries
 * @returns Provider entries with endpoint URL and RegExp schemes
 */
const providersFromList = (providers) => {
    return providers.map((provider) => {
        const { e: endpoint, s: schemes } = provider;
        return {
            endpoint: `https:${endpoint}`,
            schemes: schemes.map(toRegExp),
        };
    });
};
/** Internal mutable store holding the current provider list. */
const store = {
    providers: providersFromList(providers_latest_js_1.providers),
};
/**
 * Get a copy of the current provider list.
 *
 * @returns List of provider entries with endpoint and schemes
 */
const get = () => {
    return [...store.providers];
};
exports.get = get;
/**
 * Replace the provider list with a custom set of providers.
 *
 * @param providers - Raw provider list in oEmbed registry format
 * @returns Length of the new provider list
 */
const set = (providers) => {
    store.providers = providersFromList((0, exports.simplify)(providers));
    return store.providers.length;
};
exports.set = set;
/**
 * Match a URL against a provider's schemes; fall back to domain comparison when no schemes exist.
 *
 * @param url - URL to match
 * @param endpoint - Provider endpoint URL
 * @param schemes - RegExp schemes to test against
 * @returns True if URL matches the provider
 */
const compare = (url = "", endpoint = "", schemes = []) => {
    if (!schemes.length) {
        const domain = (0, linker_js_1.getDomain)(url);
        const endpointDomain = (0, linker_js_1.getDomain)(endpoint);
        return domain === endpointDomain;
    }
    return schemes.some((scheme) => {
        return url.match(scheme);
    });
};
/**
 * Find a provider that matches the given URL.
 *
 * @param url - URL to look up
 * @returns Provider info with schemes, endpoint, and url, or null if not found
 */
const find = (url = "") => {
    if (!(0, linker_js_1.isValid)(url)) {
        return null;
    }
    const providers = (0, exports.get)();
    for (let i = 0; i < providers.length; i++) {
        const { endpoint, schemes } = providers[i];
        const isMatched = compare(url, endpoint, schemes);
        if (isMatched) {
            return {
                schemes,
                endpoint,
                url,
            };
        }
    }
    return null;
};
exports.find = find;
/**
 * Check if any registered provider supports the given URL.
 *
 * @param url - URL to check
 * @returns True if a matching provider exists
 */
const has = (url = "") => {
    return (0, exports.find)(url) !== null;
};
exports.has = has;
/**
 * Get the oEmbed API endpoint for a given URL.
 *
 * @param url - URL to resolve
 * @returns Endpoint URL or null if no provider matches
 */
const getEndpoint = (url) => {
    const p = (0, exports.find)(url);
    return p ? p.endpoint : null;
};
exports.getEndpoint = getEndpoint;
