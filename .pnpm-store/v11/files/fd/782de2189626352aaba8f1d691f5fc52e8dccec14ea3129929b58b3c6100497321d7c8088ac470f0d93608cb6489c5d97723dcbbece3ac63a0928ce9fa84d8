import { JobsBackendBase } from './base.ts';
export type BackendFactory = () => JobsBackendBase;
export interface JobsContractTestFramework {
    describe(name: string, fn: () => void): void;
    it(name: string, fn: () => void | Promise<void>): void;
}
export declare function runJobsBackendContractTests(makeBackend: BackendFactory, { describe, it }: JobsContractTestFramework): void;
//# sourceMappingURL=contract-test-suite.d.ts.map