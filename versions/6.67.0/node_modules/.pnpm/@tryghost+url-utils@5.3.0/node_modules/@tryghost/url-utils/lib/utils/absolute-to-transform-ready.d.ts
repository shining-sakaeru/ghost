import type { TransformReadyReplacementOptions } from './types';
import { type AbsoluteToRelativeOptions } from './absolute-to-relative';
export interface AbsoluteToTransformReadyOptions extends TransformReadyReplacementOptions, AbsoluteToRelativeOptions {
    withoutSubdirectory: boolean;
    staticFilesUrlPrefix?: string;
    staticMediaUrlPrefix?: string;
    imageBaseUrl?: string | null;
    filesBaseUrl?: string | null;
    mediaBaseUrl?: string | null;
}
export type AbsoluteToTransformReadyOptionsInput = Partial<AbsoluteToTransformReadyOptions>;
declare const absoluteToTransformReady: (url: string, root: string, _options?: AbsoluteToTransformReadyOptionsInput) => string;
export default absoluteToTransformReady;
