import type { CheckOptions, Count, CurrentCountQuery, Db, ErrorsModule, Formatter, GhostErrorOptions, Interval, LimitConfig } from './types.ts';
interface LimitDeps {
    name: string;
    config: LimitConfig;
    helpLink?: string;
    db?: Db;
    errors: ErrorsModule;
}
export declare abstract class Limit {
    name: string;
    error: string;
    helpLink?: string;
    db?: Db;
    errors: ErrorsModule;
    constructor({ name, error, helpLink, db, errors, }: {
        name: string;
        error: string;
        helpLink?: string;
        db?: Db;
        errors: ErrorsModule;
    });
    abstract errorIfWouldGoOverLimit(options?: CheckOptions): Promise<void>;
    abstract errorIfIsOverLimit(options?: CheckOptions): Promise<void>;
    /** Only the flag limits answer this, and the service checks before calling it. */
    isDisabled?(): boolean;
    generateError(_count?: Count): GhostErrorOptions | Error;
}
export declare class MaxLimit extends Limit {
    currentCountQueryFn: CurrentCountQuery;
    max: number;
    formatter?: Formatter;
    fallbackMessage: string;
    constructor({ name, config, helpLink, db, errors }: LimitDeps);
    generateError(count: Count): Error;
    currentCountQuery(options?: CheckOptions): Promise<Count>;
    errorIfWouldGoOverLimit(options?: CheckOptions): Promise<void>;
    errorIfIsOverLimit(options?: CheckOptions): Promise<void>;
}
export declare class MaxPeriodicLimit extends Limit {
    currentCountQueryFn: CurrentCountQuery;
    maxPeriodic: number;
    interval: Interval;
    startDate: string;
    fallbackMessage: string;
    constructor({ name, config, helpLink, db, errors }: LimitDeps);
    generateError(count: Count): Error;
    currentCountQuery(options?: CheckOptions): Promise<Count>;
    errorIfWouldGoOverLimit(options?: CheckOptions): Promise<void>;
    errorIfIsOverLimit(options?: CheckOptions): Promise<void>;
}
export declare class FlagLimit extends Limit {
    disabled?: boolean;
    fallbackMessage: string;
    constructor({ name, config, helpLink, db, errors }: LimitDeps);
    generateError(): Error;
    /** Flag limits are on/off so using a feature is always over the limit */
    errorIfWouldGoOverLimit(_options?: CheckOptions): Promise<void>;
    /**
     * Flag limits are on/off. They don't necessarily mean the limit wasn't possible to reach
     * NOTE: this method should not be relied on as it's impossible to check the limit was surpassed!
     */
    errorIfIsOverLimit(_options?: CheckOptions): Promise<void>;
    isDisabled(): boolean;
}
export declare class AllowlistLimit extends Limit {
    allowlist: string[];
    fallbackMessage: string;
    constructor({ name, config, helpLink, errors }: LimitDeps);
    generateError(): Error;
    errorIfWouldGoOverLimit(metadata?: CheckOptions): Promise<void>;
    errorIfIsOverLimit(metadata?: CheckOptions): Promise<void>;
}
export {};
//# sourceMappingURL=limits.d.ts.map