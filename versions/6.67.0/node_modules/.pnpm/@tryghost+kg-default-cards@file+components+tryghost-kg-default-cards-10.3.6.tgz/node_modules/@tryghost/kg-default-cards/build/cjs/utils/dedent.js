"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dedent;
function dedent(str) {
    const lines = str.split(/\n/);
    return lines
        .map((line) => line.replace(/^\s+/gm, ''))
        .join('')
        .trim();
}
