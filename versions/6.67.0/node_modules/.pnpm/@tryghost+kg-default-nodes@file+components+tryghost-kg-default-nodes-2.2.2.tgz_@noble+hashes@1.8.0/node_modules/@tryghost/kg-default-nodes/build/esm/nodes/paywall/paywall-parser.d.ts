import type { LexicalNode } from 'lexical';
export declare function parsePaywallNode(PaywallNode: new (data?: Record<string, unknown>) => LexicalNode): {
    '#comment': (nodeElem: Node) => {
        conversion(): {
            node: LexicalNode;
        };
        priority: 0;
    } | null;
};
//# sourceMappingURL=paywall-parser.d.ts.map