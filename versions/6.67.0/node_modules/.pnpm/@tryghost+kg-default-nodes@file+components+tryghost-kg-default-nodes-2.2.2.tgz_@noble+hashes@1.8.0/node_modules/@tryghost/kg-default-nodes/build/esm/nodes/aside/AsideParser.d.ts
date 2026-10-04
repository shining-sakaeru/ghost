import type { LexicalNode } from 'lexical';
export declare class AsideParser {
    NodeClass: {
        new (): LexicalNode;
    };
    constructor(NodeClass: {
        new (): LexicalNode;
    });
    get DOMConversionMap(): {
        blockquote: () => {
            conversion: (domNode: HTMLElement) => {
                node: LexicalNode;
            } | null;
            priority: 0;
        };
    };
}
//# sourceMappingURL=AsideParser.d.ts.map