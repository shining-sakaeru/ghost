import type { ExportDOMOptions, ExportDOMOutput } from '../../../../export-dom.js';
interface HeaderV1NodeData {
    size: string;
    style: string;
    buttonEnabled: boolean;
    buttonUrl: string;
    buttonText: string;
    header: string;
    subheader: string;
    backgroundImageSrc: string;
}
interface RenderOptions extends ExportDOMOptions {
}
export declare function renderHeaderNodeV1(node: HeaderV1NodeData, options?: RenderOptions): ExportDOMOutput;
export {};
//# sourceMappingURL=header-renderer.d.ts.map