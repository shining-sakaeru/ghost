import type { ExportDOMOptions } from '../../export-dom.js';
interface CalloutNodeData {
    backgroundColor: string;
    calloutEmoji: string;
    calloutText: string;
}
interface RenderOptions extends ExportDOMOptions {
}
export declare function renderCalloutNode(node: CalloutNodeData, options?: RenderOptions): {
    element: HTMLDivElement;
    type: 'outer';
};
export {};
//# sourceMappingURL=callout-renderer.d.ts.map