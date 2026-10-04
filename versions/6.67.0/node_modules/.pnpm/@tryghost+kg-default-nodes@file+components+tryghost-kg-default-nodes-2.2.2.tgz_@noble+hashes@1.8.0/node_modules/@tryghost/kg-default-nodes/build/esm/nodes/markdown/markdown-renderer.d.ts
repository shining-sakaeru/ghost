import type { ExportDOMOptions, ExportDOMOutput } from '../../export-dom.js';
interface MarkdownNodeData {
    markdown: string;
}
interface MarkdownRenderOptions extends ExportDOMOptions {
}
export declare function renderMarkdownNode(node: MarkdownNodeData, options?: MarkdownRenderOptions): ExportDOMOutput<'inner'>;
export {};
//# sourceMappingURL=markdown-renderer.d.ts.map