"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* c8 ignore start */
const lexical_1 = require("lexical");
/* c8 ignore stop */
exports.default = {
    export(node, options, exportChildren) {
        if (!(0, lexical_1.$isParagraphNode)(node)) {
            return null;
        }
        return `<p>${exportChildren(node)}</p>`;
    }
};
