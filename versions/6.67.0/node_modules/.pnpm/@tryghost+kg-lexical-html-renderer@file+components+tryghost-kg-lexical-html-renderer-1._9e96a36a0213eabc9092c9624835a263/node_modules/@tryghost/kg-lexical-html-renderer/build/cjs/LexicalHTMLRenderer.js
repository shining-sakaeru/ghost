"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const headless_1 = require("@lexical/headless");
const list_1 = require("@lexical/list");
const rich_text_1 = require("@lexical/rich-text");
const link_1 = require("@lexical/link");
const convert_to_html_string_js_1 = __importDefault(require("./convert-to-html-string.js"));
const get_dynamic_data_nodes_js_1 = __importDefault(require("./get-dynamic-data-nodes.js"));
const kg_default_transforms_1 = require("@tryghost/kg-default-transforms");
function defaultOnError(error) {
    void error;
    // do nothing
}
class LexicalHTMLRenderer {
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
            rich_text_1.HeadingNode,
            list_1.ListNode,
            list_1.ListItemNode,
            rich_text_1.QuoteNode,
            link_1.LinkNode,
            ...this.nodes
        ];
        const editor = (0, headless_1.createHeadlessEditor)({
            nodes: DEFAULT_NODES,
            onError: this.onError
        });
        const editorState = editor.parseEditorState(lexicalState);
        // gather nodes that require dynamic data
        const dynamicDataNodes = (0, get_dynamic_data_nodes_js_1.default)(editorState);
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
        (0, kg_default_transforms_1.registerRemoveAtLinkNodesTransform)(editor);
        // render
        let html = '';
        editor.update(async () => {
            html = (0, convert_to_html_string_js_1.default)(editor, options);
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
exports.default = LexicalHTMLRenderer;
