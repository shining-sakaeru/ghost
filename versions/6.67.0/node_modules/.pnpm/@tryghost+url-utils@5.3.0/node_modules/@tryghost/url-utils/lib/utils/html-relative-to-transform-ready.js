"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const html_transform_1 = __importStar(require("./html-transform"));
const relative_to_transform_ready_1 = __importDefault(require("./relative-to-transform-ready"));
const htmlRelativeToTransformReady = function (html = '', root, itemPath, _options) {
    // itemPath is optional, if it's an object may be the options param instead
    let finalItemPath = null;
    let finalOptions = _options || {};
    if (typeof itemPath === 'object' && itemPath !== null && !_options) {
        finalOptions = itemPath;
        finalItemPath = null;
    }
    else if (typeof itemPath === 'string') {
        finalItemPath = itemPath;
    }
    const defaultOptions = {
        replacementStr: '__GHOST_URL__'
    };
    const overrideOptions = {
        secure: false
    };
    const options = Object.assign({}, defaultOptions, finalOptions, overrideOptions);
    options.earlyExitMatchStr = html_transform_1.earlyExitMatchStr;
    if (options.assetsOnly) {
        options.earlyExitMatchStr = options.staticImageUrlPrefix;
    }
    return (0, html_transform_1.default)(html, root, relative_to_transform_ready_1.default, finalItemPath, options);
};
exports.default = htmlRelativeToTransformReady;
