export type Dictionary = Record<string, unknown>;
export interface FrameInput extends Dictionary {
    body?: Dictionary;
    context?: Dictionary;
    file?: unknown;
    files?: unknown[];
    options?: Dictionary;
    params?: Dictionary;
    query?: Dictionary;
    session?: unknown;
    url?: {
        host: string;
        pathname: string | null;
        secure?: boolean;
    };
    user?: unknown;
}
export interface FrameConfiguration {
    data?: Dictionary | string[] | ((frame: Frame) => string[]);
    options?: Dictionary | string[] | ((frame: Frame) => string[]);
}
/** Holds all information associated with an API request. */
export declare class Frame {
    #private;
    original: FrameInput;
    options: Dictionary & {
        context?: Dictionary;
    };
    data: Dictionary;
    user: unknown;
    file: unknown;
    files: unknown[];
    apiType: string | undefined | null;
    docName: string | null | undefined;
    method: string | null;
    response: unknown;
    constructor(obj?: FrameInput);
    configure(apiConfig: FrameConfiguration): void;
    setHeader(header: string, value: string): void;
    getHeaders(): {
        [x: string]: string;
    };
}
export default Frame;
//# sourceMappingURL=frame.d.ts.map