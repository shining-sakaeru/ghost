"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const markdown_transform_1 = __importDefault(require("./markdown-transform"));
const absolute_to_relative_1 = __importDefault(require("./absolute-to-relative"));
const html_absolute_to_relative_1 = __importDefault(require("./html-absolute-to-relative"));
function markdownAbsoluteToRelative(markdown = '', siteUrl, _options = {}) {
    const defaultOptions = { assetsOnly: false, ignoreProtocol: true };
    const options = Object.assign({}, defaultOptions, _options);
    options.earlyExitMatchStr = options.ignoreProtocol ? siteUrl.replace(/http:|https:/, '') : siteUrl;
    options.earlyExitMatchStr = options.earlyExitMatchStr.replace(/\/$/, '');
    // need to ignore itemPath because absoluteToRelative functions doen't take that option
    const transformFunctions = {
        html(_url, _siteUrl, _itemPath, __options) {
            return (0, html_absolute_to_relative_1.default)(_url, _siteUrl, __options);
        },
        url(_url, _siteUrl, _itemPath, __options) {
            return (0, absolute_to_relative_1.default)(_url, _siteUrl, __options);
        }
    };
    return (0, markdown_transform_1.default)(markdown, siteUrl, transformFunctions, '', options);
}
exports.default = markdownAbsoluteToRelative;
