import type { UnknownRecord } from './types';
type PlaintextTransformOptions = UnknownRecord;
type PlaintextTransformOptionsInput = Partial<PlaintextTransformOptions>;
declare function plaintextToTransformReady(plaintext: string, siteUrl: string, itemPath: string | null | PlaintextTransformOptionsInput, options?: PlaintextTransformOptionsInput): string;
export default plaintextToTransformReady;
