import utils from './utils';
import type { HtmlTransformOptionsInput, MarkdownTransformOptionsInput, MobiledocTransformOptionsInput, LexicalTransformOptionsInput, MobiledocCardTransformer } from './utils/types';
import type { AbsoluteToRelativeOptionsInput } from './utils/absolute-to-relative';
import type { RelativeToAbsoluteOptionsInput } from './utils/relative-to-absolute';
import type { AbsoluteToTransformReadyOptionsInput as AbsoluteToTransformReadyOptionsInputType } from './utils/absolute-to-transform-ready';
import type { RelativeToTransformReadyOptionsInput as RelativeToTransformReadyOptionsInputType } from './utils/relative-to-transform-ready';
import type { ToTransformReadyOptions } from './utils/to-transform-ready';
import type { TransformReadyToAbsoluteOptionsInput } from './utils/transform-ready-to-absolute';
import type { TransformReadyReplacementOptionsInput as TransformReadyToRelativeOptionsInput } from './utils/types';
interface ExpressResponse {
    set(headers: Record<string, string>): void;
    redirect(status: number, url: string): void;
    redirect(url: string): void;
}
interface UrlUtilsOptions {
    getSubdir?: () => string;
    getSiteUrl?: () => string;
    getAdminUrl?: () => string;
    baseApiPath?: string;
    defaultApiType?: 'content' | 'admin';
    slugs?: {
        reserved?: string[];
        protected?: string[];
    } | null;
    redirectCacheMaxAge?: number | null;
    staticImageUrlPrefix?: string;
    staticFilesUrlPrefix?: string;
    staticMediaUrlPrefix?: string;
    assetBaseUrls?: {
        image?: string | null;
        files?: string | null;
        media?: string | null;
    };
    cardTransformers?: MobiledocCardTransformer[];
}
export default class UrlUtils {
    private _config;
    private _assetBaseUrls;
    getSubdir: () => string;
    getSiteUrl: () => string;
    getAdminUrl: () => string;
    /**
     * Initialization method to pass in URL configurations
     * @param {Object} options
     * @param {Function} options.getSubdir
     * @param {Function} options.getSiteUrl
     * @param {Function} options.getAdminUrl Ghost instance admin URL
    * @param {String} [options.baseApiPath='/ghost/api'] static prefix for serving API. Should not te passed in, unless the API is being run under custom URL
    * @param {('content' | 'admin')} [options.defaultApiType='content'] default API type to be used
     * @param {Object} [options.slugs] object with 2 properties reserved and protected containing arrays of special case slugs
     * @param {Number} [options.redirectCacheMaxAge]
     * @param {String} [options.staticImageUrlPrefix='content/images'] static prefix for serving images. Should not be passed in, unless customizing ghost instance image storage
     * @param {String} [options.staticFilesUrlPrefix='content/files'] static prefix for serving files. Should not be passed in, unless customizing ghost instance file storage
     * @param {String} [options.staticMediaUrlPrefix='content/media'] static prefix for serving media. Should not be passed in, unless customizing ghost instance media storage
     * @param {object} [options.assetBaseUrls] asset CDN base URLs
     * @param {string} [options.assetBaseUrls.image] image asset CDN base URL
     * @param {string} [options.assetBaseUrls.files] files asset CDN base URL
     * @param {string} [options.assetBaseUrls.media] media asset CDN base URL
     */
    constructor(options?: UrlUtilsOptions);
    private _assetOptionDefaults;
    private _buildAssetOptions;
    getProtectedSlugs(): string[];
    /** urlJoin
     * Returns a URL/path for internal use in Ghost.
     * @param {string} arguments takes arguments and concats those to a valid path/URL.
     * @return {string} URL concatinated URL/path of arguments.
     */
    urlJoin(...parts: string[]): string;
    createUrl(urlPath?: string, absolute?: boolean, trailingSlash?: boolean): string;
    urlFor(context: string | {
        relativeUrl: string;
    } | {
        image?: string;
    } | {
        nav?: {
            url: string;
        };
    }, data?: Record<string, unknown> | boolean | {
        trailingSlash?: boolean;
        type?: 'admin' | 'content';
    } | null, absolute?: boolean): string;
    redirect301(res: ExpressResponse, redirectUrl: string): void;
    redirectToAdmin(status: number, res: ExpressResponse, adminPath: string): void;
    absoluteToRelative(url: string, options?: AbsoluteToRelativeOptionsInput): string;
    relativeToAbsolute(url: string, options?: RelativeToAbsoluteOptionsInput): string;
    toTransformReady(url: string, itemPath: string | null | ToTransformReadyOptions, options?: ToTransformReadyOptions): string;
    absoluteToTransformReady(url: string, options?: AbsoluteToTransformReadyOptionsInputType): string;
    relativeToTransformReady(url: string, options?: RelativeToTransformReadyOptionsInputType): string;
    transformReadyToAbsolute(url: string, options?: TransformReadyToAbsoluteOptionsInput): string;
    transformReadyToRelative(url: string, options?: TransformReadyToRelativeOptionsInput): string;
    htmlToTransformReady(html: string, itemPath: string | null | HtmlTransformOptionsInput, options?: HtmlTransformOptionsInput): string;
    /**
     * Convert relative URLs in html into absolute URLs
     * @param {string} html
     * @param {string} itemPath (path of current context)
     * @param {Object} options
     * @returns {object} htmlContent
     * @description Takes html, blog url and item path and converts relative url into
     * absolute urls. Returns an object. The html string can be accessed by calling `html()` on
     * the variable that takes the result of this function
     */
    htmlRelativeToAbsolute(html: string, itemPath: string | null | HtmlTransformOptionsInput, options?: HtmlTransformOptionsInput): string;
    htmlRelativeToTransformReady(html: string, itemPath: string | null | RelativeToTransformReadyOptionsInputType, options?: RelativeToTransformReadyOptionsInputType): string;
    htmlAbsoluteToRelative(html: string, options?: HtmlTransformOptionsInput): string;
    htmlAbsoluteToTransformReady(html: string, options?: AbsoluteToTransformReadyOptionsInputType): string;
    markdownToTransformReady(markdown: string, itemPath: string | null | MarkdownTransformOptionsInput, options?: MarkdownTransformOptionsInput): string;
    markdownRelativeToAbsolute(markdown: string, itemPath: string | null | MarkdownTransformOptionsInput, options?: MarkdownTransformOptionsInput): string;
    markdownRelativeToTransformReady(markdown: string, itemPath: string | null | MarkdownTransformOptionsInput, options?: MarkdownTransformOptionsInput): string;
    markdownAbsoluteToRelative(markdown: string, options?: MarkdownTransformOptionsInput): string;
    markdownAbsoluteToTransformReady(markdown: string, options?: AbsoluteToTransformReadyOptionsInputType): string;
    mobiledocToTransformReady(serializedMobiledoc: string, itemPath: string | null | MobiledocTransformOptionsInput, options?: MobiledocTransformOptionsInput): string;
    mobiledocRelativeToAbsolute(serializedMobiledoc: string, itemPath: string | null | MobiledocTransformOptionsInput, options?: MobiledocTransformOptionsInput): string;
    mobiledocRelativeToTransformReady(serializedMobiledoc: string, itemPath: string | null | MobiledocTransformOptionsInput, options?: MobiledocTransformOptionsInput): string;
    mobiledocAbsoluteToRelative(serializedMobiledoc: string, options?: MobiledocTransformOptionsInput): string;
    mobiledocAbsoluteToTransformReady(serializedMobiledoc: string, options?: MobiledocTransformOptionsInput): string;
    lexicalToTransformReady(serializedLexical: string, itemPath: string | null | LexicalTransformOptionsInput, options?: LexicalTransformOptionsInput): string;
    lexicalRelativeToAbsolute(serializedLexical: string, itemPath: string | null | LexicalTransformOptionsInput, options?: LexicalTransformOptionsInput): string;
    lexicalRelativeToTransformReady(serializedLexical: string, itemPath: string | null | LexicalTransformOptionsInput, options?: LexicalTransformOptionsInput): string;
    lexicalAbsoluteToRelative(serializedLexical: string, options?: LexicalTransformOptionsInput): string;
    lexicalAbsoluteToTransformReady(serializedLexical: string, options?: LexicalTransformOptionsInput): string;
    plaintextToTransformReady(plaintext: string, options?: Record<string, unknown>): string;
    /**
     * Return whether the provided URL is part of the site (checks if same domain and within subdirectory)
     * @param {URL} url
     * @param {string} [context] describing the context for which you need to check a url
     * @returns {boolean}
     */
    isSiteUrl(url: URL, context?: string): boolean;
    get isSSL(): typeof utils.isSSL;
    get replacePermalink(): typeof utils.replacePermalink;
    get deduplicateDoubleSlashes(): typeof utils.deduplicateDoubleSlashes;
    /**
     * If you request **any** image in Ghost, it get's served via
     * http://your-blog.com/content/images/2017/01/02/author.png
     *
     * /content/images/ is a static prefix for serving images!
     *
     * But internally the image is located for example in your custom content path:
     * my-content/another-dir/images/2017/01/02/author.png
     */
    get STATIC_IMAGE_URL_PREFIX(): string;
    get STATIC_FILES_URL_PREFIX(): string;
    get STATIC_MEDIA_URL_PREFIX(): string;
    get _utils(): typeof utils;
}
export {};
