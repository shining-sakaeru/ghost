import { type SchemaObject } from 'ajv';
export interface IdentifiedSchema extends SchemaObject {
    $id: string;
}
export declare function validate(schema: IdentifiedSchema, definition: IdentifiedSchema, data: unknown): Promise<void>;
//# sourceMappingURL=json-schema.d.ts.map