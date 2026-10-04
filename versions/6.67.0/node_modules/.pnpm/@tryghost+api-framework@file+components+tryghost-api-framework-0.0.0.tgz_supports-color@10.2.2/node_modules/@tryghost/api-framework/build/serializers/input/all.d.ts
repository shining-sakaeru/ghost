import type Frame from '../../frame.ts';
/**
 * @description Shared serializer for all requests.
 *
 * Transforms certain options from API notation into model readable language/notation.
 *
 * e.g. API uses "include", but model layer uses "withRelated".
 */
declare const serializers: {
    all(_apiConfig: object, frame: Frame): void;
};
export default serializers;
//# sourceMappingURL=all.d.ts.map