// apps/site/src/copy/livingMemory.ts
// Living Memory / Q001 bilingual copy.
// Source of truth: verdecito_v0_1_final_surface_skeleton_reconciled_q001_onboarding.md §6.
// Q001 onboarding update: action-first (4-step guide + consolidated inspect/
// preview high on the page); hero says Q001 is about important AI conversations;
// no "Recovery Kit" and no version numbers in this public copy.
//
// This page's prose comes ONLY from here, never from canonical quest YAML.

import type { Bi, BiList } from '../lib/lang';

export const lm: Record<string, Bi> = {
  // Hero
  heroEyebrow:   { en: 'Current quest · Q001', es: 'Quest actual · Q001' },
  heroTitle:     { en: 'Recover important AI conversations into Living Memory.',
                   es: 'Recupera conversaciones importantes con IA como Memoria Viva.' },
  heroSubtitle:  { en: 'A public method for preserving what matters from an AI conversation — without turning private content into public content.',
                   es: 'Un método público para preservar lo importante de una conversación con IA — sin convertir contenido privado en contenido público.' },
  heroBody:      { en: 'Important AI chats often hold decisions, corrections, ideas, emotional nuance, project seeds, future work, and points where a previous direction should not regress. Living Memory turns that material into a Markdown recovery: readable, reusable, inspectable, and safe to continue from.',
                   es: 'Los chats importantes con IA suelen guardar decisiones, correcciones, ideas, matices, semillas de proyecto, trabajo futuro y puntos donde una dirección previa no debería retroceder. Memoria Viva convierte ese material en una recuperación Markdown: legible, reutilizable, inspeccionable y segura para continuar.' },
  heroPrimary:   { en: 'Try it in 4 steps', es: 'Probar en 4 pasos' },
  heroSecondary: { en: 'See a public sample', es: 'Ver una muestra pública' },

  // Try it in 4 steps
  tryTitle:      { en: 'Try Living Memory in 4 steps', es: 'Prueba Memoria Viva en 4 pasos' },
  tryIntro:      { en: 'You only need one important AI conversation, the Living Memory Prompt, and the trigger phrase.',
                   es: 'Solo necesitas una conversación importante con IA, el Prompt de Memoria Viva y la frase de activación.' },
  step1Title:    { en: 'Choose an AI conversation worth keeping',
                   es: 'Elige una conversación con IA que vale la pena conservar' },
  step1Body:     { en: 'Pick a project discussion, planning session, creative thread, research chat, or long AI exchange where the useful parts are now buried.',
                   es: 'Elige una conversación de proyecto, una sesión de planificación, una exploración creativa, un chat de investigación o un intercambio largo con IA donde lo útil ya quedó enterrado.' },
  step2Title:    { en: 'Give the AI the Living Memory Prompt',
                   es: 'Dale a la IA el Prompt de Memoria Viva' },
  step2Body:     { en: 'Attach the Markdown file, paste it into the chat, or link to it. If you use a link, open the readable prompt page and copy its link from your browser.',
                   es: 'Adjunta el archivo Markdown, pégalo en el chat o comparte el link. Si usas un link, abre la página legible del prompt y copia su enlace desde el navegador.' },
  step2Mobile:   { en: 'On mobile, use the attach / + / file button if available. If attachments do not work, paste the prompt text.',
                   es: 'En celular, usa el botón de adjuntar / + / archivo si está disponible. Si no puedes adjuntar archivos, pega el texto del prompt.' },
  step2Link:     { en: 'Read the Living Memory Prompt', es: 'Leer el Prompt de Memoria Viva' },
  step3Title:    { en: 'Type this', es: 'Escribe esto' },
  step3Body:     { en: 'In that same chat, type:', es: 'En ese mismo chat, escribe:' },
  // Trigger phrases shown exactly (EN page / ES page).
  step3Trigger:  { en: 'Recover this chat', es: 'Recupera este chat' },
  step4Title:    { en: 'Review and reuse the recovery', es: 'Revisa y reutiliza la recuperación' },
  step4Body:     { en: 'The AI returns a Markdown memory draft: what mattered, what changed, decisions, corrections, artifact seeds, a suggested title, and a continuation point.',
                   es: 'La IA devuelve un borrador de memoria en Markdown: lo que importó, lo que cambió, decisiones, correcciones, semillas de artefactos, un título sugerido y un punto claro para continuar.' },
  step4Body2:    { en: 'You review it. You correct it. You hide or anonymize what should stay private. Then you can use it to continue in a fresh chat, move between assistants, or hand off to a collaborator.',
                   es: 'Tú lo revisas. Tú lo corriges. Tú ocultas o anonimizas lo que debe seguir privado. Luego puedes usarlo para continuar en un chat nuevo, moverte entre asistentes o pasarlo a un colaborador.' },

  // Inspect before you download (consolidated)
  inspectTitle:  { en: 'Inspect before you download', es: 'Inspecciona antes de descargar' },
  inspectBody:   { en: 'The Living Memory Prompt and the public anonymized sample should be readable in the browser. Download the Markdown only after you can see what it contains.',
                   es: 'El Prompt de Memoria Viva y la muestra pública anonimizada deberían poder leerse en el navegador. Descarga el Markdown solo después de poder ver qué contiene.' },
  inspectReadPrompt: { en: 'Read the Living Memory Prompt', es: 'Leer el Prompt de Memoria Viva' },
  inspectViewSample: { en: 'View the public sample', es: 'Ver la muestra pública' },
  inspectDlPrompt:   { en: 'Download prompt MD', es: 'Descargar prompt MD' },
  inspectDlSample:   { en: 'Download sample MD', es: 'Descargar muestra MD' },
  inspectOpenFull:   { en: 'Open full page', es: 'Abrir página completa' },
  inspectClose:      { en: 'Close', es: 'Cerrar' },
  inspectNote:   { en: 'Both documents are rendered as readable web pages. The preview does not require downloading anything — download is one option, not the only path.',
                   es: 'Ambos documentos se muestran como páginas web legibles. La vista previa no requiere descargar nada — descargar es una opción, no el único camino.' },
  promptModalTitle:  { en: 'The Living Memory Prompt', es: 'El Prompt de Memoria Viva' },
  sampleModalTitle:  { en: 'Public sample recovery', es: 'Muestra pública de recuperación' },

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
  publishIntro:  { en: 'The goal is a small, inspectable release that others can try, fork, adapt, and improve.',
                   es: 'El objetivo es una entrega pequeña e inspeccionable que otras personas puedan probar, copiar, adaptar y mejorar.' },

  // What this is not
  notTitle:      { en: 'What this is not', es: 'Lo que esto no es' },
  notClosing:    { en: 'It is a way to carry forward what a conversation opened.',
                   es: 'Es una forma de continuar lo que una conversación abrió.' },

  // Privacy and lineage
  privTitle:     { en: 'Method public. Content private by default. Lineage visible.',
                   es: 'Método público. Contenido privado por defecto. Linaje visible.' },
  privCardTitle: { en: 'Privacy', es: 'Privacidad' },
  privCardBody:  { en: 'The recovery method can be public without making the source conversation public. The owner decides what is shared, summarized, anonymized, or kept private.',
                   es: 'El método de recuperación puede ser público sin volver pública la conversación fuente. La persona dueña decide qué se comparte, resume, anonimiza o mantiene privado.' },
  linCardTitle:  { en: 'Lineage', es: 'Linaje' },
  linCardBody:   { en: 'Q001 includes a lineage scan so Verdecito can learn from adjacent work instead of pretending to invent from nothing.',
                   es: 'Q001 incluye una revisión de linaje para que Verdecito aprenda de trabajos cercanos en vez de pretender inventar desde cero.' },

  // Feedback / support
  fbTitle:       { en: 'Help improve the method', es: 'Ayuda a mejorar el método' },
  fbBody:        { en: 'Q001 is open to useful feedback: what it misses, what it resembles, where it overclaims, and how it could become more useful without losing privacy or depth.',
                   es: 'Q001 está abierto a feedback útil: qué le falta, a qué se parece, dónde exagera y cómo podría volverse más útil sin perder privacidad ni profundidad.' },
  fbPrimary:     { en: 'Send feedback', es: 'Enviar feedback' },
  fbSecondary:   { en: 'Support this quest', es: 'Apoyar este quest' },
};

