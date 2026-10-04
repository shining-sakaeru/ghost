"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = readTextContent;
const lexical_1 = require("lexical");
// when used nodes are used client-side their data attributes may be an editor
// instance rather than a string in the case of nested editors
function readTextContent(node, property) {
    const propertyName = `__${property}`;
    const propertyEditorName = `${propertyName}Editor`;
    // prefer the editor if it exists as the underlying value isn't written until export
    const value = node[propertyEditorName] || node[propertyName];
    if (!value) {
        return '';
    }
    if (typeof value === 'string') {
        return value;
    }
    if (typeof value === 'number') {
        return value.toString();
    }
    if (typeof value === 'object' && value !== null && 'getEditorState' in value && typeof value.getEditorState === 'function') {
        let text = '';
        value.getEditorState().read(() => {
            text = (0, lexical_1.$getRoot)().getTextContent();
        });
        return text;
    }
    return '';
}
