import type { RequestHandler } from 'express';
export type StorageFile = {
    name: string;
    path: string;
    type?: string;
};
export type ReadOptions = {
    path: string;
};
/**
 * Base class for Ghost storage adapters.
 *
 * Concrete adapters extend this class and implement the methods listed in
 * `requiredFns`: `exists`, `save`, `serve`, `delete` and `read`.
 */
export declare abstract class StorageBase {
    readonly requiredFns: readonly ['exists', 'save', 'serve', 'delete', 'read'];
    storagePath: string;
    abstract exists(fileName: string, targetDir?: string): Promise<boolean>;
    abstract save(file: StorageFile, targetDir?: string): Promise<string>;
    abstract serve(): RequestHandler;
    abstract delete(fileName: string, targetDir?: string): Promise<void>;
    abstract read(options: ReadOptions): Promise<Buffer>;
    abstract saveRaw(buffer: Buffer, targetPath: string): Promise<string>;
    abstract urlToPath(url: string): string;
    constructor();
    getTargetDir(baseDir?: string | null): string;
    generateUnique(dir: string, name: string, ext: string | null, i: number): Promise<string>;
    getUniqueFileName(file: StorageFile, targetDir: string): Promise<string>;
    getSanitizedFileName(fileName: string): string;
}
//# sourceMappingURL=base.d.ts.map