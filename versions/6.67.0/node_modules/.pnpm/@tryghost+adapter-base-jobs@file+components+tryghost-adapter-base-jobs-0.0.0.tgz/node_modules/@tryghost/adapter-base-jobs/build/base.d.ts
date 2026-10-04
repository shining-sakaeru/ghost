export interface JobEnvelope {
    type: string;
    payload: string;
}
export interface JobRouting {
    queue?: string;
}
export interface QueueDeclaration {
    concurrency?: number;
}
export type JobProcessor = (envelope: JobEnvelope) => Promise<void>;
export interface JobsStartOptions {
    processor: JobProcessor;
    queues?: Record<string, QueueDeclaration>;
}
export interface RecurringSchedule {
    cron: string;
}
export interface JobsShutdownOptions {
    timeoutMs?: number;
}
export declare abstract class JobsBackendBase {
    readonly requiredFns: readonly ['start', 'enqueue', 'scheduleRecurring', 'shutdown'];
    constructor();
    abstract start(options: JobsStartOptions): void | Promise<void>;
    abstract enqueue(envelope: JobEnvelope, routing?: JobRouting): void | Promise<void>;
    abstract scheduleRecurring(envelope: JobEnvelope, schedule: RecurringSchedule, routing?: JobRouting): void | Promise<void>;
    abstract shutdown(options?: JobsShutdownOptions): void | Promise<void>;
}
//# sourceMappingURL=base.d.ts.map