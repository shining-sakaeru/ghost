"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const absolute_to_transform_ready_1 = __importDefault(require("./absolute-to-transform-ready"));
const lexical_transform_1 = __importDefault(require("./lexical-transform"));
function lexicalAbsoluteToTransformReady(serializedLexical, siteUrl, _options = {}) {
    const defaultOptions = { assetsOnly: false, secure: false, nodes: [], transformMap: {} };
    const overrideOptions = { siteUrl, transformType: 'toTransformReady' };
    const options = Object.assign({}, defaultOptions, _options, overrideOptions);
    const transformFunction = function (_url, _siteUrl, _itemPath, __options) {
        return (0, absolute_to_transform_ready_1.default)(_url, _siteUrl, __options);
    };
    return (0, lexical_transform_1.default)(serializedLexical, siteUrl, transformFunction, '', options);
}
exports.default = lexicalAbsoluteToTransformReady;
