import type { BaseUrlOptionsInput } from './types';
declare function escapeRegExp(string: string): string;
type BuildEarlyExitMatchOptions = BaseUrlOptionsInput & {
    ignoreProtocol?: boolean;
};
/**
 * Build a regex pattern that matches any of the configured base URLs (site URL + CDN URLs).
 * This is used for early exit optimizations - if content doesn't contain any of these URLs,
 * we can skip expensive parsing.
 *
 * @param {string} siteUrl - The site's base URL
 * @param {Object} options - Options containing CDN base URLs
 * @param {string} [options.imageBaseUrl] - CDN base URL for images
 * @param {string} [options.filesBaseUrl] - CDN base URL for files
 * @param {string} [options.mediaBaseUrl] - CDN base URL for media
 * @param {boolean} [options.ignoreProtocol=true] - Whether to strip protocol from URLs
 * @returns {string|null} Regex pattern matching any configured base URL, or null if none configured
 */
declare function buildEarlyExitMatch(siteUrl: string, options?: BuildEarlyExitMatchOptions): string | null;
declare const _default: {
    buildEarlyExitMatch: typeof buildEarlyExitMatch;
    escapeRegExp: typeof escapeRegExp;
};
export default _default;
