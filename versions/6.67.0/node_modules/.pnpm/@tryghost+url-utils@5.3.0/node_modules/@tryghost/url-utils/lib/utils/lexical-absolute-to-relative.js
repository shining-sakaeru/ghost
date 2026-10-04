"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const absolute_to_relative_1 = __importDefault(require("./absolute-to-relative"));
const lexical_transform_1 = __importDefault(require("./lexical-transform"));
function lexicalAbsoluteToRelative(serializedLexical, siteUrl, _options = {}) {
    const defaultOptions = { assetsOnly: false, secure: false, nodes: [], transformMap: {} };
    const overrideOptions = { siteUrl, transformType: 'absoluteToRelative' };
    const options = Object.assign({}, defaultOptions, _options, overrideOptions);
    const transformFunction = function (_url, _siteUrl, _itemPath, __options) {
        return (0, absolute_to_relative_1.default)(_url, _siteUrl, __options);
    };
    return (0, lexical_transform_1.default)(serializedLexical, siteUrl, transformFunction, '', options);
}
exports.default = lexicalAbsoluteToRelative;
