import Frame from './frame.ts';
import type { Dictionary, FrameConfiguration } from './frame.ts';
type AsyncResult = unknown | Promise<unknown>;
export interface ApiConfiguration extends FrameConfiguration, Dictionary {
    docName?: string;
    method?: string;
}
interface Cache {
    get(key: string, loader: () => Promise<unknown>): AsyncResult;
    set(key: string, value: unknown): AsyncResult;
}
interface PermissionConfiguration extends Dictionary {
    before?: (frame: Frame) => AsyncResult;
}
export interface ControllerMethod {
    cache?: Cache;
    data?: FrameConfiguration['data'];
    generateCacheKeyData?: (frame: Frame) => AsyncResult;
    headers?: Dictionary;
    options?: FrameConfiguration['options'];
    permissions?: boolean | PermissionConfiguration | ((frame: Frame) => AsyncResult);
    query?: (frame: Frame) => AsyncResult;
    response?: {
        format: string | (() => string | PromiseLike<string>);
    };
    statusCode?: number | ((result: unknown) => number);
    validation?: Dictionary | ((frame: Frame) => AsyncResult);
}
type ControllerHandler = ControllerMethod & ((dataOrOptions?: Dictionary | Frame, options?: Dictionary | Frame) => Promise<unknown>);
export type Controller = {
    docName?: string;
} & Record<string, ControllerMethod | string | undefined>;
interface ApiUtils {
    permissions?: {
        handle(config: Dictionary, frame: Frame): AsyncResult;
    };
    serializers?: {
        input?: Dictionary;
        output?: Dictionary;
    };
    validators?: {
        input?: Dictionary;
    };
}
declare const STAGES: {
    validation: {
        /**
         * @description Input validation.
         *
         * We call the shared validator which runs the request through:
         *
         * 1. Shared validator
         * 2. Custom API validators
         *
         * @param {Object} apiUtils - Local utils of target API version.
         * @param {Object} apiConfig - Docname & Method of ctrl.
         * @param {import('@tryghost/api-framework').ControllerMethod} apiImpl -  Controller configuration.
         * @param {import('@tryghost/api-framework').Frame} frame
         * @return {Promise}
         */
        input(apiUtils: ApiUtils, apiConfig: ApiConfiguration, apiImpl: ControllerMethod, frame: Frame): Promise<unknown>;
    };
    serialisation: {
        /**
         * @description Input Serialisation.
         *
         * We call the shared serializer which runs the request through:
         *
         * 1. Shared serializers
         * 2. Custom API serializers
         *
         * @param {Object} apiUtils - Local utils of target API version.
         * @param {Object} apiConfig - Docname & Method of ctrl.
         * @param {import('@tryghost/api-framework').ControllerMethod} apiImpl -  Controller configuration.
         * @param {import('@tryghost/api-framework').Frame} frame
         * @return {Promise}
         */
        input(apiUtils: ApiUtils, apiConfig: ApiConfiguration, apiImpl: ControllerMethod, frame: Frame): Promise<unknown>;
        /**
         * @description Output Serialisation.
         *
         * We call the shared serializer which runs the request through:
         *
         * 1. Shared serializers
         * 2. Custom API serializers
         *
         * @param {Object} apiUtils - Local utils of target API version.
         * @param {Object} apiConfig - Docname & Method of ctrl.
         * @param {import('@tryghost/api-framework').ControllerMethod} apiImpl -  Controller configuration.
         * @param {import('@tryghost/api-framework').Frame} frame
         * @return {Promise}
         */
        output(response: unknown, apiUtils: ApiUtils, apiConfig: ApiConfiguration, _apiImpl: ControllerMethod, frame: Frame): Promise<unknown>;
    };
    /**
     * @description Permissions stage.
     *
     * We call the target API implementation of permissions.
     * Permissions implementation can change across API versions.
     * There is no shared implementation right now.
     *
     * @param {Object} apiUtils - Local utils of target API version.
     * @param {Object} apiConfig - Docname & Method of ctrl.
     * @param {import('@tryghost/api-framework').ControllerMethod} apiImpl -  Controller configuration.
     * @param {import('@tryghost/api-framework').Frame} frame
     * @return {Promise}
     */
    permissions(apiUtils: ApiUtils, apiConfig: ApiConfiguration, apiImpl: ControllerMethod, frame: Frame): Promise<unknown>;
    /**
     * @description Execute controller & receive model response.
     *
     * @param {Object} apiUtils - Local utils of target API version.
     * @param {Object} apiConfig - Docname & Method of ctrl.
     * @param {import('@tryghost/api-framework').ControllerMethod} apiImpl -  Controller configuration.
     * @param {import('@tryghost/api-framework').Frame} frame
     * @return {Promise}
     */
    query(_apiUtils: ApiUtils, _apiConfig: ApiConfiguration, apiImpl: ControllerMethod, frame: Frame): Promise<unknown>;
};
type PipelineResult<T extends Controller> = {
    [K in Exclude<keyof T, 'docName'>]: ControllerHandler;
};
/**
 * @description The pipeline runs the request through all stages (validation, serialisation, permissions).
 *
 * The target API version calls the pipeline and wraps the actual ctrl implementation to be able to
 * run the request through various stages before hitting the controller.
 *
 * The stages are executed in the following order:
 *
 * 1. Input validation - General & schema validation
 * 2. Input serialisation - Modification of incoming data e.g. force filters, auto includes, url transformation etc.
 * 3. Permissions - Runs after validation & serialisation because the body structure must be valid (see unsafeAttrs)
 * 4. Controller - Execute the controller implementation & receive model response.
 * 5. Output Serialisation - Output formatting, Deprecations, Extra attributes etc...
 *
 * @param {import('@tryghost/api-framework').Controller} apiController
 * @param {Object} apiUtils - Local utils (validation & serialisation) from target API version
 * @param {String} [apiType] - Content or Admin API access
 * @return {Object}
 */
