"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsideNode = void 0;
exports.$createAsideNode = $createAsideNode;
exports.$isAsideNode = $isAsideNode;
const lexical_1 = require("lexical");
const AsideParser_js_1 = require("./AsideParser.js");
class AsideNode extends lexical_1.ElementNode {
    static getType() {
        return 'aside';
    }
    static clone(node) {
        return new this(node.__key);
    }
    static get urlTransformMap() {
        return {};
    }
    constructor(key) {
        super(key);
    }
    static importJSON(serializedNode) {
        const node = new this();
        node.setFormat(serializedNode.format);
        node.setIndent(serializedNode.indent);
        node.setDirection(serializedNode.direction);
        return node;
    }
    exportJSON() {
        const dataset = {
            ...super.exportJSON(),
            type: 'aside',
            version: 1
        };
        return dataset;
    }
    static importDOM() {
        const parser = new AsideParser_js_1.AsideParser(this);
        return parser.DOMConversionMap;
    }
    /* c8 ignore start */
    createDOM(_config, _editor) {
        return document.createElement('div');
    }
    updateDOM() {
        return false;
    }
    isInline() {
        return false;
    }
    extractWithChild() {
        return true;
    }
}
exports.AsideNode = AsideNode;
function $createAsideNode() {
    return new AsideNode();
}
function $isAsideNode(node) {
    return node instanceof AsideNode;
}
