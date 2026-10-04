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
import { createGenerateResources, createI18n, LOCALE_DATA, SUPPORTED_LOCALES, } from './i18n-core.js';
/**
 * Shared body of every per-namespace browser entry. Collects a Vite
 * `import.meta.glob` result (path -> resource JSON) into a locale-keyed registry
 * and builds the namespaced i18n instance.
 *
 * This exists because Vite requires the `import.meta.glob` pattern to be a string
 * literal, so each namespace needs its own tiny entry to hold that literal — but
 * the parsing/wiring is identical, so it lives here once.
 */
export function i18nFromGlob(globModules, namespace) {
    const registry = {};
    for (const [filePath, resource] of Object.entries(globModules)) {
        const locale = /\/locales\/([^/]+)\//.exec(filePath)?.[1];
        if (locale) {
            registry[locale] = resource;
        }
    }
    return createNamespacedI18n(registry, namespace);
}
export function createNamespacedI18n(registry, boundNamespace) {
    // Registry loader: returns undefined for an unknown locale so the core falls
    // back to English (mirrors the Node loader's try/catch fallback).
    const generateResources = createGenerateResources((locale) => registry[locale]);
    const generateThemeResources = (lng) => ({ [lng]: { theme: {} } });
    const i18n = Object.assign(createI18n({ generateResources, generateThemeResources }), {
        LOCALE_DATA,
        SUPPORTED_LOCALES,
        generateResources,
        namespace: boundNamespace,
    });
    i18n.default = i18n;
    return i18n;
}
export { LOCALE_DATA, SUPPORTED_LOCALES };
//# sourceMappingURL=esm-factory.js.map