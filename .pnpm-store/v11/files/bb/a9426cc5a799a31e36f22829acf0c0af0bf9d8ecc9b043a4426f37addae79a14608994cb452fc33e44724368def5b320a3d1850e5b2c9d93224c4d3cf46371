import { type SchemaName } from './schemas/index.js';
import { type IdentifiedSchema } from './utils/json-schema.js';
export type { SchemaName };
export interface ValidateOptions {
    data: unknown;
    schema?: string;
    definition?: string;
}
export declare function get(name: string | undefined): IdentifiedSchema | null;
export declare function list(): SchemaName[];
export declare function validate({ data, schema, definition, }: ValidateOptions): Promise<void>;
declare const _default: {
    get: typeof get;
    list: typeof list;
    validate: typeof validate;
};
export default _default;
//# sourceMappingURL=index.d.ts.map