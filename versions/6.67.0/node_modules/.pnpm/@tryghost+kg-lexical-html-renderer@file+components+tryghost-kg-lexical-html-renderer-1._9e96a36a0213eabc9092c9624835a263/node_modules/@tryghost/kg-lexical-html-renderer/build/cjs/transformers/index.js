"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paragraph_js_1 = __importDefault(require("./element/paragraph.js"));
const heading_js_1 = __importDefault(require("./element/heading.js"));
const list_js_1 = __importDefault(require("./element/list.js"));
const blockquote_js_1 = __importDefault(require("./element/blockquote.js"));
const aside_js_1 = __importDefault(require("./element/aside.js"));
const elementTransformers = [
    paragraph_js_1.default,
    heading_js_1.default,
    list_js_1.default,
    blockquote_js_1.default,
    aside_js_1.default
];
exports.default = elementTransformers;
