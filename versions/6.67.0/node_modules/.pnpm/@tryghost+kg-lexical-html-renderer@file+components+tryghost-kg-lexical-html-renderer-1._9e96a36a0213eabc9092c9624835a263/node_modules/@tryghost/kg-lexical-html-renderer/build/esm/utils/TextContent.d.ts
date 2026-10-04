import type { LinkNode } from '@lexical/link';
import type { ElementNode, LexicalNode } from 'lexical';
import type { RendererOptions } from '../types.js';
type ExportChildren = (node: ElementNode, options: RendererOptions) => string;
type RequiredKeys<T, K extends keyof T> = Exclude<T, K> & Required<Pick<T, K>>;
export default class TextContent {
    nodes: LexicalNode[];
    exportChildren: ExportChildren;
    options: RequiredKeys<RendererOptions, 'dom'>;
    constructor(exportChildren: ExportChildren, options: RendererOptions);
    addNode(node: LexicalNode): void;
    render(): string;
    isEmpty(): boolean;
    clear(): void;
    _buildAnchorElement(anchor: HTMLElement, node: LinkNode): void;
}
export {};
//# sourceMappingURL=TextContent.d.ts.map