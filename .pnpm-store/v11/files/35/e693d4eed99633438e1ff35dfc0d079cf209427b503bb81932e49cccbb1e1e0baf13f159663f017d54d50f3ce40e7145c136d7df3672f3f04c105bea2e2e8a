import * as Ws_ from '../session/Ws.js';
import { charge as charge_ } from './Charge.js';
import { session as session_, settle as settle_ } from './Session.js';
import { renew as renewSubscription_, subscription as subscription_ } from './Subscription.js';
/**
 * Creates both Tempo `charge` and `session` methods from shared parameters.
 *
 * @example
 * ```ts
 * import { Mppx, tempo } from 'mppx/server'
 *
 * const mppx = Mppx.create({
 *   methods: [tempo({ currency: '0x...', recipient: '0x...' })],
 * })
 * ```
 */
export function tempo(parameters) {
    return [
        tempo.charge(parameters),
        tempo.session(parameters),
    ];
}
(function (tempo) {
    /** Creates a Tempo `charge` method for one-time TIP-20 token transfers. */
    tempo.charge = charge_;
    /** Creates a Tempo `session` method for session-based TIP-20 token payments. */
    tempo.session = session_;
    /** Creates a Tempo `subscription` method for recurring TIP-20 token payments. */
    tempo.subscription = subscription_;
    /** Renews an overdue Tempo subscription outside of the HTTP request path. */
    tempo.renewSubscription = renewSubscription_;
    /** One-shot settle: reads highest voucher from storage and submits on-chain. */
    tempo.settle = settle_;
    /** Experimental websocket helpers for Tempo sessions. */
    tempo.Ws = Ws_;
})(tempo || (tempo = {}));
//# sourceMappingURL=Methods.js.map