/**
 * What Stripe Checkout will render, measured against the live API at Ghost's pinned
 * version rather than read from the reference — which disagreed with the API in three of
 * five probes, missing the field cap and the key format entirely. A wrong bound here fails
 * the session create, which fails the checkout.
 */
/** The names Stripe returns values under, and the only ports a binding for it may use. */
export declare const STRIPE_PORTS: readonly ['shipping_name', 'shipping_address', 'phone'];
export type StripePort = (typeof STRIPE_PORTS)[number];
export declare function isStripePort(key: string): key is StripePort;
export declare const STRIPE_PORT: {
    readonly shippingName: 'shipping_name';
    readonly shippingAddress: 'shipping_address';
    readonly phone: 'phone';
};
/** Stripe rejects a fourth. */
export declare const MAX_CHECKOUT_CUSTOM_FIELDS = 3;
/** Stripe caps a custom label at 50, where a field name may be 191 — hence a question label. */
export declare const MAX_CHECKOUT_LABEL_LENGTH = 50;
/**
 * What Stripe Checkout can ask for. No `long_text`: its text input caps shorter than that
 * type allows. No `address`: Stripe has no custom-field equivalent, so an address is
 * collected through its own parameter instead.
 */
export declare const CHECKOUT_ELIGIBLE_FIELD_TYPES: readonly ['short_text'];
export type CheckoutEligibleFieldType = (typeof CHECKOUT_ELIGIBLE_FIELD_TYPES)[number];
export declare function isCheckoutEligible(type: string): type is CheckoutEligibleFieldType;
//# sourceMappingURL=field-ports.d.ts.map