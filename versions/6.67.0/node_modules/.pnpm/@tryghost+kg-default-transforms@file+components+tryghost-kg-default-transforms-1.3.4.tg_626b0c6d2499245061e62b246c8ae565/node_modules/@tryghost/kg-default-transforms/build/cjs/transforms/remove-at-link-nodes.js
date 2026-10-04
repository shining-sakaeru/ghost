"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAtLinkNodesTransform = removeAtLinkNodesTransform;
exports.registerRemoveAtLinkNodesTransform = registerRemoveAtLinkNodesTransform;
/* c8 ignore start */
const lexical_1 = require("lexical");
const kg_default_nodes_1 = require("@tryghost/kg-default-nodes");
/* c8 ignore stop */
// used when rendering to make sure we're not rendering the temporary
// nodes used for searching internal links
function removeAtLinkNodesTransform(node) {
    const prevSibling = node.getPreviousSibling();
    const nextSibling = node.getNextSibling();
    // Remove a surrounding space if it exists to avoid double-spacing after removal
    // AtLink nodes should always exist surrounded by spaces unless at beginning or end of text
    if (prevSibling) {
        if ((0, lexical_1.$isTextNode)(prevSibling) && prevSibling.getTextContent().endsWith(' ')) {
            prevSibling.setTextContent(prevSibling.getTextContent().slice(0, -1));
        }
    }
    else if (nextSibling) {
        if ((0, lexical_1.$isTextNode)(nextSibling) && nextSibling.getTextContent().startsWith(' ')) {
            nextSibling.setTextContent(nextSibling.getTextContent().slice(1));
        }
    }
    node.remove();
}
/* c8 ignore next */
function registerRemoveAtLinkNodesTransform(editor) {
    if (editor.hasNodes([kg_default_nodes_1.AtLinkNode])) {
        return editor.registerNodeTransform(kg_default_nodes_1.AtLinkNode, removeAtLinkNodesTransform);
    }
    return () => { };
}
