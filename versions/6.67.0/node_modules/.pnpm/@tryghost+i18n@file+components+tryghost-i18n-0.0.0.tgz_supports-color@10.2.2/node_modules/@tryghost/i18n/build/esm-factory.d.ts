/**
 * Shared factory for the browser/static-registry build.
 *
 * Given a single-namespace registry (locale-code -> resource JSON), returns an
 * i18n factory with the SAME call signature the Node entry exposes:
 *   i18n(locale, ns, options) -> initialised i18next instance
 *
 * Theme resources are stubbed to `{}` — themes are a Node-only, fs-backed concept
 * and never reach the browser.
 *
 * The namespace is fixed at build time by which per-namespace registry module is
 * imported, so bundlers include ONLY that namespace's locale files.
 */
import { LOCALE_DATA, SUPPORTED_LOCALES } from './i18n-core.ts';
import type { I18nFactory, TranslationResource } from './types.ts';
/**
 * Shared body of every per-namespace browser entry. Collects a Vite
 * `import.meta.glob` result (path -> resource JSON) into a locale-keyed registry
 * and builds the namespaced i18n instance.
 *
 * This exists because Vite requires the `import.meta.glob` pattern to be a string
 * literal, so each namespace needs its own tiny entry to hold that literal — but
 * the parsing/wiring is identical, so it lives here once.
 */
export declare function i18nFromGlob(globModules: Record<string, TranslationResource>, namespace: string): I18nFactory;
export declare function createNamespacedI18n(registry: Record<string, TranslationResource>, boundNamespace: string): I18nFactory;
export { LOCALE_DATA, SUPPORTED_LOCALES };
//# sourceMappingURL=esm-factory.d.ts.map