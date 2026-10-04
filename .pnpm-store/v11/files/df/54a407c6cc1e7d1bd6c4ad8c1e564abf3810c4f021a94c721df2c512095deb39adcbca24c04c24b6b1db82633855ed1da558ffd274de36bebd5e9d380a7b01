// utils/fetchEmbed.ts
import { getJson } from "./retrieve.js";
/**
 * Fetch oEmbed data from a known provider endpoint.
 *
 * @param url - Original resource URL
 * @param params - oEmbed parameters (maxwidth, maxheight, etc.)
 * @param endpoint - Provider oEmbed API endpoint
 * @param fetcher - Custom fetch function (url) => Promise<Response>
 * @returns oEmbed response data
 */
export default async (url, params = {}, endpoint = "", fetcher) => {
    const query = {
        url,
        format: "json",
        ...params,
    };
    if (query.maxwidth <= 0) {
        delete query.maxwidth;
    }
    if (query.maxheight <= 0) {
        delete query.maxheight;
    }
    const queryParams = new URLSearchParams(query).toString();
    const link = endpoint + "?" + queryParams;
    const body = await getJson(link, fetcher);
    body.method = "provider-api";
    return body;
};
