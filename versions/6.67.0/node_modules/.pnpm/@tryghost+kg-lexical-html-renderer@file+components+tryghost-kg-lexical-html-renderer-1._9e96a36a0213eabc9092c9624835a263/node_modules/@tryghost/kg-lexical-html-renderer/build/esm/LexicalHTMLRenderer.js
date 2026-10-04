import { createHeadlessEditor } from '@lexical/headless';
import { ListItemNode, ListNode } from '@lexical/list';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { LinkNode } from '@lexical/link';
import $convertToHtmlString from './convert-to-html-string.js';
import getDynamicDataNodes from './get-dynamic-data-nodes.js';
import { registerRemoveAtLinkNodesTransform } from '@tryghost/kg-default-transforms';
function defaultOnError(error) {
    void error;
    // do nothing
}
export default class LexicalHTMLRenderer {
    dom;
    nodes;
    onError;
    constructor({ dom, nodes, onError } = {}) {
        this.dom = dom;
        this.nodes = nodes || [];
        this.onError = onError || defaultOnError;
    }
    async render(lexicalState, userOptions = {}) {
        const defaultOptions = {
            target: 'html',
            dom: await this._getDefaultDom(userOptions.dom)
        };
        const options = Object.assign({}, defaultOptions, userOptions);
        const DEFAULT_NODES = [
            HeadingNode,
            ListNode,
            ListItemNode,
            QuoteNode,
            LinkNode,
            ...this.nodes
        ];
        const editor = createHeadlessEditor({
            nodes: DEFAULT_NODES,
            onError: this.onError
        });
        const editorState = editor.parseEditorState(lexicalState);
        // gather nodes that require dynamic data
        const dynamicDataNodes = getDynamicDataNodes(editorState);
        // fetch dynamic data
        const renderData = new Map();
        await Promise.all(dynamicDataNodes.map(async (node) => {
            if (!node.getDynamicData) {
                return;
            }
            const { key, data } = await node.getDynamicData(options);
            renderData.set(key, data);
        }));
        options.renderData = renderData;
        // set up editor with our state
        editor.setEditorState(editorState);
        // register transforms that clean up state for rendering
        registerRemoveAtLinkNodesTransform(editor);
        // render
        let html = '';
        editor.update(async () => {
            html = $convertToHtmlString(editor, options);
        });
        return html;
    }
    async _getDefaultDom(dom) {
        if (dom) {
            return dom;
        }
        if (this.dom) {
            return this.dom;
        }
        // JSDOM default is a Node-side convenience. Consumers in browser
        // environments can pass any {window: {document}}-shaped object.
        const { JSDOM } = await import('jsdom');
        this.dom = new JSDOM();
        return this.dom;
    }
}
//# sourceMappingURL=LexicalHTMLRenderer.js.map