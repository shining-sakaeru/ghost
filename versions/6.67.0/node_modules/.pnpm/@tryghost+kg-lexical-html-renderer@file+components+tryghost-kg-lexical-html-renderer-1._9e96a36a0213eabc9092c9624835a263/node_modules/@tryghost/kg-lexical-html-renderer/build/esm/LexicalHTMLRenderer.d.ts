import type { SerializedEditorState, LexicalNode, Klass } from 'lexical';
import type { ExportDOMDom } from '@tryghost/kg-default-nodes';
interface RenderOptions {
    target?: 'html' | 'email' | 'plaintext';
    dom?: ExportDOMDom;
    renderData?: Map<number, unknown>;
}
export default class LexicalHTMLRenderer {
    dom?: ExportDOMDom;
    nodes: Klass<LexicalNode>[];
    onError: (error: Error) => void;
    constructor({ dom, nodes, onError }?: {
        dom?: ExportDOMDom;
        nodes?: Klass<LexicalNode>[];
        onError?: (error: Error) => void;
    });
    render(lexicalState: SerializedEditorState | string, userOptions?: RenderOptions): Promise<string>;
    private _getDefaultDom;
}
export {};
//# sourceMappingURL=LexicalHTMLRenderer.d.ts.map