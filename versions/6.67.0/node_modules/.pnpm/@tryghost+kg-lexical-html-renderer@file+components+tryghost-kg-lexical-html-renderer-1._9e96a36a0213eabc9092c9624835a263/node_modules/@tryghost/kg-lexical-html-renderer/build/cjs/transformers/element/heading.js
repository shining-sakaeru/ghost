"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* c8 ignore start */
const rich_text_1 = require("@lexical/rich-text");
const generate_id_js_1 = __importDefault(require("../../utils/generate-id.js"));
/* c8 ignore stop */
exports.default = {
    export(node, options, exportChildren) {
        if (!(0, rich_text_1.$isHeadingNode)(node)) {
            return null;
        }
        const tag = node.getTag();
        const id = (0, generate_id_js_1.default)(node.getTextContent(), options);
        return `<${tag} id="${id}">${exportChildren(node)}</${tag}>`;
    }
};
