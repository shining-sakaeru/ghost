import type { LexicalTransformOptionsInput, UrlTransformFunction } from './types';
declare function lexicalTransform(serializedLexical: string, siteUrl: string, transformFunction: UrlTransformFunction, itemPath: string | null, _options?: LexicalTransformOptionsInput): string;
export default lexicalTransform;
