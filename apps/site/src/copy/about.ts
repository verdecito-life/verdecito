// apps/site/src/copy/about.ts
// About / Why Verdecito bilingual copy. Verbatim from skeleton §9. Fixed copy — no silent edits.

import type { Bi, BiList } from '../lib/lang';

export const about: Record<string, Bi> = {
  // Hero
  heroEyebrow:   { en: 'Why “Verdecito”?', es: '¿Por qué “Verdecito”?' },
  heroTitle:     { en: 'Small enough to begin. Alive enough to grow.',
                   es: 'Pequeño para empezar. Vivo para crecer.' },
  heroSubtitle:  { en: 'Verdecito is a name for work that starts small, stays open, and keeps listening to life without forcing what wants to grow.',
                   es: 'Verdecito es un nombre para el trabajo que empieza pequeño, se mantiene abierto y escucha a la vida sin forzar lo que quiere crecer.' },
  heroBody:      { en: 'The name carries a simple direction: make things a little greener, a little more alive, a little more coherent with the world that sustains us.',
                   es: 'El nombre lleva una dirección simple: hacer las cosas un poco más verdes, un poco más vivas, un poco más coherentes con el mundo que nos sostiene.' },
  heroPrimary:   { en: 'See the method', es: 'Ver el método' },
  heroSecondary: { en: 'Open Living Memory', es: 'Abrir Memoria Viva' },

  // The name
  nameTitle:     { en: 'A small green direction', es: 'Un rumbo pequeño y verde' },
  nameBody:      { en: 'Verdecito does not mean a finished ideology. It points to a direction: smaller steps, more care, more life, more openness, more attention to what wants to grow.',
                   es: 'Verdecito no significa una ideología terminada. Apunta a una dirección: pasos más pequeños, más cuidado, más vida, más apertura, más atención a lo que quiere crecer.' },
  nameFollowup:  { en: 'It is intentionally modest. A seed does not need to explain the whole forest before it begins.',
                   es: 'Es modesto a propósito. Una semilla no necesita explicar todo el bosque antes de empezar.' },
  nameCallout:   { en: 'Verdecito lo que salga — let it sprout. 🌿',
                   es: 'Verdecito lo que salga. 🌿' },

  // The stance
  stanceTitle:   { en: 'What Verdecito stands for', es: 'Lo que Verdecito sostiene' },
  stanceIntro:   { en: 'Verdecito gives living work a structure that protects what matters and opens what can be shared.',
                   es: 'Verdecito le da al trabajo vivo una estructura que protege lo importante y abre lo que puede compartirse.' },
  s1Title:       { en: 'Open method', es: 'Método abierto' },
  s1Body:        { en: 'The method can be inspected, questioned, forked, and improved.',
                   es: 'El método puede inspeccionarse, cuestionarse, forkearse y mejorarse.' },
  s2Title:       { en: 'Private content', es: 'Contenido privado' },
  s2Body:        { en: 'The person or community that owns the content decides what becomes public and when.',
                   es: 'La persona o comunidad dueña del contenido decide qué y cuándo se vuelve público.' },
  s3Title:       { en: 'Visible lineage', es: 'Linaje visible' },
  s3Body:        { en: 'Verdecito learns from older roots and related work instead of pretending to start from zero.',
                   es: 'Verdecito aprende de raíces más antiguas y trabajos relacionados en vez de pretender empezar desde cero.' },
  s4Title:       { en: 'Useful sprouts', es: 'Brotes útiles' },
  s4Body:        { en: 'The work aims to leave something usable: a prompt, template, repository, page, example, method, or decision.',
                   es: 'El trabajo busca dejar algo utilizable: un prompt, plantilla, repositorio, página, ejemplo, método o decisión.' },

  // Place and origin
  placeTitle:    { en: 'Rooted in a place, open by design',
                   es: 'Con raíces en un lugar, abierto por diseño' },
  placeBody:     { en: 'Verdecito is being shaped from Mallasa, La Paz, Bolivia, through real conversations, local projects, free and open tools, and AI-assisted workflows.',
                   es: 'Verdecito se está formando desde Mallasa, La Paz, Bolivia, a través de conversaciones reales, proyectos locales, herramientas libres y abiertas, y flujos de trabajo asistidos por IA.' },
  placeFollowup: { en: 'Its first public surface is small on purpose: one method, one current quest, one open invitation to inspect and improve.',
                   es: 'Su primera superficie pública es pequeña a propósito: un método, un quest actual y una invitación abierta a inspeccionar y mejorar.' },

  // How this relates to the method
  relTitle:      { en: 'The name becomes a method', es: 'El nombre se vuelve método' },
  relBody:       { en: 'Verdecito is not only a mood. It becomes practical through a simple pattern: notice seeds, move selected seeds through quests, and publish useful sprouts when they can help.',
                   es: 'Verdecito no es solo un tono. Se vuelve práctico con un patrón simple: notar semillas, hacer avanzar semillas seleccionadas mediante quests y publicar brotes útiles cuando ya pueden servir.' },

  // Current focus
  focusTitle:    { en: 'The first public proof is Living Memory.',
                   es: 'La primera prueba pública es Memoria Viva.' },
  focusBody:     { en: 'Instead of explaining everything Verdecito may become, v0.1 starts with one concrete quest: turning meaningful conversations into living memory.',
                   es: 'En vez de explicar todo lo que Verdecito podría llegar a ser, v0.1 empieza con un quest concreto: convertir conversaciones significativas en memoria viva.' },
  focusPrimary:  { en: 'Open Living Memory', es: 'Abrir Memoria Viva' },
  focusSecondary:{ en: 'See the method', es: 'Ver el método' },
};

export const aboutRelBullets: BiList = {
  en: [
    'Seeds keep possibilities alive.',
    'Quests give them reality checks.',
    'Sprouts make the result usable by others.',
  ],
  es: [
    'Las semillas mantienen vivas las posibilidades.',
    'Los quests las ponen en contacto con la realidad.',
    'Los brotes vuelven el resultado utilizable para otras personas.',
  ],
};
// apps/site/src/copy/about.ts
