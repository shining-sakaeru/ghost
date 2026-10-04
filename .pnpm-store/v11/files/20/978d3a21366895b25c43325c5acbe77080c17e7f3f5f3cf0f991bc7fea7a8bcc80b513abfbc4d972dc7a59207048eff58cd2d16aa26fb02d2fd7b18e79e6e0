"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TKNode = void 0;
exports.$createTKNode = $createTKNode;
exports.$isTKNode = $isTKNode;
const lexical_1 = require("lexical");
class TKNode extends lexical_1.TextNode {
    static getType() {
        return 'tk';
    }
    static clone(node) {
        return new TKNode(node.__text, node.__key);
    }
    constructor(text, key) {
        super(text, key);
    }
    createDOM(config) {
        const element = super.createDOM(config);
        const classes = config.theme.tk?.split(' ') || [];
        element.classList.add(...classes);
        element.dataset.kgTk = 'true';
        return element;
    }
    static importJSON(serializedNode) {
        const node = new TKNode(serializedNode.text);
        node.setFormat(serializedNode.format);
        node.setDetail(serializedNode.detail);
        node.setMode(serializedNode.mode);
        node.setStyle(serializedNode.style);
        return node;
    }
    exportJSON() {
        return {
            ...super.exportJSON(),
            type: 'tk'
        };
    }
    canInsertTextBefore() {
        return false;
    }
    isTextEntity() {
        return true;
    }
}
exports.TKNode = TKNode;
/**
 * Generates a TKNode, which is a string following the format of a # followed by some text, eg. #lexical.
 * @param text - The text used inside the TKNode.
 * @returns - The TKNode with the embedded text.
 */
function $createTKNode(text) {
    return (0, lexical_1.$applyNodeReplacement)(new TKNode(text));
}
/**
 * Determines if node is a TKNode.
 * @param node - The node to be checked.
 * @returns true if node is a TKNode, false otherwise.
 */
function $isTKNode(node) {
    return node instanceof TKNode;
}
