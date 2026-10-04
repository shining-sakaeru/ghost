interface CleanHTMLArgs {
    html?: string;
    opinionated?: boolean;
    cards?: boolean;
}
declare const cleanHTML: (args?: CleanHTMLArgs) => string;
export { cleanHTML };
