import type { CardRenderOptions } from '../types.js';
interface SrcsetArgs {
    src: string;
    width: number;
    options: CardRenderOptions;
}
interface ImageInfo {
    src: string;
    width: number;
}
interface SimpleDomElement {
    tagName: string;
    getAttribute(name: string): string | null;
    setAttribute(name: string, value: string): void;
}
export declare const getSrcsetAttribute: ({ src, width, options, }: SrcsetArgs) => string | undefined;
export declare const setSrcsetAttribute: (elem: SimpleDomElement, image: ImageInfo, options: CardRenderOptions) => void;
export {};
//# sourceMappingURL=srcset-attribute.d.ts.map