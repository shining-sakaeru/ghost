export interface RedirectConfig {
    from: string;
    /** Capture groups from `from` can be referenced as `$1`, `$2`, etc. */
    to: string;
    /** `true` → HTTP 301, otherwise HTTP 302. */
    permanent?: boolean;
}
/**
 * Concurrent `replaceAll` calls have no ordering guarantee — serialize
 * externally if that matters.
 */
export interface RedirectsStore {
    getAll(): Promise<RedirectConfig[]>;
    replaceAll(redirects: RedirectConfig[]): Promise<void>;
}
export declare abstract class RedirectsStoreBase implements RedirectsStore {
    readonly requiredFns: readonly ['getAll', 'replaceAll'];
    constructor();
    abstract getAll(): Promise<RedirectConfig[]>;
    abstract replaceAll(redirects: RedirectConfig[]): Promise<void>;
}
//# sourceMappingURL=base.d.ts.map