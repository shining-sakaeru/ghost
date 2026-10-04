import type { LexicalNode } from 'lexical';
export declare function parseAudioNode(AudioNode: new (data: Record<string, unknown>) => LexicalNode): {
    div: (nodeElem: HTMLElement) => {
        conversion(domNode: HTMLElement): {
            node: LexicalNode;
        };
        priority: 1;
    } | null;
};
//# sourceMappingURL=audio-parser.d.ts.map