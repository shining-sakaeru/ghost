export class RedirectsStoreBase {
    constructor() {
        Object.defineProperty(this, 'requiredFns', {
            value: Object.freeze(['getAll', 'replaceAll']),
            writable: false,
        });
    }
}
//# sourceMappingURL=base.js.map