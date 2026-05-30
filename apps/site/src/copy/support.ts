// apps/site/src/copy/support.ts
// Support page bilingual copy. Verbatim from skeleton §8. Fixed copy — no silent edits.

import type { Bi, BiList } from '../lib/lang';

export const support: Record<string, Bi> = {
  // Hero
  heroEyebrow:   { en: 'Support Verdecito', es: 'Apoyar a Verdecito' },
  heroTitle:     { en: 'Support changes the pace, not the openness.',
                   es: 'El apoyo cambia el ritmo, no la apertura.' },
  heroSubtitle:  { en: 'Verdecito remains free and open work. Support gives it more time, depth, care, and continuity.',
                   es: 'Verdecito sigue siendo trabajo libre y abierto. El apoyo le da más tiempo, profundidad, cuidado y continuidad.' },
  heroBody:      { en: 'You can support Verdecito by reading, questioning, sharing, testing, forking, giving feedback, opening doors, sponsoring time, or helping a quest become more useful.',
                   es: 'Puedes apoyar a Verdecito leyendo, cuestionando, compartiendo, probando, forkeando, dando feedback, abriendo puertas, auspiciando tiempo o ayudando a que un quest se vuelva más útil.' },
  heroPrimary:   { en: 'Start a support conversation', es: 'Abrir una conversación de soporte' },
  heroSecondary: { en: 'Give feedback', es: 'Dar feedback' },

  // Ways to support
  waysTitle:     { en: 'Support can take many forms.', es: 'El apoyo puede tomar muchas formas.' },
  waysIntro:     { en: 'Verdecito grows through attention, use, feedback, and contribution — not only funding.',
                   es: 'Verdecito crece con atención, uso, feedback y contribución — no solo con financiamiento.' },
  w1Title:       { en: 'Read and question', es: 'Leer y cuestionar' },
  w1Body:        { en: 'Notice what is unclear, overclaimed, missing, or worth strengthening.',
                   es: 'Notar qué está poco claro, exagerado, incompleto o vale la pena fortalecer.' },
  w2Title:       { en: 'Use and test', es: 'Usar y probar' },
  w2Body:        { en: 'Try the method on a real conversation, project, or seed, then share what happened.',
                   es: 'Probar el método con una conversación, proyecto o semilla real, y luego compartir qué pasó.' },
  w3Title:       { en: 'Fork and adapt', es: 'Forkear y adaptar' },
  w3Body:        { en: 'Take what is useful, adapt it to your own context, and contribute improvements back when it makes sense.',
                   es: 'Tomar lo que sirve, adaptarlo a tu propio contexto y contribuir mejoras de vuelta cuando tenga sentido.' },
  w4Title:       { en: 'Open doors', es: 'Abrir puertas' },
  w4Body:        { en: 'Introduce Verdecito to people, communities, funders, organizations, or projects that may resonate with it.',
                   es: 'Presentar Verdecito a personas, comunidades, financiadores, organizaciones o proyectos que puedan resonar con el trabajo.' },
  w5Title:       { en: 'Sponsor time', es: 'Auspiciar tiempo' },
  w5Body:        { en: 'Funding helps turn working practices into public kits, examples, documentation, and reusable infrastructure.',
                   es: 'El financiamiento ayuda a convertir prácticas funcionales en kits públicos, ejemplos, documentación e infraestructura reutilizable.' },

  // Financial support
  finTitle:      { en: 'Funding gives the work room to breathe.',
                   es: 'El financiamiento le da al trabajo espacio para respirar.' },
  finBody:       { en: 'Verdecito can keep moving slowly without funding. Support lets the work move with more care: better examples, stronger documentation, deeper lineage checks, safer public samples, and more time to turn working methods into open resources.',
                   es: 'Verdecito puede seguir avanzando lentamente sin financiamiento. El apoyo permite avanzar con más cuidado: mejores ejemplos, documentación más sólida, revisiones de linaje más profundas, muestras públicas más seguras y más tiempo para convertir métodos funcionales en recursos abiertos.' },
  finPrimary:    { en: 'Start a support conversation', es: 'Abrir una conversación de soporte' },
  finSponsors:   { en: 'Support on GitHub Sponsors', es: 'Apoyar en GitHub Sponsors' },

  // What support changes
  changesTitle:  { en: 'What support changes', es: 'Lo que cambia el apoyo' },

  // Boundaries / openness commitment
  boundTitle:    { en: 'Support does not buy the method.', es: 'El apoyo no compra el método.' },
  boundBody:     { en: 'Verdecito remains open, forkeable, and inspectable. Support does not close the method, erase lineage, or make private content public.',
                   es: 'Verdecito sigue abierto, forkeable e inspeccionable. El apoyo no cierra el método, no borra el linaje y no vuelve público el contenido privado.' },
  boundTrust:    { en: 'Support is reciprocity, not control.', es: 'El apoyo es reciprocidad, no control.' },

  // Contact / support conversation
  contactTitle:  { en: 'A conversation is enough to begin.', es: 'Una conversación basta para empezar.' },
  contactBody:   { en: 'If Verdecito resonates with you, start with a message. The first useful support may be feedback, a question, an introduction, a test case, or a small sponsorship.',
                   es: 'Si Verdecito resuena contigo, empieza con un mensaje. El primer apoyo útil puede ser feedback, una pregunta, una presentación, un caso de prueba o un pequeño auspicio.' },
  contactPrimary:{ en: 'Contact Verdecito', es: 'Contactar a Verdecito' },
  contactRepo:   { en: 'View the repo', es: 'Ver el repositorio' },
};

export const supportChangesItems: BiList = {
  en: [
    'More time to publish working methods carefully.',
    'Better examples and safer public samples.',
    'Deeper lineage and no-reinvention checks.',
    'More reusable templates, prompts, and repositories.',
    'More attention to translation, accessibility, and local usefulness.',
    'More capacity to respond to useful feedback.',
  ],
  es: [
    'Más tiempo para publicar métodos funcionales con cuidado.',
    'Mejores ejemplos y muestras públicas más seguras.',
    'Revisiones de linaje y no-reinvención más profundas.',
    'Más plantillas, prompts y repositorios reutilizables.',
    'Más atención a traducción, accesibilidad y utilidad local.',
    'Más capacidad para responder a feedback útil.',
  ],
};
// apps/site/src/copy/support.ts
