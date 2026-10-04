export interface AbsoluteToRelativeOptions {
    ignoreProtocol: boolean;
    withoutSubdirectory: boolean;
    assetsOnly: boolean;
    staticImageUrlPrefix: string;
}
export type AbsoluteToRelativeOptionsInput = Partial<AbsoluteToRelativeOptions>;
/**
 * Convert an absolute URL to a root-relative path if it matches the supplied root domain.
 *
 * @param {string} url Absolute URL to convert to relative if possible
 * @param {string} rootUrl Absolute URL to which the returned relative URL will match the domain root
 * @param {Object} [options] Options that affect the conversion
 * @param {boolean} [options.ignoreProtocol=true] Ignore protocol when matching url to root
 * @param {boolean} [options.withoutSubdirectory=false] Strip the root subdirectory from the returned path
 * @returns {string} The passed-in url or a relative path
 */
declare const absoluteToRelative: (url: string, rootUrl?: string, _options?: AbsoluteToRelativeOptionsInput) => string;
export default absoluteToRelative;
