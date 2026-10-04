"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAlignmentTransform = removeAlignmentTransform;
exports.registerRemoveAlignmentTransform = registerRemoveAlignmentTransform;
/* c8 ignore next */
function removeAlignmentTransform(node) {
    // on element nodes format===text-align in Lexical
    if (node.getFormatType() !== '') {
        node.setFormat('');
    }
}
/* c8 ignore next */
function registerRemoveAlignmentTransform(editor, klass) {
    if (editor.hasNodes([klass])) {
        return editor.registerNodeTransform(klass, removeAlignmentTransform);
    }
    return () => { };
}
