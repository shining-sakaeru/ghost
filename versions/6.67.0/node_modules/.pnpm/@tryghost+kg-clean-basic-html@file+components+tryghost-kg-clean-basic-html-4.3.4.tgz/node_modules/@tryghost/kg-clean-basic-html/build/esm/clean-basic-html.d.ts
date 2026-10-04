export interface CleanBasicHtmlOptions {
    allowBr?: boolean;
    firstChildInnerContent?: boolean;
    removeCodeWrappers?: boolean;
    createDocument?: (html: string) => Document;
}
export declare function cleanBasicHtml(html?: string, _options?: CleanBasicHtmlOptions): string;
//# sourceMappingURL=clean-basic-html.d.ts.map