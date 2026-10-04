/**
 * The kinds of tokens that an [RFC 5322](https://datatracker.ietf.org/doc/html/rfc5322#section-3.4)
 * address list is built from. Whitespace and comments are not tokens: the tokenizer drops them and
 * records their presence in {@link AddressListToken.isSpaced}.
 */
export declare enum AddressListTokenType {
    /** An `atom` run or a `quoted-string`. */
    Word = "word",
    /** A bracketed `domain-literal`, such as `[192.0.2.10]`. */
    DomainLiteral = "domain-literal",
    /** One of the `specials` characters that give an address list its structure. */
    Special = "special"
}
/** A single token produced by {@link tokenizeAddressList}. */
export type AddressListToken = {
    type: AddressListTokenType;
    /** The token exactly as it appeared in the header, with any quoting retained. */
    raw: string;
    /** The token's value with quoting removed and whitespace collapsed, suitable for display. */
    text: string;
    /**
     * Whether whitespace or a comment separated this token from the preceding one. An address's
     * `local-part` is a run of tokens with no separation between them, so this is what keeps `Jane
     * Doe <jane@example.org>` from reading as an address named `Doe`.
     */
    isSpaced: boolean;
};
/**
 * Splits an RFC 5322 address list header value into tokens, discarding whitespace and comments.
 *
 * This is a single linear pass. Unlike the ambiguous RFC 5322 ABNF, it cannot fan out into a forest
 * of candidate parses, so header length alone bounds its cost.
 */
export declare function tokenizeAddressList(headerValue: string): AddressListToken[];
