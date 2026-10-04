"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.earlyExitMatchStr = exports.transformAttributes = void 0;
// Loaded lazily on first transform. The `slim` export drops cheerio's
// `fromURL()` deps (undici, parse5) and parses with htmlparser2, which is what
// makes `decodeEntities: false` below take effect. Untyped because cheerio's
// types don't resolve subpath exports under `moduleResolution: node`.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cheerio;
exports.transformAttributes = [
    'href',
    'src',
    'srcset',
    'style',
    'data-kg-background-image',
    'data-kg-custom-thumbnail',
    'data-kg-thumbnail'
];
exports.earlyExitMatchStr = exports.transformAttributes
    .map(attr => `${attr}=`)
    .join('|');
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function extractSrcsetUrls(srcset = '') {
    return srcset.split(',').map((part) => {
        return part.trim().split(/\s+/)[0];
    });
}
function extractStyleUrls(style = '') {
    const urls = [];
    const regex = /url\(['|"]([^)]+)['|"]\)/g;
    let match;
    while ((match = regex.exec(style)) !== null) {
        urls.push(match[1]);
    }
    return urls;
}
function htmlTransform(html = '', siteUrl, transformFunction, itemPath, _options = {}) {
    const defaultOptions = {
        assetsOnly: false,
        secure: false
    };
    const options = Object.assign({}, defaultOptions, _options || {});
    if (!html || (options.earlyExitMatchStr && !html.match(new RegExp(options.earlyExitMatchStr)))) {
        return html;
    }
    if (!cheerio) {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        cheerio = require('cheerio/slim');
    }
    // `decodeEntities: false` keeps attribute values matching the source html,
    // which the regex replacements below rely on
    const htmlContent = cheerio.load(html, { decodeEntities: false });
    const replacements = {};
    function addReplacement(replacement) {
        const key = `${replacement.name}="${replacement.originalValue}"`;
        if (!replacements[key]) {
            replacements[key] = [];
        }
        replacements[key].push(replacement);
    }
    exports.transformAttributes.forEach((attributeName) => {
        htmlContent('[' + attributeName + ']').each((ix, el) => {
            // ignore <stream> elems and html inside of <code> elements
            const elementName = 'name' in el ? el.name : null;
            if (elementName === 'stream' || htmlContent(el).closest('code').length) {
                addReplacement({
                    name: attributeName,
                    originalValue: htmlContent(el).attr(attributeName),
                    skip: true
                });
                return;
            }
            const elWrapper = htmlContent(el);
            const originalValue = elWrapper.attr(attributeName);
            if (attributeName === 'srcset' || attributeName === 'style') {
                let urls;
                if (attributeName === 'srcset') {
                    urls = extractSrcsetUrls(originalValue);
                }
                else {
                    urls = extractStyleUrls(originalValue);
                }
                const absoluteUrls = urls.map((url) => transformFunction(url, siteUrl, itemPath, options));
                let transformedValue = originalValue;
                urls.forEach((url, i) => {
                    if (absoluteUrls[i]) {
                        const regex = new RegExp(escapeRegExp(url), 'g');
                        transformedValue = transformedValue.replace(regex, absoluteUrls[i]);
                    }
                });
                if (transformedValue !== originalValue) {
                    addReplacement({
                        name: attributeName,
                        originalValue,
                        transformedValue
                    });
                }
            }
            else {
                const transformedValue = transformFunction(originalValue, siteUrl, itemPath, options);
                if (transformedValue !== originalValue) {
                    addReplacement({
                        name: attributeName,
                        originalValue,
                        transformedValue
                    });
                }
            }
        });
    });
    // Loop over all replacements and use a regex to replace urls in the original html string.
    // Allows indentation and formatting to be kept compared to using DOM manipulation and render
    for (const [, attrs] of Object.entries(replacements)) {
        let skipCount = 0;
        attrs.forEach(({ skip, name, originalValue, transformedValue }) => {
            if (skip) {
                skipCount += 1;
                return;
            }
            // transformedValue is guaranteed to exist here because we only add replacements
            // when transformedValue !== originalValue, and we've already skipped entries with skip: true
            if (!transformedValue) {
                return;
            }
            // this regex avoids matching unrelated plain text by checking that the attribute/value pair
            // is surrounded by <> - that should be sufficient because if the plain text had that wrapper
            // it would be parsed as a tag
            // eslint-disable-next-line no-useless-escape
            const regex = new RegExp(`<[a-zA-Z][^>]*?(${name}=['"](${escapeRegExp(originalValue)})['"]).*?>`, 'gs');
            let matchCount = 0;
            html = html.replace(regex, (match, p1) => {
                let result = match;
                if (matchCount === skipCount) {
                    result = match.replace(p1, p1.replace(originalValue, transformedValue));
                }
                matchCount += 1;
                return result;
            });
        });
    }
    return html;
}
exports.default = htmlTransform;
