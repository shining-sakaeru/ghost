export function addIsLowercaseKeyword(ajv) {
    ajv.addKeyword({
        keyword: 'isLowercase',
        type: 'string',
        schemaType: 'boolean',
        errors: false,
        validate: (_schema, data) => data === data.toLowerCase(),
    });
    return ajv;
}
//# sourceMappingURL=is-lowercase-keyword.js.map