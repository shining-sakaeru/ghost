import type { ExportDOMOptions } from '../../export-dom.js';
interface ButtonNodeData {
    buttonUrl: string;
    buttonText: string;
    alignment: string;
}
interface RenderOptions extends ExportDOMOptions {
}
export declare function renderButtonNode(node: ButtonNodeData, options?: RenderOptions): {
    element: HTMLDivElement;
    type: 'outer';
} | {
    element: HTMLDivElement;
    type: 'inner';
} | import("../../utils/render-empty-container.js").EmptyContainerOutput;
export {};
//# sourceMappingURL=button-renderer.d.ts.map