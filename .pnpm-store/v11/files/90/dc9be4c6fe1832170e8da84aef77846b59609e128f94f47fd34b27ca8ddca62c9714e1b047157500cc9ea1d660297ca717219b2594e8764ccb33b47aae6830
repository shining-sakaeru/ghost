"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const html_transform_1 = __importDefault(require("./html-transform"));
const absolute_to_relative_1 = __importDefault(require("./absolute-to-relative"));
function htmlAbsoluteToRelative(html = '', siteUrl, _options = {}) {
    const defaultOptions = { assetsOnly: false, ignoreProtocol: true };
    const options = Object.assign({}, defaultOptions, _options || {});
    // exit early and avoid parsing if the content does not contain the siteUrl
    options.earlyExitMatchStr = options.ignoreProtocol ? siteUrl.replace(/http:|https:/, '') : siteUrl;
    options.earlyExitMatchStr = options.earlyExitMatchStr.replace(/\/$/, '');
    // need to ignore itemPath because absoluteToRelative doesn't take that option
    const transformFunction = function (_url, _siteUrl, _itemPath, __options) {
        return (0, absolute_to_relative_1.default)(_url, _siteUrl, __options);
    };
    return (0, html_transform_1.default)(html, siteUrl, transformFunction, '', options);
}
exports.default = htmlAbsoluteToRelative;