/** Status card rows: label + value, both bilingual. No version, no "Recovery Kit". */
export const lmStatusRows: { k: Bi; v: Bi }[] = [
  { k: { en: 'Object',          es: 'Objeto' },          v: { en: 'Q001 — Living Memory', es: 'Q001 — Memoria Viva' } },
  { k: { en: 'Status',          es: 'Estado' },          v: { en: 'Public preview', es: 'Vista previa pública' } },
  { k: { en: 'Current artifact', es: 'Artefacto actual' }, v: { en: 'Living Memory Prompt', es: 'Prompt de Memoria Viva' } },
  { k: { en: 'Current proof',   es: 'Prueba actual' },   v: { en: 'public anonymized sample', es: 'muestra pública anonimizada' } },
  { k: { en: 'Visibility',      es: 'Visibilidad' },     v: { en: 'method public, source conversations private by default',
                                                              es: 'método público, conversaciones fuente privadas por defecto' } },
];

export const lmExistsBullets: BiList = {
  en: [
    'A working recovery format already exists.',
    'It has been used across active Verdecito and derived personal workflows.',
    'It preserves nuance, not only tasks.',
    'It can include a small “regalito”: an original AI reflection, synthesis, or related seed offered back from the conversation.',
    'It separates public method from private content.',
    'Q001 turns that working practice into a public prompt, sample, guide, and method.',
  ],
  es: [
    'Ya existe un formato funcional de recuperación.',
    'Se ha usado en flujos activos de Verdecito y en flujos personales derivados.',
    'Preserva matices, no solo tareas.',
    'Puede incluir un pequeño “regalito”: una reflexión, síntesis o semilla relacionada que la IA propone a partir de la conversación.',
    'Separa método público de contenido privado.',
    'Q001 convierte esa práctica funcional en un prompt, una muestra, una guía y un método públicos.',
  ],
};

