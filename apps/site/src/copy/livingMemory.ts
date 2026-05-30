// apps/site/src/copy/livingMemory.ts
// Living Memory / Q001 bilingual copy. Verbatim from skeleton §6.
// Fixed copy — do not edit silently. This page's prose comes ONLY from here,
// never from canonical quest YAML (no quest.title / quest.summary / bodyHtml).

import type { Bi, BiList } from '../lib/lang';

export const lm: Record<string, Bi> = {
  // Hero
  heroEyebrow:   { en: 'Current quest · Q001', es: 'Quest actual · Q001' },
  heroTitle:     { en: 'Convert conversations into living memory.',
                   es: 'Convertir conversaciones en memoria viva.' },
  heroSubtitle:  { en: 'A public method for preserving what matters from a conversation — without turning private content into public content.',
                   es: 'Un método público para preservar lo importante de una conversación — sin convertir contenido privado en contenido público.' },
  heroBody:      { en: 'Chats often hold decisions, corrections, ideas, emotional nuance, project seeds, future work, and points where a previous direction should not regress. Living Memory turns that material into a durable recovery: readable, reusable, inspectable, and safe to continue from.',
                   es: 'Muchas conversaciones guardan decisiones, correcciones, ideas, matices emocionales, semillas de proyecto, trabajo futuro y puntos a los que no se debe retroceder. Memoria Viva convierte ese material en una recuperación que se sostiene: legible, reutilizable, inspeccionable y segura para continuar.' },
  heroPrimary:   { en: 'See a sample recovery', es: 'Ver una recuperación de ejemplo' },
  heroSecondary: { en: 'How privacy works',     es: 'Cómo funciona la privacidad' },

  // Status / object metadata card
  metaTitle:     { en: 'Quest status', es: 'Estado del quest' },

  // What it does
  doesTitle:     { en: 'What Living Memory preserves', es: 'Lo que preserva Memoria Viva' },
  doesIntro:     { en: 'A recovery is not a transcript and not just a summary. It keeps the parts that make future continuation possible, allows the memory to be updated, and helps avoid regressions.',
                   es: 'Una recuperación no es una transcripción ni solo un resumen. Conserva las partes que permiten continuar después, actualizar lo aprendido y evitar retrocesos.' },
  doesC1Title:   { en: 'Decisions', es: 'Decisiones' },
  doesC1Body:    { en: 'What was chosen, corrected, rejected, or left open.',
                   es: 'Lo que se eligió, corrigió, descartó o dejó abierto.' },
  doesC2Title:   { en: 'Seeds', es: 'Semillas' },
  doesC2Body:    { en: 'Ideas that may become quests, reusable results, posts, projects, prompts, or future work.',
                   es: 'Ideas que pueden convertirse en quests, resultados reutilizables, posts, proyectos, prompts o trabajo futuro.' },
  doesC3Title:   { en: 'Context', es: 'Contexto' },
  doesC3Body:    { en: 'Why something mattered, what changed, what should not be lost, and what should not regress.',
                   es: 'Por qué algo importaba, qué cambió, qué no debería perderse y qué no debería retroceder.' },
  doesC4Title:   { en: 'Next continuation', es: 'Próxima continuación' },
  doesC4Body:    { en: 'A clear place to resume from, without rereading the whole conversation.',
                   es: 'Un lugar claro desde donde retomar, sin releer toda la conversación.' },
  doesC5Title:   { en: 'Updates', es: 'Actualizaciones' },
  doesC5Body:    { en: 'Recoveries can be updated as the conversation, project, or spec evolves.',
                   es: 'Las recuperaciones pueden actualizarse a medida que evolucionan la conversación, el proyecto o la spec.' },

  // What already exists
  existsLabel:   { en: 'Already in use', es: 'Ya en uso' },
  existsTitle:   { en: 'This did not start as a product idea.',
                   es: 'Esto no empezó como idea de producto.' },
  existsBody:    { en: 'Living Memory grew from a real need: important AI conversations were producing decisions, workflows, corrections, images, prompts, and project direction faster than a person could manually preserve them.',
                   es: 'Memoria Viva nació de una necesidad real: conversaciones importantes con IA estaban produciendo decisiones, flujos de trabajo, correcciones, imágenes, prompts y dirección de proyecto más rápido de lo que una persona podía preservar manualmente.' },

  // What this quest will publish
  publishTitle:  { en: 'What Q001 is preparing', es: 'Lo que Q001 está preparando' },
  publishIntro:  { en: 'The goal is a Recovery Kit that others can inspect, fork, adapt, and improve.',
                   es: 'El objetivo es un Recovery Kit que otras personas puedan inspeccionar, forkear, adaptar y mejorar.' },

  // What this is not
  notTitle:      { en: 'What this is not', es: 'Lo que esto no es' },
  notClosing:    { en: 'It is a way to carry forward what a conversation opened.',
                   es: 'Es una forma de continuar lo que una conversación abrió.' },

  // Privacy and lineage
  privTitle:     { en: 'Method public. Content private by default. Lineage visible.',
                   es: 'Método público. Contenido privado por defecto. Linaje visible.' },
  privCardTitle: { en: 'Privacy', es: 'Privacidad' },
  privCardBody:  { en: 'The recovery method can be public without making the source conversation public. The owner decides what is shared, summarized, anonymized, or kept private.',
                   es: 'El método de recuperación puede ser público sin volver pública la conversación original. La persona dueña decide qué se comparte, resume, anonimiza o mantiene privado.' },
  linCardTitle:  { en: 'Lineage', es: 'Linaje' },
  linCardBody:   { en: 'Q001 includes a lineage scan so Verdecito can learn from adjacent work instead of pretending to invent from nothing.',
                   es: 'Q001 incluye una revisión de linaje para que Verdecito aprenda de trabajos cercanos en vez de pretender inventar desde cero.' },

  // Inspectable example
  exTitle:       { en: 'See an inspectable example', es: 'Ver un ejemplo inspeccionable' },
  exBody:        { en: 'The sample shows the kind of memory this method tries to preserve: decisions, nuance, corrections, seeds, reusable results, and the next useful continuation point.',
                   es: 'El ejemplo enseña el tipo de memoria que este método busca preservar: decisiones, matices, correcciones, semillas, resultados reutilizables y el próximo punto útil de continuación.' },
  exPrimary:     { en: 'Open sample recovery', es: 'Abrir recuperación de ejemplo' },
  exFallback:    { en: 'Sample being prepared', es: 'Ejemplo en preparación' },

  // Feedback / support
  fbTitle:       { en: 'Help improve the method', es: 'Ayuda a mejorar el método' },
  fbBody:        { en: 'Q001 is open to useful feedback: what it misses, what it resembles, where it overclaims, and how it could become more useful without losing privacy or depth.',
                   es: 'Q001 está abierto a feedback útil: qué le falta, a qué se parece, dónde dice más de lo que puede sostener y cómo podría volverse más útil sin perder privacidad ni profundidad.' },
  fbPrimary:     { en: 'Send feedback', es: 'Enviar feedback' },
  fbSecondary:   { en: 'Support this quest', es: 'Apoyar este quest' },
};

