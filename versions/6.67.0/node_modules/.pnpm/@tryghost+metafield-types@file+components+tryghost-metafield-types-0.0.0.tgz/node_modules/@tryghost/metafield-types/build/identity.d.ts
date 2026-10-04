/**
 * How a field is named on every surface that writes its name down as text: CSV column
 * headers, filter values, error paths, URLs.
 *
 * The name is the namespace that declared the field and the field's key, joined by a
 * dot — `custom.company`. A value made of several parts, such as an address, appends
 * the part: `custom.shipping_address.country`. Splitting on dots by position is safe
 * because a key can never contain one; that is enforced where keys are minted.
 *
 * `metafields` is the qualifier, not part of the identity: it names the container, and
 * each context writes it exactly once — the payload key, the route prefix, the CSV
 * column prefix, the filter relation alias — never twice.
 */
export declare const QUALIFIER = "metafields";
export declare const SEPARATOR = ".";
/**
 * The namespace holding the fields a site's own staff define.
 *
 * It is a constant only because the table storing these fields has no namespace
 * column: it holds this namespace's fields and nothing else, so the query layer has
 * to supply the name the rows implicitly carry. Nothing outside that layer should
 * compare against this value — a namespace nobody has declared fields in is an empty
 * namespace, not an error.
 */
export declare const CUSTOM_NAMESPACE = "custom";
export declare const IDENTITY_SEGMENT: RegExp;
/** A formatted identity — `namespace.key`, or `namespace.key.partPath` for one part. */
export type FieldIdentityString = string;
export interface FieldIdentity {
    namespace: string;
    key: string;
    partPath: string | null;
}
export declare function formatIdentity({ namespace, key, partPath }: FieldIdentity): FieldIdentityString;
export declare function parseIdentity(identity: string): FieldIdentity | null;
//# sourceMappingURL=identity.d.ts.map