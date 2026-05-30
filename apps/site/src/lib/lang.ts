// apps/site/src/lib/lang.ts
// Minimal bilingual helper for the Verdecito v0.1 public surface.
//
// Every public copy entry is an { en, es } pair (see src/copy/*). Pages pass a
// `lang` and render copy through t(). This keeps EN/ES adjacent in the store and
// guarantees both languages share the same keys and the same render path.
//
// Invariant: public page prose comes ONLY from the copy store, never from
// canonical YAML. Canonical data feeds only mapped metadata fields.

export type Lang = 'en' | 'es';

/** A bilingual copy entry: English and Spanish held side by side. */
export interface Bi { en: string; es: string; }

/** A bilingual list entry (e.g. bullet groups). */
export interface BiList { en: string[]; es: string[]; }

/** Pick one language from a bilingual entry. */
export function t(lang: Lang, entry: Bi): string {
  return entry[lang];
}

/** Pick one language from a bilingual list. */
export function tl(lang: Lang, entry: BiList): string[] {
  return entry[lang];
}

/** html lang attribute value. */
export function htmlLang(lang: Lang): string {
  return lang === 'es' ? 'es' : 'en';
}

/**
 * Map an EN canonical path to its localized path.
 *   localizePath('en', '/method')  -> '/method'
 *   localizePath('es', '/method')  -> '/es/method'
 *   localizePath('es', '/')        -> '/es/'
 * Hash fragments are preserved: '/method#lineage' -> '/es/method#lineage'.
 */
export function localizePath(lang: Lang, enPath: string): string {
  if (lang === 'en') return enPath;
  if (enPath === '/') return '/es/';
  return `/es${enPath}`;
}

/**
 * Build a full site-internal href: BASE prefix + localized path.
 * `base` is import.meta.env.BASE_URL with the trailing slash removed.
 */
export function href(base: string, lang: Lang, enPath: string): string {
  return `${base}${localizePath(lang, enPath)}`;
}
// apps/site/src/lib/lang.ts
