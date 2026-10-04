import { DecoratorNode } from 'lexical';
import type { LexicalEditor } from 'lexical';
import type { ExportDOMOptions, ExportDOMOutput } from './export-dom.js';
export declare class KoenigDecoratorNode extends DecoratorNode<unknown> {
    static transform(): null;
    decorate(): unknown;
}
export type KoenigCard<TOutput extends ExportDOMOutput = ExportDOMOutput> = KoenigDecoratorNode & {
    [key: string]: unknown;
    isKoenigCard(): true;
    exportDOM(editor: LexicalEditor, options?: ExportDOMOptions): TOutput;
    getDataset(): Record<string, unknown>;
    hasDynamicData(): boolean;
    hasEditMode(): boolean;
    getIsVisibilityActive(): boolean;
    getDynamicData?(options: ExportDOMOptions): Promise<{
        key: number;
        data: unknown;
    }>;
};
export declare function $isKoenigCard(node: unknown): node is KoenigCard;
//# sourceMappingURL=KoenigDecoratorNode.d.ts.map