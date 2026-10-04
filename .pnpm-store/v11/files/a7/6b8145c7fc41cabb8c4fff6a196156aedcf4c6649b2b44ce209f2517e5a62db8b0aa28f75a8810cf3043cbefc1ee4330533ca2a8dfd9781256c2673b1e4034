import { Base64 } from 'ox';
import { KeyAuthorization } from 'ox/tempo';
import { encodeFunctionData, isAddressEqual } from 'viem';
import { call as viem_call, sendRawTransaction, sendRawTransactionSync, signTransaction, } from 'viem/actions';
import { tempo as tempo_chain } from 'viem/chains';
import { Abis, Account as TempoAccount, Transaction } from 'viem/tempo';
import { VerificationFailedError } from '../../Errors.js';
import * as Method from '../../Method.js';
import * as Store from '../../Store.js';
import * as ClientResolver from '../../viem/Client.js';
import * as Attribution from '../Attribution.js';
import * as Account from '../internal/account.js';
import * as defaults from '../internal/defaults.js';
import * as Proof from '../internal/proof.js';
import * as Methods from '../Methods.js';
import { assertSubscriptionTiming, toSubscriptionPeriodSeconds, verifySubscriptionKeyAuthorization, } from '../subscription/KeyAuthorization.js';
import * as SubscriptionReceipt from '../subscription/Receipt.js';
import * as SubscriptionStore from '../subscription/Store.js';
/**
 * Creates a Tempo subscription method for recurring TIP-20 token payments.
 *
 * The method handles activation, request-path reuse, and optional lazy renewals.
 */
