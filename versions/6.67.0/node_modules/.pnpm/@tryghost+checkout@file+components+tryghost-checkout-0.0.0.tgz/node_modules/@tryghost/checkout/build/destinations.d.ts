/**
 * What a port supplies, and what to call a field made to hold it. The type is a rule about
 * any destination: a port that returns an address can only be collected into a field that
 * keeps one. The name is used only when the request names a key the site does not keep
 * yet, which is the one moment a publisher has not chosen a label themselves.
 *
 * A key is not a port. `phone` is what Stripe calls what it returns; where it lands is
 * whatever the request said, and `Shipping Phone` is only how that field is listed.
 */
export declare const PORT_FIELD: {
    readonly shipping_name: {
        readonly key: 'shipping_name';
        readonly name: 'Shipping Name';
        readonly type: 'short_text';
    };
    readonly shipping_address: {
        readonly key: 'shipping_address';
        readonly name: 'Shipping Address';
        readonly type: 'address';
    };
    readonly phone: {
        readonly key: 'shipping_phone';
        readonly name: 'Shipping Phone';
        readonly type: 'short_text';
    };
};
//# sourceMappingURL=destinations.d.ts.map