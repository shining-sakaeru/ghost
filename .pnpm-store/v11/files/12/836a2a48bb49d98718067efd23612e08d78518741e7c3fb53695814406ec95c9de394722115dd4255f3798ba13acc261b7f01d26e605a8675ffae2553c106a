"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = render;
const markdown_it_1 = __importDefault(require("markdown-it"));
const semver_1 = __importDefault(require("semver"));
const kg_utils_1 = require("@tryghost/kg-utils");
const markdown_it_footnote_1 = __importDefault(require("markdown-it-footnote"));
const markdown_it_lazy_headers_1 = __importDefault(require("markdown-it-lazy-headers"));
const markdown_it_mark_1 = __importDefault(require("markdown-it-mark"));
const markdown_it_image_lazy_loading_1 = __importDefault(require("markdown-it-image-lazy-loading"));
const markdown_it_sub_1 = __importDefault(require("markdown-it-sub"));
const markdown_it_sup_1 = __importDefault(require("markdown-it-sup"));
const renderers = {};
const namedHeaders = function ({ ghostVersion } = {}) {
    const slugify = function (inputString, usedHeaders = {}) {
        let slug = (0, kg_utils_1.slugify)(inputString, { ghostVersion, type: 'markdown' });
        if (usedHeaders[slug]) {
            usedHeaders[slug] += 1;
            slug += usedHeaders[slug];
        }
        return slug;
    };
    return function (md) {
        const originalHeadingOpen = md.renderer.rules.heading_open;
        // originally from https://github.com/leff/markdown-it-named-headers
        // moved here to avoid pulling in http://stringjs.com dependency
        md.renderer.rules.heading_open = function (tokens, idx, options, env, self) {
            const usedHeaders = {};
            tokens[idx].attrs = tokens[idx].attrs || [];
            const title = tokens[idx + 1].children.reduce(function (acc, t) {
                return acc + t.content;
            }, '');
            const slug = slugify(title, usedHeaders);
            tokens[idx].attrs.push(['id', slug]);
            if (originalHeadingOpen) {
                return originalHeadingOpen.call(this, tokens, idx, options, env, self);
            }
            else {
                return self.renderToken(tokens, idx, options);
            }
        };
    };
};
const selectRenderer = function (options) {
    const version = semver_1.default.coerce(options.ghostVersion || '4.0');
    if (version && semver_1.default.satisfies(version, '<4.x')) {
        if (renderers['<4.x']) {
            return renderers['<4.x'];
        }
        const markdownIt = new markdown_it_1.default({ html: true, breaks: true, linkify: true })
            .use(markdown_it_footnote_1.default)
            .use(markdown_it_lazy_headers_1.default)
            .use(markdown_it_mark_1.default)
            .use(markdown_it_image_lazy_loading_1.default)
            .use(namedHeaders(options))
            .use(markdown_it_sub_1.default)
            .use(markdown_it_sup_1.default);
        markdownIt.linkify.set({ fuzzyLink: false });
        renderers['<4.x'] = markdownIt;
        return markdownIt;
    }
    else {
        if (renderers.latest) {
            return renderers.latest;
        }
        const markdownIt = new markdown_it_1.default({ html: true, breaks: true, linkify: true })
            .use(markdown_it_footnote_1.default)
            .use(markdown_it_lazy_headers_1.default)
            .use(markdown_it_mark_1.default)
            .use(markdown_it_image_lazy_loading_1.default)
            .use(namedHeaders(options))
            .use(markdown_it_sub_1.default)
            .use(markdown_it_sup_1.default);
        markdownIt.linkify.set({ fuzzyLink: false });
        renderers.latest = markdownIt;
        return markdownIt;
    }
};
function render(markdown, options = {}) {
    return selectRenderer(options).render(markdown);
}
