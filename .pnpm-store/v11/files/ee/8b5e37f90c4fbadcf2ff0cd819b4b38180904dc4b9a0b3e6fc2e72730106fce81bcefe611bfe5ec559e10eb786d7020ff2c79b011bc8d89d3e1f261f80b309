"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const relative_to_transform_ready_1 = __importDefault(require("./relative-to-transform-ready"));
const mobiledoc_transform_1 = __importDefault(require("./mobiledoc-transform"));
function mobiledocRelativeToTransformReady(serializedMobiledoc, siteUrl, itemPath, _options = {}) {
    const defaultOptions = { assetsOnly: false, secure: false, cardTransformers: [] };
    const overrideOptions = { siteUrl, transformType: 'toTransformReady' };
    const options = Object.assign({}, defaultOptions, _options, overrideOptions);
    return (0, mobiledoc_transform_1.default)(serializedMobiledoc, siteUrl, relative_to_transform_ready_1.default, itemPath, options);
}
exports.default = mobiledocRelativeToTransformReady;