export function subscription(p) {
    const parameters = p;
    const rawStore = (parameters.store ?? Store.memory());
    if (typeof rawStore.update !== 'function') {
        throw new Error('tempo.subscription() requires an atomic store with `update`.');
    }
    const defaultChainId = parameters.chainId ?? defaults.chainId.testnet;
    const { amount, currency = defaults.resolveCurrency({ chainId: defaultChainId }), decimals = defaults.decimals, description, externalId, periodCount, periodUnit, subscriptionExpires, waitForConfirmation = true, } = parameters;
    const store = SubscriptionStore.fromStore(rawStore, {
        activationTimeoutMs: parameters.activationTimeoutMs,
        renewalTimeoutMs: parameters.renewalTimeoutMs,
    });
    const { recipient } = Account.resolve(parameters);
    const getClient = ClientResolver.getResolver({
        chain: tempo_chain,
        getClient: parameters.getClient,
        rpcUrl: defaults.rpcUrl,
    });
    return Method.toServer(Methods.subscription, {
        defaults: {
            amount,
            currency,
            decimals,
            description,
            externalId,
            periodCount,
            periodUnit,
            recipient,
            subscriptionExpires,
        },
        async authorize({ input, request }) {
            const resolved = await parameters.resolve({ input, request });
            if (!resolved)
                return undefined;
            const subscription = await store.getByKey(resolved.key);
            if (!subscription || !isActive(subscription))
                return undefined;
            if (!subscriptionMatchesRequest(subscription, request))
                return undefined;
            const periodIndex = getPeriodIndex(subscription);
            if (periodIndex > subscription.lastChargedPeriod) {
                const renew = resolveRenewalHandler({
                    getClient,
                    parameters,
                    store,
                    subscription,
                    waitForConfirmation,
                });
                if (!renew)
                    return undefined;
                const renewal = await settleRenewal({
                    expectedLookupKey: resolved.key,
                    periodIndex,
                    renew,
                    request,
                    store,
                    subscription,
                });
                if (!renewal)
                    return undefined;
                if (renewal.status === 'charged')
                    return { receipt: renewal.receipt };
                if (renewal.status === 'inFlight') {
                    return {
                        receipt: renewal.receipt,
                        response: new Response(null, {
                            headers: { 'Retry-After': '1' },
                            status: 409,
                        }),
                    };
                }
                await parameters.hooks?.renewed?.({
                    periodIndex,
                    receipt: renewal.result.receipt,
                    subscription: renewal.result.subscription,
                });
                return {
                    receipt: renewal.result.receipt,
                };
            }
            return {
                receipt: SubscriptionReceipt.fromRecord(subscription),
            };
        },
        async request({ capturedRequest, credential, request }) {
            const credentialRequest = credential?.challenge.request;
            const chainId = request.chainId ??
                parameters.chainId ??
                credentialRequest?.methodDetails?.chainId ??
                defaults.chainId.testnet;
            const parsedRequest = Methods.subscription.schema.request.parse({
                ...request,
                chainId,
            });
            const input = requestFromCaptured(capturedRequest);
            const resolved = await parameters.resolve({ input, request: parsedRequest });
            const existing = resolved ? await store.getByKey(resolved.key) : null;
            const accessKey = resolved && !credential
                ? await resolveChallengeAccessKey({
                    existing,
                    input,
                    parameters,
                    request: parsedRequest,
                    resolved,
                    store,
                })
                : (credentialRequest?.methodDetails?.accessKey ?? parsedRequest.methodDetails?.accessKey);
            if (!accessKey) {
                throw new VerificationFailedError({ reason: 'subscription accessKey is missing' });
            }
            // Challenges carry the server-generated key in methodDetails so the shared request shape stays spec-compatible.
            return {
                ...request,
                methodDetails: {
                    ...request.methodDetails,
                    accessKey,
                },
                chainId,
            };
        },
        stableBinding: subscriptionBinding,
        async verify({ credential, envelope, request }) {
            const input = requestFromCaptured(envelope?.capturedRequest);
            const parsed = Methods.subscription.schema.request.safeParse(request);
            const parsedRequest = parsed.success ? parsed.data : request;
            assertSubscriptionTiming({
                challengeExpires: credential.challenge.expires,
                request: parsedRequest,
            });
            const resolved = await parameters.resolve({ input, request: parsedRequest });
            if (!resolved) {
                throw new VerificationFailedError({ reason: 'subscription could not be resolved' });
            }
            const challengeRequest = credential.challenge.request;
            const accessKey = challengeRequest.methodDetails?.accessKey ??
                parsedRequest.methodDetails?.accessKey ??
                (await resolveAccessKey({ input, parameters, request: parsedRequest, resolved }));
            if (!accessKey) {
                throw new VerificationFailedError({ reason: 'subscription accessKey is missing' });
            }
            const verified = verifySubscriptionKeyAuthorization({
                accessKey,
                chainId: parsedRequest.methodDetails?.chainId ?? defaults.chainId.testnet,
                payload: credential.payload,
                request: parsedRequest,
            });
            const declaredSource = credential.source ? Proof.parsePkhSource(credential.source) : null;
            if (declaredSource &&
                (declaredSource.chainId !== verified.source.chainId ||
                    !isAddressEqual(declaredSource.address, verified.source.address))) {
                throw new VerificationFailedError({ reason: 'credential source does not match signature' });
            }
            const activation = await store.activate({
                challengeId: credential.challenge.id,
                isReusable: (subscription) => isReusableSubscription(subscription, parsedRequest),
                lookupKey: resolved.key,
                async create() {
                    const activation = withSubscriptionAccessKey(await activateSubscription({
                        accessKey,
                        auto: {
                            challengeId: credential.challenge.id,
                            getClient,
                            keyAuthorization: credential.payload.signature,
                            realm: credential.challenge.realm,
                            store,
                            waitForConfirmation,
                        },
                        credential: credential,
                        input,
                        parameters,
                        request: parsedRequest,
                        resolved,
                        source: verified.source,
                    }), accessKey);
                    validateSubscriptionSettlement(activation, {
                        expectedLookupKey: resolved.key,
                        expectedPeriodIndex: 0,
                        request: parsedRequest,
                    });
                    return activation;
                },
            });
            if (activation.status === 'replayed') {
                throw new VerificationFailedError({
                    reason: 'subscription credential has already been used',
                });
            }
            if (activation.status === 'inFlight') {
                throw new VerificationFailedError({
                    reason: 'subscription activation is already in flight',
                });
            }
            if (activation.status === 'claimMismatch') {
                throw new VerificationFailedError({ reason: 'subscription activation claim mismatch' });
            }
            if (activation.status === 'existing') {
                return SubscriptionReceipt.fromRecord(activation.subscription);
            }
            await parameters.hooks?.activated?.({
                receipt: activation.result.receipt,
                subscription: activation.result.subscription,
            });
            return activation.result.receipt;
        },
    });
}
function requestFromCaptured(capturedRequest) {
    if (!capturedRequest)
        return new Request('https://subscription.invalid');
    return new Request(capturedRequest.url, {
        headers: capturedRequest.headers,
        method: capturedRequest.method,
    });
}
async function resolveAccessKey(parameters) {
    const { input, parameters: subscriptionParameters, request, resolved } = parameters;
    return (resolved.accessKey ??
        (subscriptionParameters.accessKey
            ? await subscriptionParameters.accessKey({ input, request, resolved })
            : undefined));
}
async function resolveChallengeAccessKey(parameters) {
    const { existing, input, parameters: subscriptionParameters, request, resolved, store, } = parameters;
    if (!subscriptionParameters.activate) {
        // In automatic mode, the SDK owns the server access key so apps can issue
        // challenges from only their resolved subscription lookup key.
        const accessKey = await store.getOrCreateAccessKey(resolved.key);
        return {
            accessKeyAddress: accessKey.accessKeyAddress,
            keyType: accessKey.keyType,
        };
    }
    // Manual activation keeps the lower-level API: callers can provide the
    // access key for new challenges, while active subscriptions reuse the stored key.
    return ((await resolveAccessKey({ input, parameters: subscriptionParameters, request, resolved })) ??
        (existing && isActive(existing) ? existing.accessKey : undefined));
}
async function activateSubscription(parameters) {
    const { accessKey, auto, credential, input, parameters: subscriptionParameters, request, resolved, source, } = parameters;
    if (subscriptionParameters.activate) {
        // A custom activate hook owns settlement and record creation.
        return subscriptionParameters.activate({
            accessKey,
            credential,
            input,
            request,
            resolved,
            source,
        });
    }
    if (!source) {
        throw new VerificationFailedError({ reason: 'subscription payer is missing' });
    }
    // Automatic activation bills the first period and persists the recurring
    // billing authority needed for request-path and background renewals.
    const reference = await submitSubscriptionPayment({
        accessKey,
        getClient: auto.getClient,
        keyAuthorization: auto.keyAuthorization,
        lookupKey: resolved.key,
        request,
        settlementReference: auto.challengeId,
        source,
        store: auto.store,
        waitForConfirmation: auto.waitForConfirmation,
    });
    const timestamp = new Date().toISOString();
    const subscription = {
        accessKey,
        amount: request.amount,
        billingAnchor: timestamp,
        chainId: request.methodDetails?.chainId,
        currency: request.currency,
        externalId: request.externalId,
        keyAuthorization: auto.keyAuthorization,
        lastChargedPeriod: 0,
        lookupKey: resolved.key,
        payer: source,
        periodCount: request.periodCount,
        periodUnit: request.periodUnit,
        recipient: request.recipient,
        reference,
        subscriptionExpires: request.subscriptionExpires,
        subscriptionId: createSubscriptionId(),
        timestamp,
    };
    return {
        receipt: SubscriptionReceipt.createSubscriptionReceipt(subscription),
        subscription,
    };
}
async function settleRenewal(parameters) {
    const { expectedLookupKey, periodIndex, renew, request, store, subscription } = parameters;
    const inFlightReference = renewalReference(subscription.subscriptionId, periodIndex);
    const renewal = await store.renew({
        inFlightReference,
        periodIndex,
        async renew({ inFlightReference, periodIndex, subscription: started }) {
            const renewed = withSubscriptionAccessKey(await renew({
                inFlightReference,
                periodIndex,
                subscription: started,
            }), started.accessKey);
            validateSubscriptionSettlement(renewed, {
                expectedLookupKey,
                expectedPeriodIndex: periodIndex,
                expectedSubscriptionId: subscription.subscriptionId,
                previous: started,
                request,
            });
            return renewed;
        },
        subscriptionId: subscription.subscriptionId,
    });
    if (renewal.status === 'charged') {
        return { receipt: SubscriptionReceipt.fromRecord(renewal.subscription), status: 'charged' };
    }
    if (renewal.status === 'inFlight') {
        return { receipt: SubscriptionReceipt.fromRecord(renewal.subscription), status: 'inFlight' };
    }
    if (renewal.status === 'renewed')
        return { result: renewal.result, status: 'renewed' };
    if (renewal.status === 'claimMismatch') {
        throw new VerificationFailedError({ reason: 'subscription renewal claim mismatch' });
    }
    return null;
}
function renewalReference(subscriptionId, periodIndex) {
    // This stable identifier is persisted before the billing hook runs so apps can
    // use it as an idempotency/reconciliation key if a renewal crashes mid-flight.
    return `renewal:${subscriptionId}:${periodIndex}`;
}
function withSubscriptionAccessKey(result, accessKey) {
    if (!accessKey || result.subscription.accessKey)
        return result;
    return {
        ...result,
        subscription: {
            ...result.subscription,
            accessKey,
        },
    };
}
function getPeriodIndex(subscription) {
    const anchor = new Date(subscription.billingAnchor).getTime();
    const expires = new Date(subscription.subscriptionExpires).getTime();
    const now = Date.now();
    if (!Number.isFinite(anchor) || !Number.isFinite(expires) || now >= expires) {
        return Number.POSITIVE_INFINITY;
    }
    let periodSeconds;
    try {
        periodSeconds = toSubscriptionPeriodSeconds(subscription);
    }
    catch {
        return Number.POSITIVE_INFINITY;
    }
    return Math.max(0, Math.floor((now - anchor) / (periodSeconds * 1_000)));
}
function isActive(subscription) {
    if (subscription.canceledAt || subscription.revokedAt)
        return false;
    return new Date(subscription.subscriptionExpires).getTime() > Date.now();
}
function isReusableSubscription(subscription, request) {
    return (isActive(subscription) &&
        getPeriodIndex(subscription) <= subscription.lastChargedPeriod &&
        subscriptionMatchesRequest(subscription, request));
}
function subscriptionMatchesRequest(subscription, request) {
    const actual = comparableSubscriptionBinding(subscription);
    const expected = comparableSubscriptionBinding(request);
    return Object.keys(expected).every((key) => actual[key] === expected[key]);
}
function comparableSubscriptionBinding(value) {
    const chainId = 'chainId' in value ? value.chainId : value.methodDetails?.chainId;
    return {
        amount: value.amount,
        chainId,
        currency: value.currency.toLowerCase(),
        externalId: value.externalId,
        periodCount: value.periodCount,
        periodUnit: value.periodUnit,
        recipient: value.recipient.toLowerCase(),
        subscriptionExpires: value.subscriptionExpires,
    };
}
function validateSubscriptionSettlement(result, options) {
    const { receipt, subscription } = result;
    assertSubscriptionReceipt(receipt, subscription);
    assertSubscriptionRecord(subscription, options);
    if (options.request) {
        assertSubscriptionRequestMatch(subscription, options.request);
    }
    else if (options.previous) {
        assertSubscriptionRequestMatch(subscription, options.previous);
    }
}
function assertSubscriptionReceipt(receipt, subscription) {
    if (receipt.method !== 'tempo' || receipt.status !== 'success') {
        throw new VerificationFailedError({ reason: 'subscription receipt is invalid' });
    }
    if (receipt.subscriptionId !== subscription.subscriptionId) {
        throw new VerificationFailedError({ reason: 'subscription receipt id mismatch' });
    }
    if (receipt.reference !== subscription.reference) {
        throw new VerificationFailedError({ reason: 'subscription receipt reference mismatch' });
    }
    if (receipt.timestamp !== subscription.timestamp) {
        throw new VerificationFailedError({ reason: 'subscription receipt timestamp mismatch' });
    }
    assertTransactionHash(receipt.reference, 'subscription reference must be a transaction hash');
    assertValidDate(receipt.timestamp, 'subscription receipt timestamp is invalid');
}
function assertSubscriptionRecord(subscription, options) {
    assertBase64Url(subscription.subscriptionId, 'subscriptionId must be base64url');
    assertTransactionHash(subscription.reference, 'subscription reference must be a transaction hash');
    const billingAnchor = assertValidDate(subscription.billingAnchor, 'subscription billingAnchor is invalid');
    const subscriptionExpires = assertValidDate(subscription.subscriptionExpires, 'subscriptionExpires is invalid');
    assertEqual(subscription.lookupKey, options.expectedLookupKey, {
        reason: 'subscription lookupKey does not match the resolved key',
    });
    assertEqual(subscription.lastChargedPeriod, options.expectedPeriodIndex, {
        reason: 'subscription lastChargedPeriod does not match the settled period',
    });
    if (options.expectedSubscriptionId) {
        assertEqual(subscription.subscriptionId, options.expectedSubscriptionId, {
            reason: 'subscriptionId does not match the active subscription',
        });
    }
    if (billingAnchor >= subscriptionExpires) {
        throw new VerificationFailedError({
            reason: 'subscription billingAnchor must be before subscriptionExpires',
        });
    }
}
function assertSubscriptionRequestMatch(subscription, request) {
    if (!subscriptionMatchesRequest(subscription, request)) {
        throw new VerificationFailedError({ reason: 'subscription record does not match request' });
    }
}
function assertBase64Url(value, reason) {
    if (!/^[A-Za-z0-9_-]+$/.test(value)) {
        throw new VerificationFailedError({ reason });
    }
}
function assertTransactionHash(value, reason) {
    if (!/^0x[0-9a-fA-F]{64}$/.test(value)) {
        throw new VerificationFailedError({ reason });
    }
}
function assertValidDate(value, reason) {
    const milliseconds = new Date(value).getTime();
    if (!Number.isFinite(milliseconds)) {
        throw new VerificationFailedError({ reason });
    }
    return milliseconds;
}
function assertEqual(actual, expected, options) {
    if (actual !== expected) {
        throw new VerificationFailedError(options);
    }
}
function subscriptionBinding(request) {
    return {
        amount: request.amount,
        chainId: request.methodDetails?.chainId,
        currency: request.currency,
        externalId: request.externalId,
        periodCount: request.periodCount,
        periodUnit: request.periodUnit,
        recipient: request.recipient,
        subscriptionExpires: request.subscriptionExpires,
    };
}
function resolveRenewalHandler(parameters) {
    const { getClient, parameters: subscriptionParameters, store, subscription, waitForConfirmation, } = parameters;
    if (subscriptionParameters.renew)
        return subscriptionParameters.renew;
    if (!subscription.accessKey || !subscription.payer)
        return undefined;
    return async ({ inFlightReference, periodIndex, subscription }) => {
        const reference = await submitSubscriptionPayment({
            accessKey: subscription.accessKey,
            getClient,
            lookupKey: subscription.lookupKey,
            request: subscription,
            settlementReference: inFlightReference,
            source: subscription.payer,
            store,
            waitForConfirmation,
        });
        const record = {
            ...subscription,
            lastChargedPeriod: periodIndex,
            reference,
            timestamp: new Date().toISOString(),
        };
        return {
            receipt: SubscriptionReceipt.createSubscriptionReceipt(record),
            subscription: record,
        };
    };
}
async function submitSubscriptionPayment(parameters) {
    const { accessKey, getClient, keyAuthorization, lookupKey, request, settlementReference, source, store, waitForConfirmation, } = parameters;
    const stored = await store.getAccessKey(lookupKey);
    if (!stored) {
        throw new VerificationFailedError({ reason: 'subscription access key is missing' });
    }
    const rawAccessAccount = TempoAccount.fromSecp256k1(stored.privateKey);
    if (!isAddressEqual(rawAccessAccount.address, accessKey.accessKeyAddress)) {
        throw new VerificationFailedError({
            reason: 'subscription access key does not match stored key',
        });
    }
    const chainId = request.methodDetails?.chainId ?? source.chainId;
    const client = await getClient({ chainId });
    const account = TempoAccount.fromSecp256k1(stored.privateKey, {
        access: source.address,
    });
    const memo = Attribution.encode({
        challengeId: settlementReference,
        serverId: lookupKey,
    });
    const serializedTransaction = await signTransaction(client, {
        account,
        calls: [
            {
                data: encodeFunctionData({
                    abi: Abis.tip20,
                    functionName: 'transferWithMemo',
                    args: [request.recipient, BigInt(request.amount), memo],
                }),
                to: request.currency,
            },
        ],
        chainId,
        ...(keyAuthorization
            ? { keyAuthorization: KeyAuthorization.deserialize(keyAuthorization) }
            : {}),
    });
    const transaction = Transaction.deserialize(serializedTransaction);
    await viem_call(client, {
        ...transaction,
        account: transaction.from,
        calls: transaction.calls,
    });
    if (!waitForConfirmation) {
        return sendRawTransaction(client, {
            serializedTransaction: serializedTransaction,
        });
    }
    const receipt = await sendRawTransactionSync(client, {
        serializedTransaction: serializedTransaction,
    });
    if (receipt.status !== 'success') {
        throw new VerificationFailedError({
            reason: `subscription transaction reverted: ${receipt.transactionHash}`,
        });
    }
    return receipt.transactionHash;
}
function createSubscriptionId() {
    const bytes = new Uint8Array(18);
    globalThis.crypto.getRandomValues(bytes);
    return Base64.fromBytes(bytes, { url: true }).replace(/=+$/, '');
}
/**
 * Renews an overdue subscription outside of the HTTP request path.
 * Intended for cron jobs or background workers that bill subscriptions on a schedule.
 *
 * Returns the renewal result if the subscription was overdue, or `null` if already current.
 */
export async function renew(parameters) {
    const { store: rawStore, waitForConfirmation = true } = parameters;
    const store = SubscriptionStore.fromStore(rawStore, {
        renewalTimeoutMs: parameters.renewalTimeoutMs,
    });
    const getClient = ClientResolver.getResolver({
        chain: tempo_chain,
        getClient: parameters.getClient,
        rpcUrl: defaults.rpcUrl,
    });
    const record = await store.get(parameters.subscriptionId);
    if (!record)
        return null;
    if (!isActive(record))
        return null;
    const active = await store.getByKey(record.lookupKey);
    if (active?.subscriptionId !== record.subscriptionId)
        return null;
    const periodIndex = getPeriodIndex(record);
    if (periodIndex <= record.lastChargedPeriod)
        return null;
    const renew = resolveRenewalHandler({
        getClient,
        parameters,
        store,
        subscription: record,
        waitForConfirmation,
    });
    if (!renew)
        return null;
    const renewal = await settleRenewal({
        expectedLookupKey: record.lookupKey,
        periodIndex,
        renew,
        store,
        subscription: record,
    });
    return renewal?.status === 'renewed' ? renewal.result : null;
}
//# sourceMappingURL=Subscription.js.map