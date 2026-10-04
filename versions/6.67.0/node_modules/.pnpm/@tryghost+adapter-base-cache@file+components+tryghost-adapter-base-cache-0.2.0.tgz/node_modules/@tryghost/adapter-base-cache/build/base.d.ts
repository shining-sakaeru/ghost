/**
 * Base class for cache adapters.
 *
 * Concrete adapters extend this class and implement the methods listed in
 * `requiredFns`: `get`, `set` and `reset`.
 */
export declare abstract class CacheBase {
    readonly requiredFns: readonly ['get', 'set', 'reset', 'keys'];
    constructor();
    /** Retrieve the value stored under the given key. */
    abstract get(key: string): unknown | Promise<unknown>;
    /** Store a value under the given key. */
    abstract set(key: string, value: unknown): unknown | Promise<unknown>;
    /** Clear the entire cache. */
    abstract reset(): void | Promise<void>;
    /**
     * Retrieve all keys in the cache.
     * @deprecated This method is deprecated and may be removed in future versions.
     */
    abstract keys(): string[] | Promise<string[]>;
}
//# sourceMappingURL=base.d.ts.map