import { Cli } from 'incur';
declare const cli: Cli.Cli<{
    [x: string]: {
        args: {
            url: string;
        };
        options: {
            confirm: boolean;
            silent: boolean;
            userAgent: string;
            verbose: number;
            account?: string | undefined;
            autoSwap?: boolean | undefined;
            config?: string | undefined;
            data?: string | undefined;
            fail?: boolean | undefined;
            header?: string[] | undefined;
            include?: boolean | undefined;
            insecure?: boolean | undefined;
            jsonBody?: string | undefined;
            location?: boolean | undefined;
            method?: string | undefined;
            methodOpt?: string[] | undefined;
            network?: "mainnet" | "testnet" | undefined;
            payWith?: string | undefined;
            rpcUrl?: string | undefined;
            slippage?: number | undefined;
        };
    };
}, undefined, undefined>;
export default cli;
//# sourceMappingURL=cli.d.ts.map