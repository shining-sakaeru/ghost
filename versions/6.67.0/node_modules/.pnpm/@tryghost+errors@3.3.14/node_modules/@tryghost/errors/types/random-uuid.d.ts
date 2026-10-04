/**
 * Isomorphic UUID v4 generator.
 *
 * Uses the global Web Crypto API rather than importing Node's `crypto` module,
 * so this package can be bundled for the browser (e.g. Ghost's Ember admin)
 * without pulling in Node built-ins.
 *
 * - Prefers `crypto.randomUUID()`, available in Node 19+ and in browsers, but
 *   only in secure contexts (HTTPS/localhost).
 * - Falls back to building a v4 UUID from `crypto.getRandomValues()`, which is
 *   available even in insecure contexts.
 */
export declare function randomUUID(): string;
//# sourceMappingURL=random-uuid.d.ts.map