import type { ExportDOMOptions } from '../../export-dom.js';
import { type Visibility } from '../../utils/visibility.js';
interface TransistorNodeData {
    visibility?: Visibility;
}
interface TransistorRenderOptions extends ExportDOMOptions {
    design?: {
        accentColor?: string;
        [key: string]: unknown;
    };
}
export declare function renderTransistorNode(node: TransistorNodeData, options?: TransistorRenderOptions): import("../../export-dom.js").ExportDOMOutput;
export {};
//# sourceMappingURL=transistor-renderer.d.ts.map