/** Status card rows: label + value, both bilingual. */
export const lmStatusRows: { k: Bi; v: Bi }[] = [
  { k: { en: 'Object',       es: 'Objeto' },        v: { en: 'Q001 — Living Memory', es: 'Q001 — Memoria Viva' } },
  { k: { en: 'Status',       es: 'Estado' },        v: { en: 'Active', es: 'Activo' } },
  { k: { en: 'Deliverable',  es: 'Entregable' },    v: { en: 'Recovery Kit v1.0.0', es: 'Recovery Kit v1.0.0' } },
  { k: { en: 'Current work', es: 'Trabajo actual' },v: { en: 'lineage scan, sample recovery, public template, usage notes',
                                                          es: 'revisión de linaje, recuperación de ejemplo, plantilla pública, notas de uso' } },
  { k: { en: 'Visibility',   es: 'Visibilidad' },   v: { en: 'method public, source conversations private by default',
                                                          es: 'método público, conversaciones originales privadas por defecto' } },
];

export const lmExistsBullets: BiList = {
  en: [
    'A working recovery format is already in use.',
    'It is used in active Verdecito work and in derived personal workflows.',
    'It preserves nuance, not only tasks.',
    'It can include a small “regalito”: an original AI reflection, synthesis, or related seed offered back from the conversation.',
    'It separates public method from private content.',
    'Q001 turns that working practice into a public, reusable kit.',
  ],
  es: [
    'Ya existe un formato funcional de recuperación, en uso activo.',
    'Se usa en flujos activos de Verdecito y en flujos personales derivados.',
    'Preserva matices, no solo tareas.',
    'Puede incluir un pequeño “regalito”: una reflexión, síntesis o semilla relacionada que la IA propone a partir de la conversación.',
    'Separa método público de contenido privado.',
    'Q001 convierte esa práctica funcional en un kit público y reutilizable.',
  ],
};

export const lmPublishItems: BiList = {
  en: [
    'A public recovery template.',
    'A prompt for turning a meaningful conversation into a recovery.',
    'A sample recovery with safe content.',
    'Usage notes for privacy, attribution, and continuation.',
    'A lineage note comparing this work with related methods and tools.',
  ],
  es: [
    'Una plantilla pública de recuperación.',
    'Un prompt para convertir una conversación significativa en recovery.',
    'Una recuperación de ejemplo con contenido seguro.',
    'Notas de uso sobre privacidad, atribución y continuación.',
    'Una nota de linaje comparando este trabajo con métodos y herramientas relacionadas.',
  ],
};

export const lmNotItems: BiList = {
  en: [
    'Not a transcript archive.',
    'Not a task manager.',
    'Not a chatbot memory feature.',
    'Not a raw publication of private conversations.',
    'Not a claim that this method is new from zero.',
  ],
  es: [
    'No es un archivo de transcripciones.',
    'No es un gestor de tareas.',
    'No es una función de memoria de chatbot.',
    'No es publicar conversaciones privadas en bruto.',
    'No pretende haber nacido de cero.',
  ],
};
// apps/site/src/copy/livingMemory.ts
