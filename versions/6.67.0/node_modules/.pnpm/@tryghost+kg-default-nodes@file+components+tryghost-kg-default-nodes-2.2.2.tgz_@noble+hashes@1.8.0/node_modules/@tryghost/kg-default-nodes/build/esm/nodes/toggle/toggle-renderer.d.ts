import type { ExportDOMOptions } from '../../export-dom.js';
interface ToggleNodeData {
    heading: string;
    content: string;
}
interface RenderOptions extends ExportDOMOptions {
}
export declare function renderToggleNode(node: ToggleNodeData, options?: RenderOptions): {
    element: HTMLElement;
    type: 'outer';
};
export {};
//# sourceMappingURL=toggle-renderer.d.ts.map