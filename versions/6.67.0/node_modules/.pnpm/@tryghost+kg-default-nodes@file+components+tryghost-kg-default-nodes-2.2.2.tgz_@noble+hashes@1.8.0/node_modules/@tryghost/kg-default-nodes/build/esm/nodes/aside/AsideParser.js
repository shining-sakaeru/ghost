export class AsideParser {
    NodeClass;
    constructor(NodeClass) {
        this.NodeClass = NodeClass;
    }
    get DOMConversionMap() {
        return {
            blockquote: () => ({
                conversion: (domNode) => {
                    const isBigQuote = domNode.classList?.contains('kg-blockquote-alt');
                    if (domNode.tagName === 'BLOCKQUOTE' && isBigQuote) {
                        const node = new this.NodeClass();
                        return { node };
                    }
                    return null;
                },
                priority: 0
            })
        };
    }
}
//# sourceMappingURL=AsideParser.js.map