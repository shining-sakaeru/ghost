"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const relative_to_absolute_1 = __importDefault(require("./relative-to-absolute"));
const lexical_transform_1 = __importDefault(require("./lexical-transform"));
function lexicalRelativeToAbsolute(serializedLexical, siteUrl, itemPath, _options = {}) {
    const defaultOptions = { assetsOnly: false, secure: false, nodes: [], transformMap: {} };
    const overrideOptions = { siteUrl, itemPath, transformType: 'relativeToAbsolute' };
    const options = Object.assign({}, defaultOptions, _options, overrideOptions);
    return (0, lexical_transform_1.default)(serializedLexical, siteUrl, relative_to_absolute_1.default, itemPath, options);
}
exports.default = lexicalRelativeToAbsolute;
