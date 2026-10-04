"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobiledoc_relative_to_absolute_1 = __importDefault(require("./mobiledoc-relative-to-absolute"));
const mobiledoc_absolute_to_transform_ready_1 = __importDefault(require("./mobiledoc-absolute-to-transform-ready"));
function mobiledocToTransformReady(mobiledoc, siteUrl, itemPath, options) {
    let finalItemPath = null;
    let finalOptions = options || {};
    if (typeof itemPath === 'object' && itemPath !== null && !options) {
        finalOptions = itemPath;
        finalItemPath = null;
    }
    else if (typeof itemPath === 'string') {
        finalItemPath = itemPath;
    }
    const absolute = (0, mobiledoc_relative_to_absolute_1.default)(mobiledoc, siteUrl, finalItemPath, finalOptions);
    return (0, mobiledoc_absolute_to_transform_ready_1.default)(absolute, siteUrl, finalOptions);
}
exports.default = mobiledocToTransformReady;
