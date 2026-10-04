import assert from 'node:assert/strict';
function deferred() {
    let resolve;
    const promise = new Promise((res) => {
        resolve = res;
    });
    return { promise, resolve };
}
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
export function runJobsBackendContractTests(makeBackend, { describe, it }) {
    const envelope = { type: 'test-job', payload: '{"value":1}' };
    describe('jobs backend contract', function () {
        it('delivers an enqueued envelope to the processor', async function () {
            const received = [];
            const backend = makeBackend();
            await backend.start({
                processor: async (env) => {
                    received.push(env);
                },
            });
            await backend.enqueue(envelope);
            await backend.shutdown({ timeoutMs: 1000 });
            assert.deepEqual(received, [envelope]);
        });
        it('resolves enqueue on acceptance, not on completion', async function () {
            let completed = false;
            const release = deferred();
            const started = deferred();
            const backend = makeBackend();
            await backend.start({
                processor: async () => {
                    started.resolve();
                    await release.promise;
                    completed = true;
                },
            });
            await backend.enqueue(envelope);
            await started.promise;
            assert.equal(completed, false);
            release.resolve();
            await backend.shutdown({ timeoutMs: 1000 });
            assert.equal(completed, true);
        });
        it('drains in-flight work on shutdown', async function () {
            let completed = false;
            const backend = makeBackend();
            await backend.start({
                processor: async () => {
                    await delay(30);
                    completed = true;
                },
            });
            await backend.enqueue(envelope);
            await backend.shutdown({ timeoutMs: 1000 });
            assert.equal(completed, true);
        });
        it('bounds shutdown when a handler hangs', async function () {
            const backend = makeBackend();
            const started = deferred();
            await backend.start({
                processor: () => new Promise(() => {
                    started.resolve();
                }),
            });
            await backend.enqueue(envelope);
            await started.promise;
            const raced = await Promise.race([
                Promise.resolve(backend.shutdown({ timeoutMs: 30 })).then(() => 'shutdown'),
                delay(2000).then(() => 'hung'),
            ]);
            assert.equal(raced, 'shutdown');
        });
        // Queue routing is metadata: a backend may isolate queues or run one
        // lane, but a routed envelope must always be delivered, and unknown
        // routing must never lose work.
        it('delivers an envelope enqueued with queue routing', async function () {
            const received = [];
            const backend = makeBackend();
            await backend.start({
                processor: async (env) => {
                    received.push(env);
                },
                queues: { isolated: { concurrency: 1 } },
            });
            await backend.enqueue(envelope, { queue: 'isolated' });
            await backend.shutdown({ timeoutMs: 1000 });
            assert.deepEqual(received, [envelope]);
        });
        it('delivers an envelope routed to a queue no handler declared', async function () {
            const received = [];
            const backend = makeBackend();
            await backend.start({
                processor: async (env) => {
                    received.push(env);
                },
            });
            await backend.enqueue(envelope, { queue: 'undeclared' });
            await backend.shutdown({ timeoutMs: 1000 });
            assert.deepEqual(received, [envelope]);
        });
        it('tolerates start after a prior shutdown', async function () {
            const received = [];
            const backend = makeBackend();
            await backend.start({ processor: async () => { } });
            await backend.shutdown({ timeoutMs: 1000 });
            await backend.start({
                processor: async (env) => {
                    received.push(env);
                },
            });
            await backend.enqueue(envelope);
            await backend.shutdown({ timeoutMs: 1000 });
            assert.deepEqual(received, [envelope]);
        });
    });
}
//# sourceMappingURL=contract-test-suite.js.map