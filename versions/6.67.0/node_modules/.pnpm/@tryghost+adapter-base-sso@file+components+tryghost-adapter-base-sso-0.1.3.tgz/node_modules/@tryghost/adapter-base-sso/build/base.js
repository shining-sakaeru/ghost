import errors from '@tryghost/errors';
export class SSOBase {
    #userRepository = null;
    constructor() {
        Object.defineProperty(this, 'requiredFns', {
            value: Object.freeze([
                'getRequestCredentials',
                'getIdentityFromCredentials',
                'getUserForIdentity',
            ]),
            writable: false,
        });
    }
    /**
     * Inject the user repository. Ghost core calls this after constructing the
     * adapter, supplying an implementation backed by the User model. Adapter
     * implementations should not call this themselves.
     */
    setUserRepository(userRepository) {
        this.#userRepository = userRepository;
    }
    get #users() {
        if (!this.#userRepository) {
            throw new errors.IncorrectUsageError({
                message: 'SSO adapter has no user repository configured. Ghost must call setUserRepository() before the adapter is used.',
            });
        }
        return this.#userRepository;
    }
    /**
     * Look up a single user by email. Available to adapter implementations so
     * they can resolve users without depending on Ghost's model layer.
     */
    async getUserByEmail(email) {
        return this.#users.getByEmail(email);
    }
    /**
     * Look up the site owner user. Available to adapter implementations so they
     * can resolve the owner without depending on Ghost's model layer.
     */
    async getOwnerUser() {
        return this.#users.getOwner();
    }
}
//# sourceMappingURL=base.js.map