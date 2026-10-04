"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorizontalRuleNode = void 0;
exports.$createHorizontalRuleNode = $createHorizontalRuleNode;
exports.$isHorizontalRuleNode = $isHorizontalRuleNode;
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const horizontalrule_renderer_js_1 = require("./horizontalrule-renderer.js");
const horizontalrule_parser_js_1 = require("./horizontalrule-parser.js");
class HorizontalRuleNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'horizontalrule',
    defaultRenderFn: horizontalrule_renderer_js_1.renderHorizontalRuleNode
}) {
    static importDOM() {
        return (0, horizontalrule_parser_js_1.parseHorizontalRuleNode)(this);
    }
    getTextContent() {
        return '---\n\n';
    }
    hasEditMode() {
        return false;
    }
}
exports.HorizontalRuleNode = HorizontalRuleNode;
function $createHorizontalRuleNode() {
    return new HorizontalRuleNode();
}
function $isHorizontalRuleNode(node) {
    return node instanceof HorizontalRuleNode;
}
