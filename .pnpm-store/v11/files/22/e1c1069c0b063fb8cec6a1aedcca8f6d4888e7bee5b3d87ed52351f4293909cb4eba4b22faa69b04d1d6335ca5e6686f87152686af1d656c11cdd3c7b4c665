/* c8 ignore start */
import { $isQuoteNode } from '@lexical/rich-text';
/* c8 ignore stop */
export default {
    export(node, options, exportChildren) {
        if (!$isQuoteNode(node)) {
            return null;
        }
        if (options.target === 'email') {
            let children = exportChildren(node);
            if (!children.startsWith('<p>')) {
                children = `<p>${children}</p>`;
            }
            return `<blockquote>${children}</blockquote>`;
        }
        return `<blockquote>${exportChildren(node)}</blockquote>`;
    }
};
//# sourceMappingURL=blockquote.js.map