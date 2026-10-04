import { type DecoratorNodeData } from '../../generate-decorator-node.js';
import { renderHeaderNodeV1 } from './renderers/v1/header-renderer.js';
import { renderHeaderNodeV2 } from './renderers/v2/header-renderer.js';
declare const headerProperties: {
    size: {
        default: string;
    };
    style: {
        default: string;
    };
    buttonEnabled: {
        default: boolean;
    };
    buttonUrl: {
        default: string;
        urlType: string;
    };
    buttonText: {
        default: string;
    };
    header: {
        default: string;
        urlType: string;
        wordCount: true;
    };
    subheader: {
        default: string;
        urlType: string;
        wordCount: true;
    };
    backgroundImageSrc: {
        default: string;
        urlType: string;
    };
    version: {
        default: number;
    };
    accentColor: {
        default: string;
    };
    alignment: {
        default: string;
    };
    backgroundColor: {
        default: string;
    };
    backgroundImageWidth: {
        default: number | null;
    };
    backgroundImageHeight: {
        default: number | null;
    };
    backgroundSize: {
        default: string;
    };
    textColor: {
        default: string;
    };
    buttonColor: {
        default: string;
    };
    buttonTextColor: {
        default: string;
    };
    layout: {
        default: string;
    };
    swapped: {
        default: boolean;
    };
};
export type HeaderData = DecoratorNodeData<typeof headerProperties>;
type HeaderRenderOutput = ReturnType<typeof renderHeaderNodeV1> | ReturnType<typeof renderHeaderNodeV2>;
declare const HeaderNode_base: import("../../generate-decorator-node.js").GeneratedDecoratorNodeClass<{
    size: string;
    style: string;
    buttonEnabled: boolean;
    buttonUrl: string;
    buttonText: string;
    header: string;
    subheader: string;
    backgroundImageSrc: string;
    version: number;
    accentColor: string;
    alignment: string;
    backgroundColor: string;
    backgroundImageWidth: number | null;
    backgroundImageHeight: number | null;
    backgroundSize: string;
    textColor: string;
    buttonColor: string;
    buttonTextColor: string;
    layout: string;
    swapped: boolean;
}, HeaderRenderOutput>;
export declare class HeaderNode extends HeaderNode_base {
    static importDOM(): {
        div: (nodeElem: HTMLElement) => {
            conversion(domNode: HTMLElement): {
                node: import("lexical/LexicalNode.js").LexicalNode;
            };
            priority: 1;
        } | null;
    };
}
export declare const $createHeaderNode: (dataset?: HeaderData) => HeaderNode;
export declare function $isHeaderNode(node: unknown): node is HeaderNode;
export {};
//# sourceMappingURL=HeaderNode.d.ts.map