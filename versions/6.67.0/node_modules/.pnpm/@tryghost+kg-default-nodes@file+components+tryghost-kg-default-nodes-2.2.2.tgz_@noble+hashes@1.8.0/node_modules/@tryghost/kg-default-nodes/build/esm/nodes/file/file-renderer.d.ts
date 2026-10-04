import type { ExportDOMOptions } from '../../export-dom.js';
interface FileNodeData {
    src: string;
    fileTitle: string;
    fileCaption: string;
    fileName: string;
    fileSize: number;
    formattedFileSize: string;
}
interface RenderOptions extends ExportDOMOptions {
}
export declare function renderFileNode(node: FileNodeData, options?: RenderOptions): {
    element: HTMLDivElement;
    type: 'outer';
} | import("../../utils/render-empty-container.js").EmptyContainerOutput;
export {};
//# sourceMappingURL=file-renderer.d.ts.map