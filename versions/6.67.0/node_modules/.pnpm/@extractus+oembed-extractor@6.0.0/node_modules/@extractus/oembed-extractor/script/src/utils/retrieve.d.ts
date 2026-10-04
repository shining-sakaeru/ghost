/** Custom fetch function type. */
export type Fetcher = (url: string) => Promise<Response>;
/**
 * Fetch a URL and return the response body as text.
 *
 * @param url - URL to fetch
 * @param fetcher - Custom fetch function (url) => Promise<Response>
 * @returns Response body as text
 * @throws If HTTP status is 400 or higher
 */
export declare const getHtml: (url: string, fetcher: Fetcher) => Promise<string>;
/**
 * Fetch a URL and parse the response body as JSON.
 *
 * @param url - URL to fetch
 * @param fetcher - Custom fetch function (url) => Promise<Response>
 * @returns Parsed JSON response
 * @throws If HTTP status is 400+ or response is not valid JSON
 */
export declare const getJson: (url: string, fetcher: Fetcher) => Promise<Record<string, unknown>>;
