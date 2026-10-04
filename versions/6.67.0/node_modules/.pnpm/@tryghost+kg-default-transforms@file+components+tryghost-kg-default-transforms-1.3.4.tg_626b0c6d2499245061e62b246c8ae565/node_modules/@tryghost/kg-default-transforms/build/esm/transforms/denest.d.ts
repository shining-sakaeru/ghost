import type { ElementNode, Klass, LexicalEditor, LexicalNode } from 'lexical';
export type CreateNodeFn<T extends LexicalNode> = (originalNode: T) => T;
export declare function denestTransform<T extends ElementNode>(node: T, createNode: CreateNodeFn<T>): void;
export declare function registerDenestTransform<T extends ElementNode>(editor: LexicalEditor, klass: Klass<T>, createNode: CreateNodeFn<T>): () => void;
//# sourceMappingURL=denest.d.ts.map