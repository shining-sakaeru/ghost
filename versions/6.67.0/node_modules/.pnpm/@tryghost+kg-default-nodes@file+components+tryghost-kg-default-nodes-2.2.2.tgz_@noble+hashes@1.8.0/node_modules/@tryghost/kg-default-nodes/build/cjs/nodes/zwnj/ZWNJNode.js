"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZWNJNode = void 0;
exports.$createZWNJNode = $createZWNJNode;
exports.$isZWNJNode = $isZWNJNode;
const lexical_1 = require("lexical");
// This is used in places where we need an extra cursor position at the
// beginning of an element node as it prevents Lexical normalizing the
// cursor position to the end of the previous node.
class ZWNJNode extends lexical_1.TextNode {
    static getType() {
        return 'zwnj';
    }
    static clone(node) {
        return new ZWNJNode('', node.__key);
    }
    createDOM(config) {
        const span = super.createDOM(config);
        span.innerHTML = '&zwnj;';
        return span;
    }
    updateDOM() {
        return false;
    }
    exportJSON() {
        return {
            ...super.exportJSON(),
            type: 'zwnj',
            version: 1
        };
    }
    getTextContent() {
        return '';
    }
    isToken() {
        return true;
    }
}
exports.ZWNJNode = ZWNJNode;
function $createZWNJNode() {
    return new ZWNJNode('');
}
function $isZWNJNode(node) {
    return node instanceof ZWNJNode;
}
