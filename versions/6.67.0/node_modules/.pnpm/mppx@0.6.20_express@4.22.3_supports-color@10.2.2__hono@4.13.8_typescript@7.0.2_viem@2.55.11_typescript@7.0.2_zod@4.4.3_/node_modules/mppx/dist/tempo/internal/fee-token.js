import { Actions, TokenId } from 'viem/tempo';
import * as TempoAddress from './address.js';
import * as defaults from './defaults.js';
function pushUnique(tokens, token) {
    if (!token)
        return;
    if (tokens.some((t) => TempoAddress.isEqual(t, token)))
        return;
    tokens.push(token);
}
async function hasBalance(client, account, token) {
    try {
        return (await Actions.token.getBalance(client, { account, token })) > 0n;
    }
    catch {
        return false;
    }
}
function getChainFeeToken(client) {
    const feeToken = client.chain
        ?.feeToken;
    if (feeToken)
        return TokenId.toAddress(feeToken);
    const chainId = client.chain?.id;
    return chainId ? defaults.currency[chainId] : undefined;
}
export async function resolveFeeToken(parameters) {
    const { account, candidateTokens, client } = parameters;
    const tokens = [];
    const userToken = await Actions.fee
        .getUserToken(client, { account })
        .then((token) => token?.address)
        .catch(() => undefined);
    pushUnique(tokens, userToken);
    pushUnique(tokens, getChainFeeToken(client));
    for (const token of candidateTokens ?? [])
        pushUnique(tokens, token);
    for (const token of tokens) {
        if (await hasBalance(client, account, token))
            return token;
    }
    return tokens[0];
}
//# sourceMappingURL=fee-token.js.map