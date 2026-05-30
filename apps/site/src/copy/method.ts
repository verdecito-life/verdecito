// apps/site/src/copy/method.ts
// Method page bilingual copy. Verbatim from skeleton §7. Fixed copy — no silent edits.

import type { Bi } from '../lib/lang';

export const method: Record<string, Bi> = {
  // Hero
  heroEyebrow:   { en: 'The Verdecito method', es: 'El método Verdecito' },
  heroTitle:     { en: 'A small structure for living work.',
                   es: 'Una estructura pequeña para trabajo vivo.' },
  heroSubtitle:  { en: 'Enough form to continue. Enough openness to adapt.',
                   es: 'Suficiente forma para continuar. Suficiente apertura para adaptarse.' },
  heroBody:      { en: 'Verdecito helps conversations, ideas, and projects become seeds, quests, and sprouts: visible enough to work with, protected enough to stay honest, and open enough to be forked, questioned, or improved.',
                   es: 'Verdecito ayuda a que conversaciones, ideas y proyectos se conviertan en semillas, quests y brotes: suficientemente visibles para trabajar con ellos, suficientemente protegidos para mantenerse honestos y suficientemente abiertos para ser forkeados, cuestionados o mejorados.' },
  heroPrimary:   { en: 'See Living Memory', es: 'Ver Memoria Viva' },
  heroSecondary: { en: 'Support the work',  es: 'Apoyar el trabajo' },

  // Core objects
  objTitle:      { en: 'The method uses three simple forms.',
                   es: 'El método usa tres formas simples.' },
  objIntro:      { en: 'These are not rigid categories. They are simple forms for work that is still changing.',
                   es: 'No son categorías rígidas. Son formas simples de dar forma a trabajo que todavía está cambiando.' },
  seedsTitle:    { en: 'Seeds', es: 'Semillas' },
  seedsBody:     { en: 'A seed is a living possibility: an idea, intuition, problem, dream, proposal, or fragment that may deserve future work.',
                   es: 'Una semilla es una posibilidad viva: una idea, intuición, problema, sueño, propuesta o fragmento que puede merecer trabajo futuro.' },
  seedsExample:  { en: 'Example: “Could meaningful AI conversations become reusable memory instead of disappearing?”',
                   es: 'Ejemplo: “¿Podrían las conversaciones significativas con IA convertirse en memoria reutilizable en vez de desaparecer?”' },
  questsTitle:   { en: 'Quests', es: 'Quests' },
  questsBody:    { en: 'A quest is a focused line of work that moves a selected seed through reality: lineage, risk, evidence, decisions, and outputs.',
                   es: 'Un quest es una línea de trabajo concreta que hace avanzar una semilla seleccionada a través de realidad: linaje, riesgos, evidencia, decisiones y resultados.' },
  questsExample: { en: 'Example: Q001 — publish a Recovery Kit for Living Memory.',
                   es: 'Ejemplo: Q001 — publicar un Recovery Kit para Memoria Viva.' },
  sproutsTitle:  { en: 'Sprouts', es: 'Brotes' },
  sproutsBody:   { en: 'A sprout is a usable result from a quest: a template, prompt, page, repo, report, method, sample, or small tool.',
                   es: 'Un brote es un resultado reutilizable que nace de un quest: una plantilla, prompt, página, repositorio, reporte, método, ejemplo o pequeña herramienta.' },
  sproutsExample:{ en: 'Example: a public recovery template that someone can adapt.',
                   es: 'Ejemplo: una plantilla pública de recuperación que otra persona puede adaptar.' },

  // Privacy and visibility
  privTitle:     { en: 'The method can be public without making everything public.',
                   es: 'El método puede ser público sin volver todo público.' },
  privBody:      { en: 'Verdecito separates the method from the content. A template, prompt, or process can be open while the original conversation, personal context, or early draft remains protected.',
                   es: 'Verdecito separa el método del contenido. Una plantilla, prompt o proceso puede ser abierto mientras la conversación original, el contexto personal o un borrador inicial se mantiene protegido.' },
  privTrust:     { en: 'The default is not extraction. The default is consent, context, and care.',
                   es: 'El punto de partida no es la extracción. Es consentimiento, contexto y cuidado.' },

  // Lineage
  linTitle:      { en: 'Lineage matters.', es: 'Las raíces importan.' },
  linBody:       { en: 'Verdecito stands on older threads: regenerative economics, Buen Vivir, open-source commons, digital gardens, civic deliberation, regenerative communities, and public-interest AI.',
                   es: 'Verdecito se apoya en raíces más antiguas: economías regenerativas, Buen Vivir, bienes comunes open-source, jardines digitales, deliberación cívica, comunidades regenerativas e IA de interés público.' },
  linFollowup:   { en: 'A quest asks what already exists before claiming novelty. If someone has already made a better path, Verdecito learns from it, links to it, forks it, or contributes back.',
                   es: 'Un quest pregunta qué existe antes de reclamar novedad. Si alguien ya abrió un mejor camino, Verdecito aprende de eso, lo enlaza, lo forkea o contribuye de vuelta.' },

  // AI use
  aiTitle:       { en: 'AI is part of the work, not the owner of it.',
                   es: 'La IA es parte del trabajo, no la dueña del trabajo.' },
  aiBody:        { en: 'Verdecito uses AI to help listen, structure, compare, draft, recover, and notice patterns. Human judgment still decides what matters, what is shared, what is corrected, and what becomes public.',
                   es: 'Verdecito usa IA para ayudar a escuchar, estructurar, comparar, redactar, recuperar y notar patrones. El criterio humano sigue decidiendo qué importa, qué se comparte, qué se corrige y qué se vuelve público.' },
  aiTrust:       { en: 'The goal is not more output. The goal is better progress.',
                   es: 'El objetivo no es producir más. Es avanzar mejor.' },

  // Acknowledgments
  ackTitle:      { en: 'Built with visible tools.', es: 'Construido con herramientas visibles.' },
  ackBody:       { en: 'Verdecito credits the people, tools, and projects it builds with. The v0.1 site uses Astro, GitHub, GitHub Pages, and open-source workflows.',
                   es: 'Verdecito reconoce a las personas, herramientas y proyectos con los que se construye. El sitio v0.1 usa Astro, GitHub, GitHub Pages y flujos de trabajo open-source.' },

  // Closing CTA
  closeTitle:    { en: 'See the method in use.', es: 'Ver el método en práctica.' },
  closeBody:     { en: 'Living Memory is the first public quest: a practical test of whether meaningful conversations can become durable, private-by-default, reusable memory.',
                   es: 'Memoria Viva es el primer quest público: una prueba práctica de si conversaciones significativas pueden convertirse en memoria durable, privada por defecto y reutilizable.' },
  closePrimary:  { en: 'Open Living Memory', es: 'Abrir Memoria Viva' },
  closeSecondary:{ en: 'Support Verdecito',  es: 'Apoyar a Verdecito' },
};

/** Visibility states: label + description, bilingual. */
export const methodVisibilityStates: { k: Bi; v: Bi }[] = [
  { k: { en: 'Public',  es: 'Público' }, v: { en: 'safe to publish, inspect, fork, and improve.',
                                              es: 'seguro para publicar, inspeccionar, forkear y mejorar.' } },
  { k: { en: 'Teaser',  es: 'Adelanto' },v: { en: 'visible enough to show direction, without exposing the full content.',
                                              es: 'visible lo suficiente para mostrar dirección, sin exponer el contenido completo.' } },
  { k: { en: 'Private', es: 'Privado' }, v: { en: 'kept out of the public surface.',
                                              es: 'fuera de la superficie pública.' } },
];
// apps/site/src/copy/method.ts
