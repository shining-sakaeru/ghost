import type { Address, Client } from 'viem';
export declare function resolveFeeToken(parameters: {
    account: Address;
    candidateTokens?: readonly Address[] | undefined;
    client: Client;
}): Promise<Address | undefined>;
//# sourceMappingURL=fee-token.d.ts.map