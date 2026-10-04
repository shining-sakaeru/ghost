import { generateDecoratorNode } from '../../generate-decorator-node.js';
import { parseCodeBlockNode } from './codeblock-parser.js';
import { renderCodeBlockNode } from './codeblock-renderer.js';
const codeBlockProperties = {
    code: { default: '', wordCount: true },
    language: { default: '' },
    caption: { default: '', urlType: 'html', wordCount: true }
};
export class CodeBlockNode extends generateDecoratorNode({
    nodeType: 'codeblock',
    properties: codeBlockProperties,
    defaultRenderFn: renderCodeBlockNode
}) {
    static importDOM() {
        return parseCodeBlockNode(this);
    }
    isEmpty() {
        return !this.__code;
    }
}
export function $createCodeBlockNode(dataset = {}) {
    return new CodeBlockNode(dataset);
}
export function $isCodeBlockNode(node) {
    return node instanceof CodeBlockNode;
}
//# sourceMappingURL=CodeBlockNode.js.map