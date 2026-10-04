/**
 * Base class for cache adapters.
 *
 * Concrete adapters extend this class and implement the methods listed in
 * `requiredFns`: `get`, `set` and `reset`.
 */
export class CacheBase {
    constructor() {
        Object.defineProperty(this, 'requiredFns', {
            value: Object.freeze(['get', 'set', 'reset', 'keys']),
            writable: false,
        });
    }
}
//# sourceMappingURL=base.js.map