import type Frame from './frame.ts';
interface HeaderOptions {
    value?: string | (() => string);
}
interface HeadersConfiguration {
    cacheInvalidate?: HeaderOptions | boolean;
    disposition?: HeaderOptions & {
        type: keyof typeof disposition;
    };
    location?: false | {
        resolve?: (location: string) => string;
    };
}
declare const disposition: {
    /**
     * @description Generate CSV header.
     *
     * @param {Object} result - API response
     * @param {Object} options
     * @return {Object}
     */
    csv(_result: unknown, options?: HeaderOptions): {
        'Content-Disposition': string;
        'Content-Type': string;
    };
    /**
     * @description Generate JSON header.
     *
     * @param {Object} result - API response
     * @param {Object} options
     * @return {Object}
     */
    json(result: unknown, options?: HeaderOptions): {
        'Content-Disposition': string;
        'Content-Type': string;
        'Content-Length': number;
    };
    /**
     * @description Generate YAML header.
     *
     * @param {Object} result - API response
     * @param {Object} options
     * @return {Object}
     */
    yaml(result: unknown, options?: HeaderOptions): {
        'Content-Disposition': string;
        'Content-Type': string;
        'Content-Length': number;
    };
    /**
     * @description Content Disposition Header
     *
     * Create a header that invokes the 'Save As' dialog in the browser when exporting the database to file. The 'filename'
     * parameter is governed by [RFC6266](http://tools.ietf.org/html/rfc6266#section-4.3).
     *
     * For encoding whitespace and non-ISO-8859-1 characters, you MUST use the "filename*=" attribute, NOT "filename=".
     * Ideally, both. Examples: http://tools.ietf.org/html/rfc6266#section-5
     *
     * We'll use ISO-8859-1 characters here to keep it simple.
     *
     * @see http://tools.ietf.org/html/rfc598
     */
    file(_result: unknown, options?: HeaderOptions): Promise<{
        'Content-Disposition': string;
    }>;
};
declare const headers: {
    /**
     * @description Get header based on ctrl configuration.
     *
     * @param {Object} result - API response
     * @param {Object} apiConfigHeaders
     * @param {import('@tryghost/api-framework').Frame} frame
     * @return {Promise<object>}
     */
    get(result: unknown, apiConfigHeaders: HeadersConfiguration | undefined, frame: Frame): Promise<Record<string, string | number>>;
};
export default headers;
//# sourceMappingURL=headers.d.ts.map