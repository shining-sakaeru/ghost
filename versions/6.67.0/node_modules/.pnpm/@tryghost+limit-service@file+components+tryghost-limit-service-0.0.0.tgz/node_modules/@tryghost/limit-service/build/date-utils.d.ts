import type { Interval } from './types.ts';
export declare const SUPPORTED_INTERVALS: readonly Interval[];
/**
 * Calculates the start of the last period (billing, cycle, etc.) based on the start date
 * and the interval at which the cycle renews.
 *
 * @param startDate - date in ISO 8601 format
 * @param interval - currently only supports 'month', in the future might support 'year', etc.
 * @returns date in ISO 8601 format of the last period start
 */
export declare const lastPeriodStart: (startDate: string, interval: Interval) => string;
//# sourceMappingURL=date-utils.d.ts.map