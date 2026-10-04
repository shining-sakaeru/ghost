import { type Limit } from './limits.ts';
import type { CheckOptions, ErrorsModule, LoadLimitsOptions } from './types.ts';
export declare class LimitService {
    limits: Record<string, Limit>;
    errors: ErrorsModule;
    constructor();
    /** Initializes the limits based on configuration */
    loadLimits({ limits, subscription, helpLink, db, errors: errorsModule }: LoadLimitsOptions): void;
    isLimited(limitName: string): boolean;
    /**
     * Check if a limit is disabled, applicable only to limits that support the disabled flag
     * (e.g. FlagLimit). Undefined if the limit is not configured.
     */
    isDisabled(limitName: string): boolean | undefined;
    checkIsOverLimit(limitName: string, options?: CheckOptions): Promise<boolean | undefined>;
    checkWouldGoOverLimit(limitName: string, options?: CheckOptions): Promise<boolean | undefined>;
    errorIfIsOverLimit(limitName: string, options?: CheckOptions): Promise<void>;
    errorIfWouldGoOverLimit(limitName: string, options?: CheckOptions): Promise<void>;
    /** Checks if any of the configured limits acceded */
    checkIfAnyOverLimit(options?: CheckOptions): Promise<boolean>;
}
export default LimitService;
//# sourceMappingURL=limit-service.d.ts.map