declare const pipeline: <T extends Controller>(apiController: T, apiUtils: ApiUtils, apiType?: string) => PipelineResult<T>;
export { STAGES };
declare const _default: typeof pipeline & {
    STAGES: {
        validation: {
            /**
             * @description Input validation.
             *
             * We call the shared validator which runs the request through:
             *
             * 1. Shared validator
             * 2. Custom API validators
             *
             * @param {Object} apiUtils - Local utils of target API version.
             * @param {Object} apiConfig - Docname & Method of ctrl.
             * @param {import('@tryghost/api-framework').ControllerMethod} apiImpl -  Controller configuration.
             * @param {import('@tryghost/api-framework').Frame} frame
             * @return {Promise}
             */
            input(apiUtils: ApiUtils, apiConfig: ApiConfiguration, apiImpl: ControllerMethod, frame: Frame): Promise<unknown>;
        };
        serialisation: {
            /**
             * @description Input Serialisation.
             *
             * We call the shared serializer which runs the request through:
             *
             * 1. Shared serializers
             * 2. Custom API serializers
             *
             * @param {Object} apiUtils - Local utils of target API version.
             * @param {Object} apiConfig - Docname & Method of ctrl.
             * @param {import('@tryghost/api-framework').ControllerMethod} apiImpl -  Controller configuration.
             * @param {import('@tryghost/api-framework').Frame} frame
             * @return {Promise}
             */
            input(apiUtils: ApiUtils, apiConfig: ApiConfiguration, apiImpl: ControllerMethod, frame: Frame): Promise<unknown>;
            /**
             * @description Output Serialisation.
             *
             * We call the shared serializer which runs the request through:
             *
             * 1. Shared serializers
             * 2. Custom API serializers
             *
             * @param {Object} apiUtils - Local utils of target API version.
             * @param {Object} apiConfig - Docname & Method of ctrl.
             * @param {import('@tryghost/api-framework').ControllerMethod} apiImpl -  Controller configuration.
             * @param {import('@tryghost/api-framework').Frame} frame
             * @return {Promise}
             */
            output(response: unknown, apiUtils: ApiUtils, apiConfig: ApiConfiguration, _apiImpl: ControllerMethod, frame: Frame): Promise<unknown>;
        };
        /**
         * @description Permissions stage.
         *
         * We call the target API implementation of permissions.
         * Permissions implementation can change across API versions.
         * There is no shared implementation right now.
         *
         * @param {Object} apiUtils - Local utils of target API version.
         * @param {Object} apiConfig - Docname & Method of ctrl.
         * @param {import('@tryghost/api-framework').ControllerMethod} apiImpl -  Controller configuration.
         * @param {import('@tryghost/api-framework').Frame} frame
         * @return {Promise}
         */
        permissions(apiUtils: ApiUtils, apiConfig: ApiConfiguration, apiImpl: ControllerMethod, frame: Frame): Promise<unknown>;
        /**
         * @description Execute controller & receive model response.
         *
         * @param {Object} apiUtils - Local utils of target API version.
         * @param {Object} apiConfig - Docname & Method of ctrl.
         * @param {import('@tryghost/api-framework').ControllerMethod} apiImpl -  Controller configuration.
         * @param {import('@tryghost/api-framework').Frame} frame
         * @return {Promise}
         */
        query(_apiUtils: ApiUtils, _apiConfig: ApiConfiguration, apiImpl: ControllerMethod, frame: Frame): Promise<unknown>;
    };
};
export default _default;
//# sourceMappingURL=pipeline.d.ts.map