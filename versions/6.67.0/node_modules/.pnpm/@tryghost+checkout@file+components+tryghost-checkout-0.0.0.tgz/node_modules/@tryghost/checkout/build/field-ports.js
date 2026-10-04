/**
 * What Stripe Checkout will render, measured against the live API at Ghost's pinned
 * version rather than read from the reference — which disagreed with the API in three of
 * five probes, missing the field cap and the key format entirely. A wrong bound here fails
 * the session create, which fails the checkout.
 */
/** The names Stripe returns values under, and the only ports a binding for it may use. */
export const STRIPE_PORTS = ['shipping_name', 'shipping_address', 'phone'];
export function isStripePort(key) {
    return STRIPE_PORTS.includes(key);
}
export const STRIPE_PORT = {
    shippingName: 'shipping_name',
    shippingAddress: 'shipping_address',
    phone: 'phone',
};
/** Stripe rejects a fourth. */
export const MAX_CHECKOUT_CUSTOM_FIELDS = 3;
/** Stripe caps a custom label at 50, where a field name may be 191 — hence a question label. */
export const MAX_CHECKOUT_LABEL_LENGTH = 50;
/**
 * What Stripe Checkout can ask for. No `long_text`: its text input caps shorter than that
 * type allows. No `address`: Stripe has no custom-field equivalent, so an address is
 * collected through its own parameter instead.
 */
export const CHECKOUT_ELIGIBLE_FIELD_TYPES = ['short_text'];
export function isCheckoutEligible(type) {
    return CHECKOUT_ELIGIBLE_FIELD_TYPES.includes(type);
}
//# sourceMappingURL=field-ports.js.map