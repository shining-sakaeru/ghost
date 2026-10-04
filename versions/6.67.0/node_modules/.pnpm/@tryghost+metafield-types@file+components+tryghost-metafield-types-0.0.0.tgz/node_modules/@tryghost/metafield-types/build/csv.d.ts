import { type FieldType } from './index.ts';
import type { FieldIdentityString } from './identity.ts';
/** A field definition reduced to what CSV needs to know about it. */
export interface CsvField {
    namespace: string;
    key: string;
    type: FieldType;
}
/** A column a field occupies, and which part of the field's value it holds. */
export interface CsvFieldColumn {
    column: string;
    /** The part this column holds, or null where the field's whole value is one column. */
    subField: string | null;
}
export declare function csvColumnsForField(field: CsvField): CsvFieldColumn[];
export declare function isMetafieldColumn(column: string): boolean;
export declare function csvCellsForFields(fields: readonly CsvField[], values: Record<string, Record<string, unknown> | undefined>): Record<string, string>;
/**
 * The inverse of `csvCellsForFields`: read a row's metafield cells into the values a
 * member write takes. Only the passed fields are read, so a column naming no active
 * field is dropped rather than erroring.
 *
 * `decodeCell` turns a raw cell into its value; it defaults to identity. The caller owns
 * any de-serialization the specific file needs — the members importer passes one that
 * strips the export's formula guard — so this stays pure vocabulary and holds no knowledge
 * of how any particular CSV escapes its cells.
 *
 * A field is written only from a non-blank cell; a blank or absent cell leaves the
 * existing value untouched, not cleared — matching how the importer keeps a blank name or
 * note, so re-importing a partly-filled export can't wipe values a publisher didn't
 * touch. A composite whose every cell is blank is omitted too, because the export writes
 * "no address" and an all-blank address identically; one with any filled cell is read
 * from its non-blank cells and validated whole (a malformed sub-field fails the row).
 * No sub-field is required, so a row carrying only some of an address reads as only
 * those sub-fields. A blank sub-field cell reads as no data for that sub-field, the
 * same way a blank cell reads as no data for a whole field.
 */
export declare function fieldValuesFromCsvRow(fields: readonly CsvField[], row: Record<string, unknown>, decodeCell?: (cell: string) => string): Record<FieldIdentityString, unknown>;
//# sourceMappingURL=csv.d.ts.map