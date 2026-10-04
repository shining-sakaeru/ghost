"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.$isTransistorNode = exports.$createTransistorNode = exports.TransistorNode = void 0;
const cloneDeep_js_1 = __importDefault(require("lodash/cloneDeep.js"));
const generate_decorator_node_js_1 = require("../../generate-decorator-node.js");
const transistor_renderer_js_1 = require("./transistor-renderer.js");
const visibility_js_1 = require("../../utils/visibility.js");
// Default visibility for Transistor: members only (no public visitors)
// since the embed requires a member UUID to function
const TRANSISTOR_DEFAULT_VISIBILITY = {
    web: {
        nonMember: false, // Hide from public visitors - requires member UUID
        memberSegment: visibility_js_1.ALL_MEMBERS_SEGMENT // Show to all members (free + paid)
    },
    email: {
        memberSegment: visibility_js_1.ALL_MEMBERS_SEGMENT
    }
};
const transistorProperties = {
    accentColor: { default: '' },
    backgroundColor: { default: '' }
};
class TransistorNode extends (0, generate_decorator_node_js_1.generateDecoratorNode)({
    nodeType: 'transistor',
    hasVisibility: true,
    properties: transistorProperties,
    defaultRenderFn: transistor_renderer_js_1.renderTransistorNode
}) {
    constructor(data = {}, key) {
        super(data, key);
        if (!data.visibility) {
            this.__visibility = (0, cloneDeep_js_1.default)(TRANSISTOR_DEFAULT_VISIBILITY);
        }
    }
    static getPropertyDefaults() {
        const defaults = super.getPropertyDefaults();
        defaults.visibility = (0, cloneDeep_js_1.default)(TRANSISTOR_DEFAULT_VISIBILITY);
        return defaults;
    }
    isEmpty() {
        return false; // Transistor card is never empty as it has a fixed URL
    }
    hasEditMode() {
        return true;
    }
}
exports.TransistorNode = TransistorNode;
const $createTransistorNode = (dataset) => {
    return new TransistorNode(dataset);
};
exports.$createTransistorNode = $createTransistorNode;
const $isTransistorNode = (node) => {
    return node instanceof TransistorNode;
};
exports.$isTransistorNode = $isTransistorNode;
