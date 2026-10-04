"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const members_metafields_1 = require("../../services/members-metafields");
const tier_checkout_config_1 = require("../../services/tier-checkout-config");
const tiersService = require('../../services/tiers');
/**
 * Reads one tier's checkout settings for the API to return.
 *
 * The service answers with null when nobody has ever set up checkout for the tier, because
 * there is genuinely nothing stored for it. The API still answers with a resource: the tier
 * itself exists, so a client asking what it collects should be told "nothing" in the same
 * shape as any other answer, rather than getting a 404 or an empty body to puzzle over.
 */
async function forTier(id) {
    return (await tiersService.checkout.read(id)) ?? (0, tier_checkout_config_1.emptyCheckoutConfig)(id);
}
/**
 * A tier's checkout configuration, as a sub-resource of the tier rather than an attribute
 * of it.
 *
 * The tier resource is generally available and this concept is not, so putting it on the
 * tier payload would add a key to every tier response on every site whether or not the
 * feature is on. A route of its own can carry the flag, and be removed with it.
 *
 * Every operation here is one call. A tier's configuration is one shape the service hands
 * out and takes back, and that it spans tables, that destinations are site-wide, and that a
 * binding exists at all are facts about the inside of that domain.
 */
const controller = {
    docName: 'tiers_checkout_config',
    browse: {
        headers: { cacheInvalidate: false },
        permissions: { docName: 'products', method: 'browse' },
        query() {
            return tiersService.checkout.browse();
        },
    },
    read: {
        headers: { cacheInvalidate: false },
        options: ['id'],
        validation: { options: { id: { required: true } } },
        permissions: { docName: 'products', method: 'read' },
        async query(frame) {
            return [await forTier(frame.options.id)];
        },
    },
    edit: {
        headers: { cacheInvalidate: true },
        options: ['id'],
        validation: { options: { id: { required: true } } },
        permissions: { docName: 'products', method: 'edit' },
        async query(frame) {
            await tiersService.checkout.edit((0, members_metafields_1.actingContext)(frame.options.context), frame.options.id, frame.data.tiers_checkout_config?.[0] ?? {});
            return [await forTier(frame.options.id)];
        },
    },
};
// module.exports (not export): the API framework loads controllers via require().
module.exports = controller;
