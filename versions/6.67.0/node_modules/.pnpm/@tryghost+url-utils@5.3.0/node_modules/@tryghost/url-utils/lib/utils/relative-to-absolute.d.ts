import type { SecureOptions, SecureOptionsInput } from './types';
export type RelativeToAbsoluteOptions = SecureOptions;
export type RelativeToAbsoluteOptionsInput = SecureOptionsInput;
/**
 * Convert a root-relative path to an absolute URL based on the supplied root.
 * Will _only_ convert root-relative urls (/some/path not some/path)
 *
 * @param {string} path
 * @param {string} rootUrl
 * @param {string} itemPath
 * @param {object} options
 * @returns {string} The passed in url or an absolute URL using
 */
declare const relativeToAbsolute: (path: string, rootUrl: string, itemPath: string | null | RelativeToAbsoluteOptionsInput, _options?: RelativeToAbsoluteOptionsInput) => string;
export default relativeToAbsolute;
