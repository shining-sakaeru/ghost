/* c8 ignore start */
import { $isParagraphNode } from 'lexical';
/* c8 ignore stop */
export default {
    export(node, options, exportChildren) {
        if (!$isParagraphNode(node)) {
            return null;
        }
        return `<p>${exportChildren(node)}</p>`;
    }
};
//# sourceMappingURL=paragraph.js.map