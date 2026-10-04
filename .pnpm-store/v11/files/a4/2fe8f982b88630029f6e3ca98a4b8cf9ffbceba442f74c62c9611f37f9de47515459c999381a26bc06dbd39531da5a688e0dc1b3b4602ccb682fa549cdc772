import errors from '@tryghost/errors';
import camelCase from 'lodash/camelCase.js';
import has from 'lodash/has.js';
import config from './config.js';
import { AllowlistLimit, FlagLimit, MaxLimit, MaxPeriodicLimit } from './limits.js';
const messages = {
    missingErrorsConfig: `Config Missing: 'errors' is required.`,
    noSubscriptionParameter: 'Attempted to setup a periodic max limit without a subscription',
};
export class LimitService {
    limits;
    errors;
    constructor() {
        this.limits = {};
    }
    /** Initializes the limits based on configuration */
    loadLimits({ limits = {}, subscription, helpLink, db, errors: errorsModule }) {
        if (!errorsModule) {
            throw new errors.IncorrectUsageError({
                message: messages.missingErrorsConfig,
            });
        }
        this.errors = errorsModule;
        // CASE: reset internal limits state in case load is called multiple times
        this.limits = {};
        Object.keys(limits).forEach((rawName) => {
            const name = camelCase(rawName);
            // NOTE: config module acts as an allowlist of supported config names, where each key
            // is a name of supported config
            if (config[name]) {
                // The camelCased name, as the original did, not the key the host actually wrote.
                // A name spelled another way therefore finds no settings and the limit is built
                // empty, which is why such a limit ends up not limiting anything. Preserved: it is
                // behaviour, and the pins record it.
                const limitConfig = Object.assign({}, config[name], limits[name]);
                if (has(limitConfig, 'allowlist')) {
                    this.limits[name] = new AllowlistLimit({
                        name,
                        config: limitConfig,
                        helpLink,
                        errors: errorsModule,
                    });
                }
                else if (has(limitConfig, 'max')) {
                    this.limits[name] = new MaxLimit({
                        name,
                        config: limitConfig,
                        helpLink,
                        db,
                        errors: errorsModule,
                    });
                }
                else if (has(limitConfig, 'maxPeriodic')) {
                    if (subscription === undefined) {
                        throw new errors.IncorrectUsageError({
                            message: messages.noSubscriptionParameter,
                        });
                    }
                    const maxPeriodicLimitConfig = Object.assign({}, limitConfig, subscription);
                    this.limits[name] = new MaxPeriodicLimit({
                        name,
                        config: maxPeriodicLimitConfig,
                        helpLink,
                        db,
                        errors: errorsModule,
                    });
                }
                else {
                    this.limits[name] = new FlagLimit({
                        name,
                        config: limitConfig,
                        helpLink,
                        errors: errorsModule,
                    });
                }
            }
        });
    }
    isLimited(limitName) {
        return !!this.limits[camelCase(limitName)];
    }
    /**
     * Check if a limit is disabled, applicable only to limits that support the disabled flag
     * (e.g. FlagLimit). Undefined if the limit is not configured.
     */
    isDisabled(limitName) {
        // The same lookup isLimited makes, kept as one read so the limit is narrowed by it.
        const limit = this.limits[camelCase(limitName)];
        if (!limit) {
            return;
        }
        if (typeof limit.isDisabled !== 'function') {
            throw new errors.IncorrectUsageError({
                message: `Limit ${limitName} does not support .isDisabled()`,
            });
        }
        return limit.isDisabled();
    }
    async checkIsOverLimit(limitName, options = {}) {
        if (!this.isLimited(limitName)) {
            return;
        }
        try {
            // Deliberately not camelCased, where the guard above is. A name that only matches
            // after camelCasing passes the guard and then finds nothing here, and throws. Left as
            // it is: changing it changes behaviour, which is not this commit's business.
            await this.limits[limitName].errorIfIsOverLimit(options);
            return false;
        }
        catch (error) {
            if (error instanceof this.errors.HostLimitError) {
                return true;
            }
            throw error;
        }
    }
    async checkWouldGoOverLimit(limitName, options = {}) {
        if (!this.isLimited(limitName)) {
            return;
        }
        try {
            // Deliberately not camelCased, where the guard above is. A name that only matches
            // after camelCasing passes the guard and then finds nothing here, and throws. Left as
            // it is: changing it changes behaviour, which is not this commit's business.
            await this.limits[limitName].errorIfWouldGoOverLimit(options);
            return false;
        }
        catch (error) {
            if (error instanceof this.errors.HostLimitError) {
                return true;
            }
            throw error;
        }
    }
    async errorIfIsOverLimit(limitName, options = {}) {
        if (!this.isLimited(limitName)) {
            return;
        }
        // Deliberately not camelCased, where the guard above is. A name that only matches
        // after camelCasing passes the guard and then finds nothing here, and throws. Left as
        // it is: changing it changes behaviour, which is not this commit's business.
        await this.limits[limitName].errorIfIsOverLimit(options);
    }
    async errorIfWouldGoOverLimit(limitName, options = {}) {
        if (!this.isLimited(limitName)) {
            return;
        }
        // Deliberately not camelCased, where the guard above is. A name that only matches
        // after camelCasing passes the guard and then finds nothing here, and throws. Left as
        // it is: changing it changes behaviour, which is not this commit's business.
        await this.limits[limitName].errorIfWouldGoOverLimit(options);
    }
    /** Checks if any of the configured limits acceded */
    async checkIfAnyOverLimit(options = {}) {
        for (const limit in this.limits) {
            if (await this.checkIsOverLimit(limit, options)) {
                return true;
            }
        }
        return false;
    }
}
export default LimitService;
//# sourceMappingURL=limit-service.js.map