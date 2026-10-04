import type { GenerateResources, GenerateThemeResources, I18nOptions, LocaleDataEntry, Namespace, ResourceLoader, TranslationResource } from './types.ts';
export declare const LOCALE_DATA: LocaleDataEntry[];
export declare const SUPPORTED_LOCALES: string[];
export declare function mergeDefaultExport(res: TranslationResource): TranslationResource;
export declare function createGenerateResources(loadResource: ResourceLoader): GenerateResources;
export declare function createI18n({ generateThemeResources, generateResources, }: {
    generateThemeResources: GenerateThemeResources;
    generateResources: GenerateResources;
}): (lng?: string, ns?: Namespace | string, options?: I18nOptions) => import("i18next", { with: { "resolution-mode": "require" } }).i18n;
//# sourceMappingURL=i18n-core.d.ts.map