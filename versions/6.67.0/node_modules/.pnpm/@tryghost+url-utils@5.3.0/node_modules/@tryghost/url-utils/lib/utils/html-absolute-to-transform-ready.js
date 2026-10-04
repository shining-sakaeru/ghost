"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const html_transform_1 = __importDefault(require("./html-transform"));
const absolute_to_transform_ready_1 = __importDefault(require("./absolute-to-transform-ready"));
const build_early_exit_match_1 = __importDefault(require("./build-early-exit-match"));
const { buildEarlyExitMatch } = build_early_exit_match_1.default;
const htmlAbsoluteToTransformReady = function (html = '', siteUrl, _options = {}) {
    const defaultOptions = { assetsOnly: false, ignoreProtocol: true };
    const options = Object.assign({}, defaultOptions, _options || {});
    // exit early and avoid parsing if the content does not contain the siteUrl or configured asset bases
    const earlyExitMatch = buildEarlyExitMatch(siteUrl, options);
    if (earlyExitMatch) {
        options.earlyExitMatchStr = earlyExitMatch;
    }
    // need to ignore itemPath because absoluteToRelative doesn't take that option
    const transformFunction = function (_url, _siteUrl, _itemPath, __options) {
        return (0, absolute_to_transform_ready_1.default)(_url, _siteUrl, __options);
    };
    return (0, html_transform_1.default)(html, siteUrl, transformFunction, '', options);
};
exports.default = htmlAbsoluteToTransformReady;
