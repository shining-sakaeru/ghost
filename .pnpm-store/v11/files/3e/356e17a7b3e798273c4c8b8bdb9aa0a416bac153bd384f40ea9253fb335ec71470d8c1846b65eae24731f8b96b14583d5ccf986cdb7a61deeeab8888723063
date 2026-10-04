import Frame from './frame.ts';
import type { Dictionary } from './frame.ts';
import type { ControllerMethod } from './pipeline.ts';
export interface GhostRequest {
    api_key?: {
        get(key: string): string | null | undefined;
    };
    body?: Dictionary;
    file?: unknown;
    files?: unknown[];
    frameOptions?: {
        docName: string | null | undefined;
        method: string | null;
    };
    get(name: string): string | undefined;
    member?: unknown;
    originalUrl?: string;
    params?: Dictionary;
    query?: Dictionary;
    secure?: boolean;
    session?: unknown;
    user?: {
        id?: string;
    };
    url: string;
    vhost?: {
        host: string;
    } | null;
}
export interface GhostResponse {
    json(body: unknown): unknown;
    send(body: unknown): unknown;
    set(headers: Record<string, string | number>): unknown;
    status(code: number): unknown;
}
export type GhostNextFunction = (err?: unknown) => unknown;
export type HttpHandler = (req: GhostRequest, res: GhostResponse, next: GhostNextFunction) => Promise<unknown>;
/**
 * @description HTTP wrapper.
 *
 * This wrapper is used in the routes definition (see web/).
 * The wrapper receives the express request, prepares the frame and forwards the request to the pipeline.
 *
 * @param {import('@tryghost/api-framework').Controller} apiImpl - Pipeline wrapper, which executes the target ctrl function.
 * @return {import('express').RequestHandler}
 */
declare const http: (apiImpl: ControllerMethod & ((frame: Frame) => unknown)) => HttpHandler;
export default http;
//# sourceMappingURL=http.d.ts.map