"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = hbs;
const handlebars_1 = __importDefault(require("handlebars"));
function hbs(literals, ...values) {
    // interweave strings with substitutions
    let output = '';
    for (let i = 0; i < values.length; i++) {
        output += literals[i] + String(values[i]);
    }
    output += literals[values.length];
    // return compiled handlebars template
    return handlebars_1.default.compile(output);
}
