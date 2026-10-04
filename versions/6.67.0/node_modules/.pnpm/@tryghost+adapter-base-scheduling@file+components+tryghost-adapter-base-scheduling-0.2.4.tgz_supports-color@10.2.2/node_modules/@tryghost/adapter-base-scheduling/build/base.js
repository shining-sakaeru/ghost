import logging from '@tryghost/logging';
export class SchedulingBase {
    #reschedulers = new Set();
    constructor() {
        Object.defineProperty(this, 'requiredFns', {
            value: Object.freeze(['run', 'schedule', 'unschedule']),
            writable: false,
        });
    }
    register(rescheduler) {
        this.#reschedulers.add(rescheduler);
    }
    /**
     * Ask every registered rescheduler to rebuild its queue under the current
     * key. Best-effort: a failure in one doesn't block the others.
     */
    async rescheduleAll(opts) {
        const reschedulers = Array.from(this.#reschedulers);
        const results = await Promise.allSettled(reschedulers.map((r) => r.rescheduleAll(opts)));
        results.forEach((result, i) => {
            if (result.status === 'rejected') {
                logging.error({
                    event: { name: 'scheduler.reschedule_all.failed' },
                    err: result.reason,
                    rescheduler: reschedulers[i].constructor?.name || 'unknown',
                }, 'Rescheduler failed');
            }
        });
        return results;
    }
}
//# sourceMappingURL=base.js.map