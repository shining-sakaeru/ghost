import { $isAsideNode } from '@tryghost/kg-default-nodes';
export default {
    export(node, options, exportChildren) {
        if (!$isAsideNode(node)) {
            return null;
        }
        if (options.target === 'email') {
            let children = exportChildren(node);
            if (!children.startsWith('<p>')) {
                children = `<p>${children}</p>`;
            }
            return `<blockquote class="kg-blockquote-alt">${children}</blockquote>`;
        }
        return `<blockquote class="kg-blockquote-alt">${exportChildren(node)}</blockquote>`;
    }
};
//# sourceMappingURL=aside.js.map