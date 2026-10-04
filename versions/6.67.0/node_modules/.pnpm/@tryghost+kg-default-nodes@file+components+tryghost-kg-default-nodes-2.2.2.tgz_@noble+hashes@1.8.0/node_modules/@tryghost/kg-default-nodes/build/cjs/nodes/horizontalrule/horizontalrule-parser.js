"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHorizontalRuleNode = parseHorizontalRuleNode;
function parseHorizontalRuleNode(HorizontalRuleNode) {
    return {
        hr: () => ({
            conversion() {
                const node = new HorizontalRuleNode();
                return { node };
            },
            priority: 0
        })
    };
}
