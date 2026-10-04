import { HeadingNode } from '@lexical/rich-text';
import type { HeadingTagType, SerializedHeadingNode } from '@lexical/rich-text';
import type { DOMConversion } from 'lexical';
export declare const extendedHeadingNodeReplacement: {
    replace: typeof HeadingNode;
    with: (node: HeadingNode) => ExtendedHeadingNode;
};
export declare class ExtendedHeadingNode extends HeadingNode {
    constructor(tag: HeadingTagType, key?: string);
    static getType(): string;
    static clone(node: ExtendedHeadingNode): ExtendedHeadingNode;
    static importDOM(): {
        p: (node: HTMLElement) => DOMConversion | {
            conversion: () => {
                node: ExtendedHeadingNode;
            };
            priority: 1;
        } | null;
    };
    static importJSON(serializedNode: SerializedHeadingNode): ExtendedHeadingNode;
    exportJSON(): SerializedHeadingNode;
}
//# sourceMappingURL=ExtendedHeadingNode.d.ts.map