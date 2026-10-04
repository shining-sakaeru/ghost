import { $getRoot } from 'lexical';
import { $isKoenigCard } from '@tryghost/kg-default-nodes';
export default function getDynamicDataNodes(editorState) {
    const dynamicNodes = [];
    editorState.read(() => {
        const root = $getRoot();
        const nodes = root.getChildren();
        nodes.forEach((node) => {
            if ($isKoenigCard(node) && node.hasDynamicData()) {
                dynamicNodes.push(node);
            }
        });
    });
    return dynamicNodes;
}
//# sourceMappingURL=get-dynamic-data-nodes.js.map