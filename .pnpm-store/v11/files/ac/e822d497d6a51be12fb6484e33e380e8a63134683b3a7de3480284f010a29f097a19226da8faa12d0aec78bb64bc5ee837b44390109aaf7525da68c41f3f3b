"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Contains all path information to be used throughout the codebase.
const _ = __importStar(require("lodash"));
const utils_1 = __importDefault(require("./utils"));
// similar to Object.assign but will not override defaults if a source value is undefined
function assignOptions(target, ...sources) {
    const options = sources.map((x) => {
        return Object.entries(x)
            .filter(([, value]) => value !== undefined)
            .reduce((obj, [key, value]) => (obj[key] = value, obj), {});
    });
    return Object.assign(target, ...options);
}
class UrlUtils {
    _config;
    _assetBaseUrls;
    getSubdir;
    getSiteUrl;
    getAdminUrl;
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
    constructor(options = {}) {
        const defaultOptions = {
            slugs: null,
            redirectCacheMaxAge: null,
            baseApiPath: '/ghost/api',
            defaultApiType: 'content',
            staticImageUrlPrefix: 'content/images',
            staticFilesUrlPrefix: 'content/files',
            staticMediaUrlPrefix: 'content/media'
        };
        this._config = assignOptions({}, defaultOptions, options);
        const assetBaseUrls = options.assetBaseUrls || {};
        this._assetBaseUrls = {
            image: assetBaseUrls.image || null,
            files: assetBaseUrls.files || null,
            media: assetBaseUrls.media || null
        };
        this.getSubdir = options.getSubdir || (() => '');
        this.getSiteUrl = options.getSiteUrl || (() => '');
        this.getAdminUrl = options.getAdminUrl || (() => '');
    }
    _assetOptionDefaults() {
        return {
            staticImageUrlPrefix: this._config.staticImageUrlPrefix,
            staticFilesUrlPrefix: this._config.staticFilesUrlPrefix,
            staticMediaUrlPrefix: this._config.staticMediaUrlPrefix,
            imageBaseUrl: this._assetBaseUrls.image || null,
            filesBaseUrl: this._assetBaseUrls.files || null,
            mediaBaseUrl: this._assetBaseUrls.media || null
        };
    }
    _buildAssetOptions(additionalDefaults = {}, options) {
        return assignOptions({}, this._assetOptionDefaults(), additionalDefaults, options || {});
    }
    getProtectedSlugs() {
        const subDir = this.getSubdir();
        if (!_.isEmpty(subDir)) {
            const lastSegment = subDir.split('/').pop();
            if (this._config.slugs && lastSegment) {
                return this._config.slugs.concat([lastSegment]);
            }
            return lastSegment ? [lastSegment] : [];
        }
        else {
            return this._config.slugs || [];
        }
    }
    /** urlJoin
     * Returns a URL/path for internal use in Ghost.
     * @param {string} arguments takes arguments and concats those to a valid path/URL.
     * @return {string} URL concatinated URL/path of arguments.
     */
    urlJoin(...parts) {
        return utils_1.default.urlJoin(parts, { rootUrl: this.getSiteUrl() });
    }
    // ## createUrl
    // Simple url creation from a given path
    // Ensures that our urls contain the subdirectory if there is one
    // And are correctly formatted as either relative or absolute
    // Usage:
    // createUrl('/', true) -> http://my-ghost-blog.com/
    // E.g. /blog/ subdir
    // createUrl('/welcome-to-ghost/') -> /blog/welcome-to-ghost/
    // Parameters:
    // - urlPath - string which must start and end with a slash
    // - absolute (optional, default:false) - boolean whether or not the url should be absolute
    // Returns:
    //  - a URL which always ends with a slash
    createUrl(urlPath = '/', absolute = false, trailingSlash) {
        let base;
        // create base of url, always ends without a slash
        if (absolute) {
            base = this.getSiteUrl();
        }
        else {
            base = this.getSubdir();
        }
        if (trailingSlash) {
            if (!urlPath.match(/\/$/)) {
                urlPath += '/';
            }
        }
        return this.urlJoin(base, urlPath);
    }
    // ## urlFor
    // Synchronous url creation for a given context
    // Can generate a url for a named path and given path.
    // Determines what sort of context it has been given, and delegates to the correct generation method,
    // Finally passing to createUrl, to ensure any subdirectory is honoured, and the url is absolute if needed
    // Usage:
    // urlFor('home', true) -> http://my-ghost-blog.com/
    // E.g. /blog/ subdir
    // urlFor({relativeUrl: '/my-static-page/'}) -> /blog/my-static-page/
    // Parameters:
    // - context - a string, or json object describing the context for which you need a url
    // - data (optional) - a json object containing data needed to generate a url
    // - absolute (optional, default:false) - boolean whether or not the url should be absolute
    // This is probably not the right place for this, but it's the best place for now
    // @TODO: rewrite, very hard to read, create private functions!
    urlFor(context, data, absolute) {
        let urlPath = '/';
        let imagePathRe;
        const knownObjects = ['image', 'nav'];
        let baseUrl;
        let hostname;
        // this will become really big
        const knownPaths = {
            home: '/',
            sitemap_xsl: '/sitemap.xsl'
        };
        // Make data properly optional
        if (_.isBoolean(data)) {
            absolute = data;
            data = null;
        }
        if (_.isObject(context) && !_.isArray(context) && 'relativeUrl' in context && typeof context.relativeUrl === 'string') {
            const relativeUrl = context.relativeUrl;
            urlPath = relativeUrl || '/';
        }
        else if (_.isString(context) && _.indexOf(knownObjects, context) !== -1) {
            if (context === 'image' && data && typeof data === 'object' && !_.isArray(data) && 'image' in data && typeof data.image === 'string') {
                urlPath = data.image;
                imagePathRe = new RegExp('^' + this.getSubdir() + '/' + this._config.staticImageUrlPrefix);
                absolute = imagePathRe.test(urlPath) ? (absolute || false) : false;
                if (absolute) {
                    // Remove the sub-directory from the URL because ghostConfig will add it back.
                    urlPath = urlPath.replace(new RegExp('^' + this.getSubdir()), '');
                    baseUrl = this.getSiteUrl().replace(/\/$/, '');
                    urlPath = baseUrl + urlPath;
                }
                return urlPath;
            }
            else if (context === 'nav' && data && typeof data === 'object' && !_.isArray(data) && 'nav' in data && data.nav && typeof data.nav === 'object' && !_.isArray(data.nav) && 'url' in data.nav && typeof data.nav.url === 'string') {
                urlPath = data.nav.url;
                baseUrl = this.getSiteUrl();
                hostname = baseUrl.split('//')[1];
                // If the hostname is present in the url
                if (urlPath.indexOf(hostname) > -1
                    // do no not apply, if there is a subdomain, or a mailto link
                    && !urlPath.split(hostname)[0].match(/\.|mailto:/)
                    // do not apply, if there is a port after the hostname
                    && urlPath.split(hostname)[1].substring(0, 1) !== ':') {
                    // make link relative to account for possible mismatch in http/https etc, force absolute
                    urlPath = urlPath.split(hostname)[1];
                    urlPath = this.urlJoin('/', urlPath);
                    absolute = true;
                }
            }
        }
        else if (context === 'home' && absolute) {
            urlPath = this.getSiteUrl();
            // CASE: there are cases where urlFor('home') needs to be returned without trailing
            // slash e. g. the `{{@site.url}}` helper. See https://github.com/TryGhost/Ghost/issues/8569
            if (data && typeof data === 'object' && !_.isArray(data) && 'trailingSlash' in data && data.trailingSlash === false) {
                urlPath = urlPath.replace(/\/$/, '');
            }
        }
        else if (context === 'admin') {
            const adminUrl = this.getAdminUrl() || this.getSiteUrl();
            let adminPath = '/ghost/';
            if (absolute) {
                urlPath = this.urlJoin(adminUrl, adminPath);
            }
            else {
                urlPath = adminPath;
            }
        }
        else if (context === 'api') {
            const adminUrl = this.getAdminUrl() || this.getSiteUrl();
            let apiPath = this._config.baseApiPath + '/';
            if (data && typeof data === 'object' && !_.isArray(data) && 'type' in data && typeof data.type === 'string' && ['admin', 'content'].includes(data.type)) {
                apiPath += data.type;
            }
            else {
                apiPath += this._config.defaultApiType;
            }
            // Ensure we end with a trailing slash
            apiPath += '/';
            if (absolute) {
                urlPath = this.urlJoin(adminUrl, apiPath);
            }
            else {
                urlPath = apiPath;
            }
        }
        else if (_.isString(context) && _.indexOf(_.keys(knownPaths), context) !== -1) {
            // trying to create a url for a named path
            urlPath = knownPaths[context];
        }
        // This url already has a protocol so is likely an external url to be returned
        // or it is an alternative scheme, protocol-less, or an anchor-only path
        if (urlPath && (urlPath.indexOf('://') !== -1 || urlPath.match(/^(\/\/|#|[a-zA-Z0-9-]+:)/))) {
            return urlPath;
        }
        return this.createUrl(urlPath, absolute);
    }
    redirect301(res, redirectUrl) {
        res.set({ 'Cache-Control': 'public, max-age=' + this._config.redirectCacheMaxAge });
        res.redirect(301, redirectUrl);
    }
    redirectToAdmin(status, res, adminPath) {
        const redirectUrl = this.urlJoin(this.urlFor('admin', true), adminPath, '/');
        if (status === 301) {
            this.redirect301(res, redirectUrl);
        }
        else {
            res.redirect(redirectUrl);
        }
    }
    absoluteToRelative(url, options) {
        return utils_1.default.absoluteToRelative(url, this.getSiteUrl(), options);
    }
    relativeToAbsolute(url, options) {
        // Original code passes options as third parameter (itemPath), preserving that behavior
        return utils_1.default.relativeToAbsolute(url, this.getSiteUrl(), options || null, undefined);
    }
    toTransformReady(url, itemPath, options) {
        let finalItemPath = null;
        let finalOptions = options;
        if (typeof itemPath === 'object' && itemPath !== null && !options) {
            finalOptions = itemPath;
            finalItemPath = null;
        }
        else if (typeof itemPath === 'string') {
            finalItemPath = itemPath;
        }
        const _options = this._buildAssetOptions({}, finalOptions);
        return utils_1.default.toTransformReady(url, this.getSiteUrl(), finalItemPath, _options);
    }
    absoluteToTransformReady(url, options) {
        const _options = this._buildAssetOptions({}, options);
        return utils_1.default.absoluteToTransformReady(url, this.getSiteUrl(), _options);
    }
    relativeToTransformReady(url, options) {
        const _options = this._buildAssetOptions({}, options);
        return utils_1.default.relativeToTransformReady(url, this.getSiteUrl(), _options);
    }
    transformReadyToAbsolute(url, options) {
        const _options = this._buildAssetOptions({}, options);
        return utils_1.default.transformReadyToAbsolute(url, this.getSiteUrl(), _options);
    }
    transformReadyToRelative(url, options) {
        const _options = this._buildAssetOptions({}, options);
        return utils_1.default.transformReadyToRelative(url, this.getSiteUrl(), _options);
    }
    htmlToTransformReady(html, itemPath, options) {
        let finalItemPath = null;
        let finalOptions = options;
        if (typeof itemPath === 'object' && itemPath !== null && !options) {
            finalOptions = itemPath;
            finalItemPath = null;
        }
        else if (typeof itemPath === 'string') {
            finalItemPath = itemPath;
        }
        const _options = this._buildAssetOptions({}, finalOptions);
        return utils_1.default.htmlToTransformReady(html, this.getSiteUrl(), finalItemPath, _options);
    }
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
    htmlRelativeToAbsolute(html, itemPath, options) {
        let finalItemPath = null;
        let finalOptions = options;
        if (typeof itemPath === 'object' && itemPath !== null && !options) {
            finalOptions = itemPath;
            finalItemPath = null;
        }
        else if (typeof itemPath === 'string') {
            finalItemPath = itemPath;
        }
        const _options = this._buildAssetOptions({
            assetsOnly: false
        }, finalOptions);
        return utils_1.default.htmlRelativeToAbsolute(html, this.getSiteUrl(), finalItemPath, _options);
    }
    htmlRelativeToTransformReady(html, itemPath, options) {
        let finalItemPath = null;
        let finalOptions = options;
        if (typeof itemPath === 'object' && itemPath !== null && !options) {
            finalOptions = itemPath;
            finalItemPath = null;
        }
        else if (typeof itemPath === 'string') {
            finalItemPath = itemPath;
        }
        const _options = this._buildAssetOptions({
            assetsOnly: false
        }, finalOptions);
        return utils_1.default.htmlRelativeToTransformReady(html, this.getSiteUrl(), finalItemPath, _options);
    }
    htmlAbsoluteToRelative(html, options = {}) {
        const _options = this._buildAssetOptions({
            assetsOnly: false
        }, options);
        return utils_1.default.htmlAbsoluteToRelative(html, this.getSiteUrl(), _options);
    }
    htmlAbsoluteToTransformReady(html, options = {}) {
        const _options = this._buildAssetOptions({
            assetsOnly: false
        }, options);
        return utils_1.default.htmlAbsoluteToTransformReady(html, this.getSiteUrl(), _options);
    }
    markdownToTransformReady(markdown, itemPath, options) {
        let finalItemPath = null;
        let finalOptions = options;
        if (typeof itemPath === 'object' && itemPath !== null && !options) {
            finalOptions = itemPath;
            finalItemPath = null;
        }
        else if (typeof itemPath === 'string') {
            finalItemPath = itemPath;
        }
        const _options = this._buildAssetOptions({}, finalOptions);
        return utils_1.default.markdownToTransformReady(markdown, this.getSiteUrl(), finalItemPath, _options);
    }
    markdownRelativeToAbsolute(markdown, itemPath, options) {
        let finalItemPath = null;
        let finalOptions = options;
        if (typeof itemPath === 'object' && itemPath !== null && !options) {
            finalOptions = itemPath;
            finalItemPath = null;
        }
        else if (typeof itemPath === 'string') {
            finalItemPath = itemPath;
        }
        const _options = this._buildAssetOptions({
            assetsOnly: false
        }, finalOptions);
        return utils_1.default.markdownRelativeToAbsolute(markdown, this.getSiteUrl(), finalItemPath, _options);
    }
    markdownRelativeToTransformReady(markdown, itemPath, options) {
        let finalItemPath = null;
        let finalOptions = options;
        if (typeof itemPath === 'object' && itemPath !== null && !options) {
            finalOptions = itemPath;
            finalItemPath = null;
        }
        else if (typeof itemPath === 'string') {
            finalItemPath = itemPath;
        }
        const _options = this._buildAssetOptions({
            assetsOnly: false
        }, finalOptions);
        return utils_1.default.markdownRelativeToTransformReady(markdown, this.getSiteUrl(), finalItemPath, _options);
    }
    markdownAbsoluteToRelative(markdown, options = {}) {
        const _options = this._buildAssetOptions({
            assetsOnly: false
        }, options);
        return utils_1.default.markdownAbsoluteToRelative(markdown, this.getSiteUrl(), _options);
    }
    markdownAbsoluteToTransformReady(markdown, options = {}) {
        const _options = this._buildAssetOptions({
            assetsOnly: false
        }, options);
        return utils_1.default.markdownAbsoluteToTransformReady(markdown, this.getSiteUrl(), _options);
    }
    mobiledocToTransformReady(serializedMobiledoc, itemPath, options) {
        let finalItemPath = null;
        let finalOptions = options;
        if (typeof itemPath === 'object' && itemPath !== null && !options) {
            finalOptions = itemPath;
            finalItemPath = null;
        }
        else if (typeof itemPath === 'string') {
            finalItemPath = itemPath;
        }
        const _options = this._buildAssetOptions({
            cardTransformers: this._config.cardTransformers
        }, finalOptions);
        return utils_1.default.mobiledocToTransformReady(serializedMobiledoc, this.getSiteUrl(), finalItemPath, _options);
    }
    mobiledocRelativeToAbsolute(serializedMobiledoc, itemPath, options) {
        let finalItemPath = null;
        let finalOptions = options;
        if (typeof itemPath === 'object' && itemPath !== null && !options) {
            finalOptions = itemPath;
            finalItemPath = null;
        }
        else if (typeof itemPath === 'string') {
            finalItemPath = itemPath;
        }
        const _options = this._buildAssetOptions({
            assetsOnly: false,
            cardTransformers: this._config.cardTransformers
        }, finalOptions);
        return utils_1.default.mobiledocRelativeToAbsolute(serializedMobiledoc, this.getSiteUrl(), finalItemPath, _options);
    }
    mobiledocRelativeToTransformReady(serializedMobiledoc, itemPath, options) {
        let finalItemPath = null;
        let finalOptions = options;
        if (typeof itemPath === 'object' && itemPath !== null && !options) {
            finalOptions = itemPath;
            finalItemPath = null;
        }
        else if (typeof itemPath === 'string') {
            finalItemPath = itemPath;
        }
        const _options = this._buildAssetOptions({
            assetsOnly: false,
            cardTransformers: this._config.cardTransformers
        }, finalOptions);
        return utils_1.default.mobiledocRelativeToTransformReady(serializedMobiledoc, this.getSiteUrl(), finalItemPath, _options);
    }
    mobiledocAbsoluteToRelative(serializedMobiledoc, options = {}) {
        const _options = this._buildAssetOptions({
            assetsOnly: false,
            cardTransformers: this._config.cardTransformers
        }, options);
        return utils_1.default.mobiledocAbsoluteToRelative(serializedMobiledoc, this.getSiteUrl(), _options);
    }
    mobiledocAbsoluteToTransformReady(serializedMobiledoc, options = {}) {
        const _options = this._buildAssetOptions({
            assetsOnly: false,
            cardTransformers: this._config.cardTransformers
        }, options);
        return utils_1.default.mobiledocAbsoluteToTransformReady(serializedMobiledoc, this.getSiteUrl(), _options);
    }
    lexicalToTransformReady(serializedLexical, itemPath, options) {
        let finalItemPath = null;
        let finalOptions = options;
        if (typeof itemPath === 'object' && itemPath !== null && !options) {
            finalOptions = itemPath;
            finalItemPath = null;
        }
        else if (typeof itemPath === 'string') {
            finalItemPath = itemPath;
        }
        const _options = this._buildAssetOptions({
            cardTransformers: this._config.cardTransformers
        }, finalOptions);
        return utils_1.default.lexicalToTransformReady(serializedLexical, this.getSiteUrl(), finalItemPath, _options);
    }
    lexicalRelativeToAbsolute(serializedLexical, itemPath, options) {
        let finalItemPath = null;
        let finalOptions = options;
        if (typeof itemPath === 'object' && itemPath !== null && !options) {
            finalOptions = itemPath;
            finalItemPath = null;
        }
        else if (typeof itemPath === 'string') {
            finalItemPath = itemPath;
        }
        const _options = this._buildAssetOptions({
            assetsOnly: false,
            cardTransformers: this._config.cardTransformers
        }, finalOptions);
        return utils_1.default.lexicalRelativeToAbsolute(serializedLexical, this.getSiteUrl(), finalItemPath, _options);
    }
    lexicalRelativeToTransformReady(serializedLexical, itemPath, options) {
        let finalItemPath = null;
        let finalOptions = options;
        if (typeof itemPath === 'object' && itemPath !== null && !options) {
            finalOptions = itemPath;
            finalItemPath = null;
        }
        else if (typeof itemPath === 'string') {
            finalItemPath = itemPath;
        }
        const _options = this._buildAssetOptions({
            assetsOnly: false,
            cardTransformers: this._config.cardTransformers
        }, finalOptions);
        return utils_1.default.lexicalRelativeToTransformReady(serializedLexical, this.getSiteUrl(), finalItemPath, _options);
    }
    lexicalAbsoluteToRelative(serializedLexical, options = {}) {
        const _options = this._buildAssetOptions({
            assetsOnly: false,
            cardTransformers: this._config.cardTransformers
        }, options);
        return utils_1.default.lexicalAbsoluteToRelative(serializedLexical, this.getSiteUrl(), _options);
    }
    lexicalAbsoluteToTransformReady(serializedLexical, options = {}) {
        const _options = this._buildAssetOptions({
            assetsOnly: false,
            cardTransformers: this._config.cardTransformers
        }, options);
        return utils_1.default.lexicalAbsoluteToTransformReady(serializedLexical, this.getSiteUrl(), _options);
    }
    plaintextToTransformReady(plaintext, options = {}) {
        const _options = this._buildAssetOptions({}, options);
        return utils_1.default.plaintextToTransformReady(plaintext, this.getSiteUrl(), null, _options);
    }
    /**
     * Return whether the provided URL is part of the site (checks if same domain and within subdirectory)
     * @param {URL} url
     * @param {string} [context] describing the context for which you need to check a url
     * @returns {boolean}
     */
    isSiteUrl(url, context = 'home') {
        const siteUrl = new URL(this.urlFor(context, true));
        if (siteUrl.host === url.host) {
            if (url.pathname.startsWith(siteUrl.pathname)) {
                return true;
            }
            return false;
        }
        return false;
    }
    get isSSL() {
        return utils_1.default.isSSL;
    }
    get replacePermalink() {
        return utils_1.default.replacePermalink;
    }
    get deduplicateDoubleSlashes() {
        return utils_1.default.deduplicateDoubleSlashes;
    }
    /**
     * If you request **any** image in Ghost, it get's served via
     * http://your-blog.com/content/images/2017/01/02/author.png
     *
     * /content/images/ is a static prefix for serving images!
     *
     * But internally the image is located for example in your custom content path:
     * my-content/another-dir/images/2017/01/02/author.png
     */
    get STATIC_IMAGE_URL_PREFIX() {
        return this._config.staticImageUrlPrefix;
    }
    get STATIC_FILES_URL_PREFIX() {
        return this._config.staticFilesUrlPrefix;
    }
    get STATIC_MEDIA_URL_PREFIX() {
        return this._config.staticMediaUrlPrefix;
    }
    // expose underlying functions to ease testing
    get _utils() {
        return utils_1.default;
    }
}
exports.default = UrlUtils;
;
