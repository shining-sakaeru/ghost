// Node entry point for @tryghost/i18n.
import { createGenerateResources, createI18n, LOCALE_DATA, SUPPORTED_LOCALES, } from './i18n-core.js';
import { fileLoader } from './file-loader.js';
import { generateThemeResources } from './theme-resources.js';
const generateResources = createGenerateResources(fileLoader);
const i18n = Object.assign(createI18n({ generateResources, generateThemeResources }), {
    LOCALE_DATA,
    SUPPORTED_LOCALES,
    generateResources,
});
// Self-reference kept for bundlers that unwrap a namespace's default export.
i18n.default = i18n;
export default i18n;
export { LOCALE_DATA, SUPPORTED_LOCALES, generateResources };
//# sourceMappingURL=index.js.map