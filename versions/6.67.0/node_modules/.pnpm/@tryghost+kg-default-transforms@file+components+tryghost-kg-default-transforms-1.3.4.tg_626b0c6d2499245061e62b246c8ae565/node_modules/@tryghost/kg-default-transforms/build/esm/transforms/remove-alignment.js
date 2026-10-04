/* c8 ignore next */
export function removeAlignmentTransform(node) {
    // on element nodes format===text-align in Lexical
    if (node.getFormatType() !== '') {
        node.setFormat('');
    }
}
/* c8 ignore next */
export function registerRemoveAlignmentTransform(editor, klass) {
    if (editor.hasNodes([klass])) {
        return editor.registerNodeTransform(klass, removeAlignmentTransform);
    }
    return () => { };
}
//# sourceMappingURL=remove-alignment.js.map