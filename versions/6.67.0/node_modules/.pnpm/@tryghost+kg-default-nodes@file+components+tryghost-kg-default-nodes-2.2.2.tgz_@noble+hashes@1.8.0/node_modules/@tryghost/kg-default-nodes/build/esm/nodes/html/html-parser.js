export function parseHtmlNode(HtmlNode) {
    return {
        '#comment': (nodeElem) => {
            if (nodeElem.nodeType === 8 && nodeElem.nodeValue?.trim().match(/^kg-card-begin:\s?html$/)) {
                return {
                    conversion(domNode) {
                        const html = [];
                        let nextNode = domNode.nextSibling;
                        let hasEndComment = false;
                        while (nextNode) {
                            if (isHtmlEndComment(nextNode)) {
                                hasEndComment = true;
                                break;
                            }
                            nextNode = nextNode.nextSibling;
                        }
                        nextNode = domNode.nextSibling;
                        if (hasEndComment) {
                            while (nextNode && !isHtmlEndComment(nextNode)) {
                                const currentNode = nextNode;
                                nextNode = currentNode.nextSibling;
                                if (currentNode.nodeType === 1) {
                                    html.push(currentNode.outerHTML);
                                }
                                else if (currentNode.nodeType === 3 && currentNode.textContent) {
                                    html.push(currentNode.textContent);
                                }
                                // remove nodes as we go so that they don't go through the parser
                                currentNode.remove();
                            }
                            if (nextNode && isHtmlEndComment(nextNode)) {
                                nextNode.remove();
                            }
                        }
                        const payload = { html: html.join('\n').trim() };
                        const node = new HtmlNode(payload);
                        return { node };
                    },
                    priority: 0
                };
            }
            return null;
        },
        table: (nodeElem) => {
            if (nodeElem.nodeType === 1 && nodeElem.tagName === 'TABLE' && nodeElem.parentNode?.tagName !== 'TABLE') {
                return {
                    conversion(domNode) {
                        const payload = { html: domNode.outerHTML };
                        const node = new HtmlNode(payload);
                        return { node };
                    },
                    priority: 0
                };
            }
            return null;
        }
    };
}
function isHtmlEndComment(node) {
    return node && node.nodeType === 8 && node.nodeValue?.trim().match(/^kg-card-end:\s?html$/);
}
//# sourceMappingURL=html-parser.js.map