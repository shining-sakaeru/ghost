"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* c8 ignore start */
const rich_text_1 = require("@lexical/rich-text");
/* c8 ignore stop */
exports.default = {
    export(node, options, exportChildren) {
        if (!(0, rich_text_1.$isQuoteNode)(node)) {
            return null;
        }
        if (options.target === 'email') {
            let children = exportChildren(node);
            if (!children.startsWith('<p>')) {
                children = `<p>${children}</p>`;
            }
            return `<blockquote>${children}</blockquote>`;
        }
        return `<blockquote>${exportChildren(node)}</blockquote>`;
    }
};
