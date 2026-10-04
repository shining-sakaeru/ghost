"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var random_uuid_exports = {};
__export(random_uuid_exports, {
  randomUUID: () => randomUUID
});
module.exports = __toCommonJS(random_uuid_exports);
const globalCrypto = globalThis.crypto;
const hex = [];
for (let i = 0; i < 256; i += 1) {
  hex.push((i + 256).toString(16).slice(1));
}
function uuidFromGetRandomValues() {
  const bytes = new Uint8Array(16);
  globalCrypto.getRandomValues(bytes);
  bytes[6] = bytes[6] & 15 | 64;
  bytes[8] = bytes[8] & 63 | 128;
  return hex[bytes[0]] + hex[bytes[1]] + hex[bytes[2]] + hex[bytes[3]] + "-" + hex[bytes[4]] + hex[bytes[5]] + "-" + hex[bytes[6]] + hex[bytes[7]] + "-" + hex[bytes[8]] + hex[bytes[9]] + "-" + hex[bytes[10]] + hex[bytes[11]] + hex[bytes[12]] + hex[bytes[13]] + hex[bytes[14]] + hex[bytes[15]];
}
function randomUUID() {
  if (globalCrypto?.randomUUID) {
    return globalCrypto.randomUUID();
  }
  if (globalCrypto?.getRandomValues) {
    return uuidFromGetRandomValues();
  }
  throw new Error("No secure random number generator available to generate a UUID");
}
