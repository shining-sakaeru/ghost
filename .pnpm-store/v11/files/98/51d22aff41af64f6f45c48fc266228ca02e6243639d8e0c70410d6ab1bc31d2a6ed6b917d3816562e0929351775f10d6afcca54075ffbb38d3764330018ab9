import errors from '@tryghost/errors';
import { actionSchemaNames, schemas } from './schemas/index.js';
import { validate as validateJSONSchema } from './utils/json-schema.js';
function isSchemaName(name) {
    return Object.hasOwn(schemas, name);
}
export function get(name) {
    if (!name || !isSchemaName(name)) {
        return null;
    }
    return schemas[name];
}
export function list() {
    return [...actionSchemaNames];
}
export function validate({ data, schema, definition = schema?.split('-')[0], }) {
    const schemaJSON = get(schema);
    if (!schemaJSON) {
        throw new errors.IncorrectUsageError({
            message: 'Cannot find schema for provided definition name.',
            context: `Definition for ${schema} does not exist.`,
        });
    }
    const definitionJSON = get(definition);
    if (!definitionJSON) {
        throw new errors.IncorrectUsageError({
            message: 'Cannot find schema for provided definition name.',
            context: `Definition for ${definition} does not exist.`,
        });
    }
    return validateJSONSchema(schemaJSON, definitionJSON, data);
}
export default { get, list, validate };
//# sourceMappingURL=index.js.map