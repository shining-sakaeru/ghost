import type Frame from '../frame.ts';
import type { ApiConfiguration } from '../pipeline.ts';
/**
 * @description Shared input serialization handler.
 *
 * The shared input handler runs the request through all the validation steps.
 *
 * 1. Shared serialization
 * 2. API serialization
 *
 * @param {Object} apiConfig - Docname + method of the ctrl
 * @param {Object} apiSerializers - Target API serializers
 * @param {import('@tryghost/api-framework').Frame} frame
 */
export declare const input: (apiConfig?: ApiConfiguration, apiSerializersInput?: Record<string, unknown>, frame?: Frame) => Promise<unknown>;
/**
 * @description Shared output serialization handler.
 *
 * The shared output handler runs the request through all the validation steps.
 *
 * 1. Shared serialization
 * 2. API serialization
 *
 * @param {Object} response - API response
 * @param {Object} apiConfig - Docname + method of the ctrl
 * @param {Object} apiSerializers - Target API serializers
 * @param {import('@tryghost/api-framework').Frame} frame
 */
export declare const output: (response?: unknown, apiConfig?: ApiConfiguration, apiSerializersInput?: Record<string, unknown>, frame?: Frame) => Promise<unknown>;
declare const _default: {
    input: typeof input;
    output: typeof output;
};
export default _default;
//# sourceMappingURL=handle.d.ts.map