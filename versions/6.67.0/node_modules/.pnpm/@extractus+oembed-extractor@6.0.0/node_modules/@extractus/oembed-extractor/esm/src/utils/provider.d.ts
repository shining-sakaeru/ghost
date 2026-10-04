import type { SimplifiedProvider } from "./providers.latest.js";
/** Provider entry with endpoint URL and compiled regex schemes. */
export interface ProviderEntry {
    endpoint: string;
    schemes: RegExp[];
}
/** Result returned by find(). */
export interface FindResult {
    schemes: RegExp[];
    endpoint: string;
    url: string;
}
/**
 * Simplify raw provider data into a compact format for internal use.
 *
 * @param providers - Raw provider list from oEmbed registry
 * @returns Simplified provider entries with { s: patterns, e: endpoint }
 */
export declare const simplify: (providers: Record<string, unknown>[]) => SimplifiedProvider[];
/**
 * Get a copy of the current provider list.
 *
 * @returns List of provider entries with endpoint and schemes
 */
export declare const get: () => ProviderEntry[];
/**
 * Replace the provider list with a custom set of providers.
 *
 * @param providers - Raw provider list in oEmbed registry format
 * @returns Length of the new provider list
 */
export declare const set: (providers: Record<string, unknown>[]) => number;
/**
 * Find a provider that matches the given URL.
 *
 * @param url - URL to look up
 * @returns Provider info with schemes, endpoint, and url, or null if not found
 */
export declare const find: (url?: string) => FindResult | null;
/**
 * Check if any registered provider supports the given URL.
 *
 * @param url - URL to check
 * @returns True if a matching provider exists
 */
export declare const has: (url?: string) => boolean;
/**
 * Get the oEmbed API endpoint for a given URL.
 *
 * @param url - URL to resolve
 * @returns Endpoint URL or null if no provider matches
 */
export declare const getEndpoint: (url: string) => string | null;
