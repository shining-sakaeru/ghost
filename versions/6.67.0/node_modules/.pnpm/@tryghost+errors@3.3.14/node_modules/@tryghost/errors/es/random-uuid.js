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
export {
  randomUUID
};
