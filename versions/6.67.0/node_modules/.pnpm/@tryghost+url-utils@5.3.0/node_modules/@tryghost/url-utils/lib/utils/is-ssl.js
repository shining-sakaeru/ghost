"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// require the whatwg compatible URL library (same behaviour in node and browser)
const url_1 = require("url");
function isSSL(urlToParse) {
    const { protocol } = new url_1.URL(urlToParse);
    return protocol === 'https:';
}
exports.default = isSSL;
