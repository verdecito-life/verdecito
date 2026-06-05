// apps/site/src/copy/home.ts
// Home page bilingual copy.
// Source of truth: verdecito_v0_1_final_surface_skeleton_reconciled_q001_onboarding.md §5.
// Q001 onboarding update: hero leads with important AI conversations; adds a
// compact "What's new"; Current Quest reflects the Living Memory Prompt + public
// preview (no "Recovery Kit", no version numbers).

import type { Bi } from '../lib/lang';

export const home: Record<string, Bi> = {
  // Hero
  heroEyebrow:    { en: 'Open-source living memory',
                    es: 'Memoria viva open-source' },
  heroTitle:      { en: 'For work that wants to stay alive.',
                    es: 'Para trabajos que quieren seguir vivos.' },
  heroSubtitle:   { en: 'Open method. Private content. Lineage respected.',
                    es: 'Método abierto. Contenido privado. Linaje respetado.' },
  heroBody:       { en: 'Verdecito helps turn important AI conversations into reusable memory, open methods, and useful traces.',
                    es: 'Verdecito ayuda a convertir conversaciones importantes con IA en memoria reutilizable, métodos abiertos y huellas útiles.' },
  heroPrimary:    { en: 'See Living Memory',        es: 'Ver Memoria Viva' },
  heroSecondary:  { en: 'How the method works',     es: 'Cómo funciona el método' },
  heroMicrolink:  { en: 'Why “Verdecito”?',         es: '¿Por qué “Verdecito”?' },

  // What's new (compact update block)
  newsLabel:      { en: 'What’s new',               es: 'Qué hay de nuevo' },
  newsTitle:      { en: 'Living Memory is ready to try',
                    es: 'Memoria Viva ya se puede probar' },
  newsBody:       { en: 'Verdecito’s first public preview helps you turn important AI conversations into reusable Markdown memory. Use it when a ChatGPT, Claude, or other AI chat contains decisions, ideas, corrections, drafts, or context you do not want to lose.',
                    es: 'La primera vista previa pública de Verdecito te ayuda a convertir conversaciones importantes con IA en memoria Markdown reutilizable. Úsala cuando un chat con ChatGPT, Claude u otra IA contiene decisiones, ideas, correcciones, borradores o contexto que no quieres perder.' },
  newsTryGuide:   { en: 'Try the 4-step guide',     es: 'Probar la guía de 4 pasos' },
  newsReadPrompt: { en: 'Read the prompt',          es: 'Leer el prompt' },
  newsViewSample: { en: 'View the public sample',   es: 'Ver la muestra pública' },

  // Current Quest / Living Memory
  questLabel:     { en: 'Now growing',              es: 'Ahora brotando' },
  questTitle:     { en: 'Living Memory',            es: 'Memoria Viva' },
  questObject:    { en: 'Q001 — Recover important AI conversations into Living Memory',
                    es: 'Q001 — Recuperar conversaciones importantes con IA como Memoria Viva' },
  questBody:      { en: 'A working method for turning meaningful AI chats into durable memory, decisions, and reusable traces — without reducing ideas to tasks and without making private content public.',
                    es: 'Un método ya en uso para convertir chats significativos con IA en memoria durable, decisiones y huellas reutilizables — sin reducir las ideas a tareas y sin volver público lo privado.' },
  questBridge:    { en: 'Living Memory is the first public quest; Verdecito itself is the broader method that grows real work into reusable open pieces.',
                    es: 'Memoria Viva es el primer quest público; Verdecito es el método más amplio que convierte trabajo real en piezas abiertas y reutilizables.' },
  questProof:     { en: 'A working public preview exists. The current quest is onboarding: make it easy to try, inspect, correct, and improve through real use.',
                    es: 'Ya existe una vista previa pública funcional. El quest actual es onboarding: hacerla fácil de probar, inspeccionar, corregir y mejorar desde uso real.' },
  questStatus:    { en: 'Active · Living Memory Prompt · Public preview',
                    es: 'Activo · Prompt de Memoria Viva · Vista previa pública' },
  questPrimary:   { en: 'Open Living Memory',        es: 'Abrir Memoria Viva' },
  questSecondary: { en: 'See how the method works',  es: 'Ver cómo funciona el método' },

  // Method teaser
  methodTitle:    { en: 'A small method for work that keeps changing.',
                    es: 'Un método pequeño para trabajos que siguen cambiando.' },
  methodIntro:    { en: 'Verdecito does not force living work into a single format. It gives it enough structure to keep moving.',
                    es: 'Verdecito no obliga al trabajo vivo a entrar en un solo formato. Le da la estructura suficiente para seguir avanzando.' },
  seedsTitle:     { en: 'Seeds',   es: 'Semillas' },
  seedsBody:      { en: 'Living possibilities, public or private, small or ambitious.',
                    es: 'Posibilidades vivas, públicas o privadas, pequeñas o ambiciosas.' },
  questsTitle:    { en: 'Quests',  es: 'Quests' },
  questsBody:     { en: 'Focused efforts that move selected seeds through real work, lineage, risk, and evidence.',
                    es: 'Esfuerzos concretos que hacen avanzar semillas seleccionadas con trabajo real, linaje, riesgos y evidencia.' },
  sproutsTitle:   { en: 'Sprouts', es: 'Brotes' },
  sproutsBody:    { en: 'Usable outputs: templates, prompts, repos, methods, examples, pages, and reports.',
                    es: 'Resultados reutilizables: plantillas, prompts, repositorios, métodos, ejemplos, páginas y reportes.' },
  methodCta:      { en: 'How the method works', es: 'Cómo funciona el método' },

  // Lineage strip
  lineageText:    { en: 'Verdecito stands on older threads: regenerative economics, Buen Vivir, open-source commons, digital gardens, civic deliberation, regenerative communities, and public-interest AI.',
                    es: 'Verdecito se apoya en raíces más antiguas: economías regenerativas, Buen Vivir, bienes comunes open-source, jardines digitales, deliberación cívica, comunidades regenerativas e IA de interés público.' },
  lineageLink:    { en: 'See the lineage', es: 'Ver las raíces' },

  // Support teaser
  supportText:    { en: 'Verdecito will remain open-source work. Support changes the pace, depth, and care available for the work — not the openness of the method.',
                    es: 'Verdecito seguirá siendo trabajo de código libre y abierto. El apoyo cambia el ritmo, la profundidad y el cuidado disponibles para el trabajo — no la apertura del método.' },
  supportCta:     { en: 'Support Verdecito', es: 'Apoyar a Verdecito' },
};
// apps/site/src/copy/home.ts
