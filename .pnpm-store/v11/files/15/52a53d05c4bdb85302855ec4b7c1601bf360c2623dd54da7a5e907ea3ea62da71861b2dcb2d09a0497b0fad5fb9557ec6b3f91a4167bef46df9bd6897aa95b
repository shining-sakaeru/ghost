import { type ParsedEmailAddress } from './parse-email-address.js';
/** A single mailbox read out of an RFC 5322 address list header. */
export type ParsedHeaderEmailAddress = ParsedEmailAddress & {
    /**
     * The display name that preceded the address, with quoting and comments removed, or `undefined`
     * when the address had none.
     */
    displayName: string | undefined;
    /** The name of the RFC 5322 `group` the address appeared in, if it appeared in one. */
    groupName: string | undefined;
    /**
     * The address as {@link normalizeEmailAddress} produces it, for string comparisons. This is
     * `undefined` when the address is not a valid RFC 5321 mailbox, which a header may legitimately
     * contain: `root@localhost` is a well-formed RFC 5322 address but has no fully qualified
     * domain.
     *
     * Compare addresses through this property rather than through `full`, which preserves whatever
     * casing and quoting the sender used. Note that a `quoted-string` `local-part` may itself
     * contain an `@`, so read a receiving domain from the _last_ `@` rather than the first.
     */
    normalized: string | undefined;
};
/**
 * The longest header value that {@link parseEmailAddressList} will read. RFC 5322 sets no limit on
 * the length of a folded address list header, so this exists only to bound the work done on hostile
 * input; it is far above any legitimate header.
 */
export declare const maxAddressListLength = 65536;
/**
 * Parse an [RFC 5322](https://datatracker.ietf.org/doc/html/rfc5322#section-3.4) address list
 * header value (`To`, `Cc`, `Bcc`, `From`, `Reply-To`, and friends) into its mailboxes.
 *
 * Unlike `parseEmailAddress`, which implements the strict RFC 5321 envelope grammar, this accepts
 * everything a message header may carry: display names, quoted strings, nested comments, folding
 * whitespace, groups, domain literals, obsolete source routes, and multiple addresses. Malformed
 * entries are dropped rather than throwing, so a single broken address never costs you the rest of
 * the header.
 *
 * A display name or a group name is never reported as an address. `billing@example.com Jane
 * <attacker@example.org>` reads as one address, `attacker@example.org`, because only the angle-addr
 * names a real recipient, and `billing@example.com: victim@example.org;` reads as one address in a
 * group. Code that decides where mail goes must rely on this rather than on searching the header
 * for text that looks like an address.
 *
 * @example
 *
 * ```ts
 * import {parseEmailAddressList} from 'parse-email-address';
 *
 * const result = parseEmailAddressList('Jane Doe <jane@example.org>, john@example.org');
 * // result is two entries, the first with `displayName: 'Jane Doe'`
 *
 * parseEmailAddressList('undisclosed-recipients:;'); // returns `[]`
 * ```
 *
 * @throws Nothing, this will never throw an error.
 */
export declare function parseEmailAddressList(headerValue: string | undefined): ParsedHeaderEmailAddress[];
/**
 * Parse a header value that should hold exactly one mailbox, such as `From` or `Sender`. Unlike
 * `parseEmailAddress` this accepts a display name, and unlike {@link parseEmailAddressList} it
 * refuses to guess when the value holds more than one address.
 *
 * @example
 *
 * ```ts
 * import {parseHeaderEmailAddress} from 'parse-email-address';
 *
 * parseHeaderEmailAddress('Jane Doe <jane@example.org>'); // returns the parsed mailbox
 * parseHeaderEmailAddress('jane@example.org, john@example.org'); // returns `undefined`
 * ```
 *
 * @returns `undefined` unless the given value holds exactly one address.
 * @throws Nothing, this will never throw an error.
 */
export declare function parseHeaderEmailAddress(headerValue: string | undefined): ParsedHeaderEmailAddress | undefined;
