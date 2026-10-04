import { z } from 'zod';
import { type FieldType } from './structure.js';
export { FIELD_KINDS, FIELD_PARTS, FIELD_TYPE_IDS, PART_TYPE_IDS, partTypesOf, subFieldsOf, type FieldKind, type FieldType, type PartsOf, type PartType, } from './structure.js';
/**
 * The shared catalog of member metafield types.
 *
 * ## What a field type is
 *
 * A publisher defines fields; a field has a type; a type says what a valid value is. That
 * last statement lives here and nowhere else, so that Ghost core, which enforces it, and
 * admin, which gives instant feedback against it, cannot disagree about what is valid.
 *
 * A type is one of two things. Most are a value in their own right, declared as the
 * schema that value must satisfy. An address is a *record*: a set of named parts, each a
 * value in the same sense, from which the whole type's schema is derived. Nothing stops a
 * part being a record itself.
 *
 * ## What a write may say
 *
 * A value is text, and so is every part of one. A write names what it means to change: a
 * name it does not mention is left as it was, and a name given an empty string is being
 * cleared. That is why every part accepts empty regardless of its own rule — emptying is
 * a statement about the write, not about the part.
 *
 * A name nobody recognizes is an error rather than a silent drop, at both depths. A
 * misspelled field key is refused by the values service, which alone knows which fields a
 * site has defined; a misspelled part is refused here, because a type's parts are declared
 * in this file and nowhere else. Each is enforced where the names are known.
 *
 * ## What a failure says
 *
 * A rule carries the sentence shown when it is broken, so the two cannot drift. Each
 * states what is expected rather than what went wrong, so one sentence covers every way
 * of breaking that rule.
 *
 * The sentences are plain literals with no interpolation, so each is usable as a
 * translation key. Nothing here translates: Ghost's parser reads `t()` calls out of the
 * app that renders a string, so that app owns the step. Admin, the only one today, is not
 * translated at all.
 *
 * Two failures keep zod's own wording, both reachable only by a client sending the wrong
 * JSON shape: a composite handed something that is not an object, and a part nobody
 * declared. Naming the offending key serves whoever has to fix that client.
 *
 * ## What this package will not do
 *
 * No presentation beyond that sentence: labels, icons and input controls belong to the
 * frontend, and so does any wording that depends on where it appears rather than on which
 * rule was broken. No storage: columns and codecs belong to the backend. One exception
 * lives in `./csv` — how a value maps onto CSV columns — because both tiers need the same
 * answer and a disagreement between them is a file that silently stops round-tripping.
 *
 * The line is whether more than one renderer must agree on a string, not presentation
 * against validity — the sentences above are presentation. Admin is the only renderer
 * today, so a part's label lives there, held against this file by a type. A Portal
 * collection form, which cannot reach admin's packages, moves the labels here.
 */
export declare const FieldTypeSchema: z.ZodEnum<{
    address: "address";
    long_text: "long_text";
    short_text: "short_text";
}>;
/**
 * What the member whose record it is may do with a field.
 *
 * A property of a definition rather than of the publisher's namespace, so it has an
 * answer for any regime that ever stores definitions, not only the publisher's.
 *
 * Ordered: `write` includes being able to read. Naming the levels for a publisher is
 * presentation and stays with whoever renders them.
 */
export declare const MEMBER_ACCESS_LEVELS: readonly ['none', 'read', 'write'];
export type MemberAccess = (typeof MEMBER_ACCESS_LEVELS)[number];
export declare const MemberAccessSchema: z.ZodEnum<{
    none: "none";
    read: "read";
    write: "write";
}>;
export declare const MEMBER_ACCESS: {
    readonly none: 'none';
    readonly read: 'read';
    readonly write: 'write';
};
/**
 * Where a change to a member's values was made, as a member's activity feed names it.
 * Shared so a place added on the server is one Admin has to be told how to describe.
 */
export declare const METAFIELD_CHANGE_SOURCES: readonly ['admin', 'admin_api', 'portal', 'import', 'checkout'];
export type MetafieldChangeSource = (typeof METAFIELD_CHANGE_SOURCES)[number];
/** Whether a source is one this build knows how to name; a newer server can send others. */
export declare const isMetafieldChangeSource: (source: string) => source is MetafieldChangeSource;
/** A field as an activity feed entry names it: its name is copied so the entry outlives a rename. */
export declare const MetafieldChangeEventFieldSchema: z.ZodObject<{
    namespace: z.ZodString;
    key: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export type MetafieldChangeEventField = z.infer<typeof MetafieldChangeEventFieldSchema>;
/**
 * An entry on a member's activity feed saying which fields a write changed, as the members
 * events endpoint returns it. The server builds it and Admin reads it, so both are held to
 * this one shape. `created_at` is a date on the server and its serialised string in a
 * client. `source` stays open to places a newer server adds.
 */
export interface MetafieldChangeEntry<TDate = string> {
    id: string;
    member_id: string;
    written_by_type: string;
    written_by_id: string | null;
    source: MetafieldChangeSource | (string & {});
    metafields: MetafieldChangeEventField[];
    created_at: TDate;
}
/**
 * Bytes, not characters, because MySQL TEXT holds 65,535 of them: a character bound would
 * accept a multibyte value the column cannot hold, and 65,535 emoji is four times over.
 */
export declare const MAX_LONG_TEXT_BYTES = 65535;
/**
 * The types a composite's parts can declare, each defined once with its rule. A country
 * code and a postal code both store short text, but they are different things — the
 * part's type is what a control or a filter dispatches on, the way a field's own type
 * is for a scalar.
 */
export declare const PART_TYPES: {
    short_text: z.ZodString;
    postal_code: z.ZodString;
    country_code: z.ZodString;
};
export interface FieldTypeDefinition {
    /** What kind of value this is, for anything that has to compare one. */
    kind: import('./structure.js').FieldKind;
    value: z.ZodType;
}
export declare const FIELD_TYPES: {
    short_text: {
        kind: "text";
        value: z.ZodString;
    };
    long_text: {
        kind: "text";
        value: z.ZodString;
    };
    address: {
        kind: 'record';
        value: z.ZodObject<{
            line1: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>>;
            line2: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>>;
            city: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>>;
            state: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>>;
            postal_code: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>>;
            country: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>>;
        }, z.core.$strict>;
    };
};
/** Named for the admin types built on it, which speak of an address rather than a record. */
export declare const AddressValue: z.ZodObject<{
    line1: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>>;
    line2: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>>;
    city: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>>;
    state: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>>;
    postal_code: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>>;
    country: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>>;
}, z.core.$strict>;
export type Address = z.infer<typeof AddressValue>;
/**
 * A value of any field type, as a caller holding a field of unknown type must accept it.
 *
 * Derived from the schemas rather than listed, so a type added here widens it without
 * anyone remembering to.
 */
export type FieldValue = {
    [T in FieldType]: z.infer<(typeof FIELD_TYPES)[T]['value']>;
}[FieldType];
//# sourceMappingURL=index.d.ts.map