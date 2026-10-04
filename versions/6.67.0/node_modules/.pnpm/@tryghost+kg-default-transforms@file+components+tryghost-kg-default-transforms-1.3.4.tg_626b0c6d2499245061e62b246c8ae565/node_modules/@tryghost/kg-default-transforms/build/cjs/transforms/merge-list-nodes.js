"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeListNodesTransform = mergeListNodesTransform;
exports.registerMergeListNodesTransform = registerMergeListNodesTransform;
/* c8 ignore start */
const list_1 = require("@lexical/list");
/* c8 ignore stop */
/* c8 ignore next */
function mergeListNodesTransform(node) {
    const nextSibling = node.getNextSibling();
    if ((0, list_1.$isListNode)(nextSibling) &&
        (0, list_1.$isListNode)(node) &&
        nextSibling.getListType() === node.getListType()) {
        node.append(...nextSibling.getChildren());
        nextSibling.remove();
    }
}
/* c8 ignore next */
function registerMergeListNodesTransform(editor) {
    if (editor.hasNodes([list_1.ListNode])) {
        return editor.registerNodeTransform(list_1.ListNode, mergeListNodesTransform);
    }
    return () => { };
}
