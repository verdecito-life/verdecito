// apps/site/src/copy/common.ts
// Shared bilingual copy + constants for the Verdecito v0.1 public surface.
// Source of truth: verdecito_v0_1_launch_correction_skeleton.md
//   §1 Navigation, §4 Header/Footer, Appendix A routes, Appendix B image map.
//
// Fixed copy. Do not change taglines, nav labels, or footer labels silently.

import type { Bi } from '../lib/lang';

/** External + contact constants (mapped values, not prose). */
export const site = {
  repoUrl:     'https://github.com/verdecito-life/verdecito',
  licenseUrl:  'https://github.com/verdecito-life/verdecito/blob/main/LICENSE',
  sponsorsUrl: 'https://github.com/sponsors/rivera-ernesto',
  contactEmail: 'verdecito@barranco.life',
};

/** mailto: with a prefilled subject. */
export function mailto(subject: string): string {
  return `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}`;
}

/**
 * Living Memory public artifacts — single source of truth.
 *
 * The prompt and the public anonymized sample are rendered to real HTML routes
 * at build time (EN paths below; localizePath() derives the ES paths). Those
 * readable pages are the canonical public location of the prompt: a visitor can
 * open the page, read it, copy the page URL from the browser to paste into
 * another assistant, or download the raw Markdown. No opaque download-only path,
 * no visible placeholder URL shipped in copy.
 */
export const living = {
  promptPage: '/quests/Q001/prompt',   // EN canonical; localizePath → /es/quests/Q001/prompt
  samplePage: '/quests/Q001/sample',
  promptDownload: '/downloads/RecoverThisChat_LivingMemoryPrompt.md',
  sampleDownload: '/downloads/Ecotourism_Pilot_Recovery_Redacted.md',
};

/** Top nav — four items. About stays off the top nav (skeleton §1). */
export const nav: { path: string; label: Bi }[] = [
  { path: '/',            label: { en: 'Home',          es: 'Inicio' } },
  { path: '/quests/Q001', label: { en: 'Living Memory', es: 'Memoria Viva' } },
  { path: '/method',      label: { en: 'Method',        es: 'Método' } },
  { path: '/support',     label: { en: 'Support',       es: 'Apoyar' } },
];

/** Wordmark — single token, never split into multiple colors. */
export const wordmark = 'Verdecito';

/** Footer links (skeleton §4). External flag controls target/rel + base prefix. */
export const footerLinks: { label: Bi; href: string; external?: boolean; hash?: string }[] = [
  { label: { en: 'Repo',    es: 'Repo' },     href: site.repoUrl,    external: true },
  { label: { en: 'License', es: 'Licencia' }, href: site.licenseUrl, external: true },
  { label: { en: 'Lineage', es: 'Raíces' },   href: '/method',       hash: '#lineage' },
  { label: { en: 'About',   es: 'Acerca' },   href: '/about' },
  { label: { en: 'Contact', es: 'Contacto' }, href: mailto('General contact'), external: true },
];

/** Closing line (skeleton §4 / About footer note). */
export const closingLine: Bi = {
  en: 'Verdecito lo que salga — let it sprout. 🌿',
  es: 'Verdecito lo que salga. 🌿',
};

/** Language switch labels. */
export const langSwitch = { en: 'EN', es: 'ES' };

/** Production site-ready images (skeleton Appendix B). Paths are base-prefixed
 *  at render time. Filenames are the clean-handoff names. */
export const images = {
  home: {
    src: '/images/home-hero.png',
    w: 1774, h: 887,
    alt: {
      en: 'A quiet hand-drawn image of a small living structure with roots and open paths, suggesting ideas becoming durable without losing their life.',
      es: 'Ilustración tranquila de una pequeña estructura viva con raíces y caminos abiertos, sugiriendo ideas que se vuelven duraderas sin perder vida.',
    } as Bi,
  },
  livingMemory: {
    src: '/images/living-memory.png',
    w: 1693, h: 929,
    alt: {
      en: 'A quiet hand-drawn image of conversation-like lines becoming small reusable living traces, suggesting memory that can be carried forward without exposing everything.',
      es: 'Ilustración tranquila de líneas parecidas a conversación que se convierten en pequeñas huellas vivas reutilizables, sugiriendo memoria que puede continuar sin exponerlo todo.',
    } as Bi,
  },
  method: {
    src: '/images/method.png',
    w: 1774, h: 887,
    alt: {
      en: 'A hand-drawn modular image of open paths, protected chambers, and roots, suggesting a method that can be public while some content remains private.',
      es: 'Ilustración modular hecha a mano de caminos abiertos, cámaras protegidas y raíces, sugiriendo un método que puede ser público mientras parte del contenido permanece privado.',
    } as Bi,
  },
  support: {
    src: '/images/support.png',
    w: 1774, h: 887,
    alt: {
      en: 'A quiet hand-drawn image of a small plant supported by water, light, soil, shared roots, and an open path, suggesting care that helps work continue.',
      es: 'Ilustración tranquila de una pequeña planta sostenida por agua, luz, suelo, raíces compartidas y un camino abierto, sugiriendo cuidado que ayuda a que el trabajo continúe.',
    } as Bi,
  },
};

/** Per-page <meta description>. Kept short; not public body prose. */
export const metaDescription: Record<string, Bi> = {
  home: {
    en: 'Open method. Private content. Lineage respected. Verdecito helps turn important AI conversations into reusable memory, open methods, and useful traces.',
    es: 'Método abierto. Contenido privado. Linaje respetado. Verdecito ayuda a convertir conversaciones importantes con IA en memoria reutilizable, métodos abiertos y huellas útiles.',
  },
  livingMemory: {
    en: 'Q001 — a public method for turning meaningful conversations into durable, private-by-default, reusable memory.',
    es: 'Q001 — un método público para convertir conversaciones significativas en memoria durable, privada por defecto y reutilizable.',
  },
  method: {
    en: 'A small structure for living work: seeds, quests, sprouts. Public method, private content by default, visible lineage.',
    es: 'Una estructura pequeña para trabajo vivo: semillas, quests, brotes. Método público, contenido privado por defecto, linaje visible.',
  },
  support: {
    en: 'Support changes the pace, depth, and care of the work — not the openness of the method.',
    es: 'El apoyo cambia el ritmo, la profundidad y el cuidado del trabajo — no la apertura del método.',
  },
  about: {
    en: 'Why “Verdecito”? Small enough to begin, alive enough to grow. Rooted in Mallasa, La Paz, Bolivia; open by design.',
    es: '¿Por qué “Verdecito”? Pequeño para empezar, vivo para crecer. Con raíces en Mallasa, La Paz, Bolivia; abierto por diseño.',
  },
};
// apps/site/src/copy/common.ts
