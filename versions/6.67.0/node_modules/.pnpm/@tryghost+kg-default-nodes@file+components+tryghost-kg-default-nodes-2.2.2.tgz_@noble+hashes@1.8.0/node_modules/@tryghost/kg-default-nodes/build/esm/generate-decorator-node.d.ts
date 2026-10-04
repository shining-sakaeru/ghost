import type { ExportDOMOptions, ExportDOMOutput } from './export-dom.js';
import type { KoenigCard } from './KoenigDecoratorNode.js';
import type { SerializedLexicalNode } from 'lexical';
import type { Visibility } from './utils/visibility.js';
type RenderFn<TNode = unknown, TOutput extends ExportDOMOutput = ExportDOMOutput> = {
    bivarianceHack(node: TNode, options: ExportDOMOptions): TOutput;
}['bivarianceHack'];
type VersionedRenderFn<TNode = unknown, TOutput extends ExportDOMOutput = ExportDOMOutput> = Record<string | number, RenderFn<TNode, TOutput>>;
/**
 * @typedef {Object} DecoratorNodeProperty
 * @property {*} default - The property's default value
 * @property {('url'|'html'|'markdown'|null)} urlType - If the property contains a URL, the URL's type: 'url', 'html' or 'markdown'. Use 'url' is the property contains only a URL, 'html' or 'markdown' if the property contains HTML or markdown code, that may contain URLs.
 * @property {boolean} wordCount - Whether the property should be counted in the word count
 *
 * @param {string} nodeType – The node's type (must be unique)
 * @param {DecoratorNodePropertyMap} properties - A map of properties for the generated class
 * @param {boolean} hasVisibility - Whether to add a visibility property to the node
 * @param {Function} defaultRenderFn - A function that returns a @tryghost/kg-lexical-html-renderer compatible object, e.g. {element: Div, type: 'inner}
 * @returns {Object} - The generated class.
 */
export interface DecoratorNodeProperty<Default = unknown> {
    default: Default;
    urlType?: string;
    urlPath?: string;
    wordCount?: boolean;
}
export type DecoratorNodePropertyMap = Record<string, DecoratorNodeProperty>;
export type DecoratorNodeValueMap<Props extends DecoratorNodePropertyMap, HasVisibility extends boolean = false> = {
    [Name in keyof Props]: Props[Name]['default'];
} & (HasVisibility extends true ? {
    visibility: Visibility;
} : unknown);
export type DecoratorNodeData<Props extends DecoratorNodePropertyMap, HasVisibility extends boolean = false> = Partial<DecoratorNodeValueMap<Props, HasVisibility>>;
export interface GeneratedDecoratorNodeRuntime<TOutput extends ExportDOMOutput = ExportDOMOutput> extends KoenigCard<TOutput> {
    exportJSON(): SerializedLexicalNode & Record<string, unknown>;
}
export type GeneratedDecoratorNode<TDataset extends Record<string, unknown> = Record<string, unknown>, TOutput extends ExportDOMOutput = ExportDOMOutput> = GeneratedDecoratorNodeRuntime<TOutput> & TDataset;
export type SerializedGeneratedDecoratorNode<TDataset extends Record<string, unknown> = Record<string, unknown>> = SerializedLexicalNode & TDataset;
export interface GeneratedDecoratorNodeClass<TDataset extends Record<string, unknown>, TOutput extends ExportDOMOutput = ExportDOMOutput> {
    new (data?: Partial<TDataset>, key?: string): GeneratedDecoratorNode<TDataset, TOutput>;
    prototype: GeneratedDecoratorNode<TDataset, TOutput>;
    getType(): string;
    clone(node: GeneratedDecoratorNode<TDataset, TOutput>): GeneratedDecoratorNode<TDataset, TOutput>;
    transform(): null;
    getPropertyDefaults(): TDataset;
    readonly urlTransformMap: Record<string, string | Record<string, string>>;
    importJSON(serializedNode: Record<string, unknown>): GeneratedDecoratorNode<TDataset, TOutput>;
}
export interface GenerateDecoratorNodeOptions<Props extends DecoratorNodePropertyMap, HasVisibility extends boolean, TOutput extends ExportDOMOutput, TRenderNode> {
    nodeType: string;
    properties?: Props;
    defaultRenderFn?: RenderFn<TRenderNode, TOutput> | VersionedRenderFn<TRenderNode, TOutput>;
    version?: number;
    hasVisibility?: HasVisibility;
}
export declare function generateDecoratorNode<Props extends DecoratorNodePropertyMap = Record<never, never>, HasVisibility extends boolean = false, TOutput extends ExportDOMOutput = ExportDOMOutput, TRenderNode = GeneratedDecoratorNode<DecoratorNodeValueMap<Props, HasVisibility>, TOutput>>(options: GenerateDecoratorNodeOptions<Props, HasVisibility, TOutput, TRenderNode>): GeneratedDecoratorNodeClass<DecoratorNodeValueMap<Props, HasVisibility>, TOutput>;
export {};
//# sourceMappingURL=generate-decorator-node.d.ts.map