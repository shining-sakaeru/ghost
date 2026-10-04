interface UrlJoinOptions {
    rootUrl: string;
}
/** urlJoin
* Returns a URL/path for internal use in Ghost.
* @param {string[]} parts takes parts and concats those to a valid path/URL.
* @param {Object} options
* @param {string} options.rootUrl used for deduplicating any subdirectories
* @return {string} URL concatinated URL/path of arguments.
*/
declare function urlJoin(parts: string[], options?: UrlJoinOptions): string;
export default urlJoin;
