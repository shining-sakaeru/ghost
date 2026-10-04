import type { Fetcher } from "./retrieve.js";
/**
 * Extract oEmbed data via auto-discovery by parsing the HTML page for a
 * oEmbed link tag.
 *
 * @param url - Resource URL to discover oEmbed for
 * @param params - Additional oEmbed query parameters
 * @param fetcher - Custom fetch function (url) => Promise<Response>
 * @returns oEmbed response data
 * @throws If no oEmbed link tag is found in the HTML
 */
declare const _default: (url: string, params: Record<string, string> | undefined, fetcher: Fetcher) => Promise<Record<string, unknown>>;
export default _default;
