// apps/site/src/data/routes.ts
// Route pairs for hreflang and language switcher.
// Every public route has an EN canonical and an ES equivalent.
// Reused as-is from the clean handoff; verified against skeleton Appendix A.

export const routePairs: Record<string, string> = {
  '/':              '/es/',
  '/quests/Q001':   '/es/quests/Q001',
  '/method':        '/es/method',
  '/support':       '/es/support',
  '/about':         '/es/about',
};

const reversePairs: Record<string, string> = Object.fromEntries(
  Object.entries(routePairs).map(([en, es]) => [es, en]),
);

/**
 * Given the current pathname and BASE prefix, return the alternate-language href.
 * Returns null if the path has no known pair.
 */
export function getAlternateLangHref(
  pathname: string,
  base: string,
): string | null {
  // Strip base prefix to get the canonical path
  const stripped = pathname.startsWith(base)
    ? pathname.slice(base.length) || '/'
    : pathname;

  // Normalize trailing slash for matching
  const key = stripped.endsWith('/') && stripped !== '/'
    ? stripped.slice(0, -1)
    : stripped;

  const pair = routePairs[key] ?? reversePairs[key] ?? null;
  return pair ? `${base}${pair}` : null;
}
// apps/site/src/data/routes.ts