export const lmPublishItems: BiList = {
  en: [
    'The Living Memory Prompt, readable before download.',
    'A simple 4-step guide for trying it.',
    'A real public anonymized sample recovery.',
    'Usage notes for privacy, attribution, and continuation.',
    'A feedback path for early users.',
    'A lineage note comparing this work with related methods and tools.',
  ],
  es: [
    'El Prompt de Memoria Viva, legible antes de descargar.',
    'Una guía simple de 4 pasos para probarlo.',
    'Una recuperación real pública y anonimizada.',
    'Notas de uso sobre privacidad, atribución y continuación.',
    'Un camino de feedback para primeros usuarios.',
    'Una nota de linaje comparando este trabajo con métodos y herramientas relacionadas.',
  ],
};

export const lmNotItems: BiList = {
  en: [
    'Not a transcript archive.',
    'Not a task manager.',
    'Not a chatbot memory feature.',
    'Not a meeting summarizer.',
    'Not a second brain replacement.',
    'Not a PKM product.',
    'Not an AI memory database.',
    'Not a raw publication of private conversations.',
    'Not a claim that this method is new from zero.',
  ],
  es: [
    'No es un archivo de transcripciones.',
    'No es un gestor de tareas.',
    'No es una función de memoria de chatbot.',
    'No es un resumidor de reuniones.',
    'No reemplaza tu segundo cerebro.',
    'No es un producto de PKM.',
    'No es una base de datos de memoria IA.',
    'No es publicar conversaciones privadas en bruto.',
    'No pretende haber nacido de cero.',
  ],
};
// apps/site/src/copy/livingMemory.ts
