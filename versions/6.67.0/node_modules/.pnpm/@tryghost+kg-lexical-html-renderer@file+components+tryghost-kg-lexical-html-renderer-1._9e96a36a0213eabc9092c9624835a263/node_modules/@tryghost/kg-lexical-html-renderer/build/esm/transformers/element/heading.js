/* c8 ignore start */
import { $isHeadingNode } from '@lexical/rich-text';
import generateId from '../../utils/generate-id.js';
/* c8 ignore stop */
export default {
    export(node, options, exportChildren) {
        if (!$isHeadingNode(node)) {
            return null;
        }
        const tag = node.getTag();
        const id = generateId(node.getTextContent(), options);
        return `<${tag} id="${id}">${exportChildren(node)}</${tag}>`;
    }
};
//# sourceMappingURL=heading.js.map