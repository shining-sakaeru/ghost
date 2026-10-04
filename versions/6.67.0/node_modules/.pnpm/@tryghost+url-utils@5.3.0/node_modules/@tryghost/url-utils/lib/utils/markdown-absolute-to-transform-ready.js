"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const markdown_transform_1 = __importDefault(require("./markdown-transform"));
const absolute_to_transform_ready_1 = __importDefault(require("./absolute-to-transform-ready"));
const html_absolute_to_transform_ready_1 = __importDefault(require("./html-absolute-to-transform-ready"));
const build_early_exit_match_1 = __importDefault(require("./build-early-exit-match"));
const { buildEarlyExitMatch } = build_early_exit_match_1.default;
function markdownAbsoluteToTransformReady(markdown = '', siteUrl, _options = {}) {
    const defaultOptions = { assetsOnly: false, ignoreProtocol: true };
    const options = Object.assign({}, defaultOptions, _options);
    const earlyExitMatch = buildEarlyExitMatch(siteUrl, options);
    if (earlyExitMatch) {
        options.earlyExitMatchStr = earlyExitMatch;
    }
    // need to ignore itemPath because absoluteToTransformReady functions doen't take that option
    const transformFunctions = {
        html(_url, _siteUrl, _itemPath, __options) {
            return (0, html_absolute_to_transform_ready_1.default)(_url, _siteUrl, __options);
        },
        url(_url, _siteUrl, _itemPath, __options) {
            return (0, absolute_to_transform_ready_1.default)(_url, _siteUrl, __options);
        }
    };
    return (0, markdown_transform_1.default)(markdown, siteUrl, transformFunctions, '', options);
}
exports.default = markdownAbsoluteToTransformReady;
