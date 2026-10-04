// Per-namespace browser entry — import as '@tryghost/i18n/registry/portal'.
// Only the literal glob pattern + namespace name live here (Vite requires the
// glob to be a string literal); all wiring is in ../esm-factory.ts.
import { i18nFromGlob } from '../esm-factory.js';
const i18n = i18nFromGlob(import.meta.glob('../../locales/*/portal.json', { eager: true, import: 'default' }), 'portal');
export default i18n;
export const { LOCALE_DATA, SUPPORTED_LOCALES, generateResources } = i18n;
//# sourceMappingURL=portal.js.map