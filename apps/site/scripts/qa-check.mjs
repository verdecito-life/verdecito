// apps/site/scripts/qa-check.mjs
// Post-build QA sweep for the Q001 onboarding surface.
// Fails the build (exit 1) on any blocking issue:
//   - unresolved [PLACEHOLDER ...] token anywhere
//   - "Recovery Kit" anywhere in built HTML (retired from public surface)
//   - version-number string (vX.Y) in PRIMARY public pages
//   - "redactada" in any ES page (skeleton: use "anonimizada")
// Plus non-fatal verification: required routes, trigger phrases, downloads.
//
// The rendered artifact routes (the prompt + public sample) are EXCLUDED from
// the version/redactada sweeps: the prompt legitimately carries its own version
// (v0.4) and the sample is maintainer metadata — versions may live in the prompt
// file, repo/docs, download metadata, and changelog (skeleton Appendix E).

import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const dist = process.argv[2] || 'dist';
if (!existsSync(dist)) { console.error(`[qa] dist not found at "${dist}" — run the build first.`); process.exit(1); }

// Collect every built file.
function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}
const allFiles = walk(dist);
const htmlFiles = allFiles.filter((f) => f.endsWith('.html'));
const rel = (f) => relative(dist, f).replace(/\\/g, '/');

// Rendered-artifact route outputs (excluded from copy sweeps).
const ARTIFACT_ROUTES = [
  'quests/Q001/prompt/index.html',
  'quests/Q001/sample/index.html',
  'es/quests/Q001/prompt/index.html',
  'es/quests/Q001/sample/index.html',
];
const isArtifact = (f) => ARTIFACT_ROUTES.includes(rel(f));

// Strip embedded/rendered artifact content (modal <dialog> blocks and any
// .md-doc rendered-Markdown blocks) so the "primary public copy" sweeps see only
// the page's own hero/status/cards/prose — not prompt/sample content, where
// versions are allowed to live (skeleton Appendix E).
function primaryCopy(html) {
  return html
    .replace(/<dialog[\s\S]*?<\/dialog>/gi, ' ')
    .replace(/<div class="md-doc"[\s\S]*?<\/div>/gi, ' ');
}

// The project/release label "v0.1" is sanctioned skeleton copy (Method
// acknowledgments, About narrative) and is NOT a deliverable version number.
const ALLOWED_VERSION = /^v0\.1$/i;

const errors = [];
const warnings = [];
const notes = [];

// ── Blocking: unresolved placeholder token (any HTML) ────────────────────────
for (const f of htmlFiles) {
  const html = readFileSync(f, 'utf-8');
  if (/\[PLACEHOLDER/i.test(html)) errors.push(`unresolved [PLACEHOLDER] token in ${rel(f)}`);
}

// ── Blocking: "Recovery Kit" retired from public surface (any HTML) ──────────
for (const f of htmlFiles) {
  if (/recovery kit/i.test(readFileSync(f, 'utf-8'))) errors.push(`"Recovery Kit" present in ${rel(f)}`);
}

// ── Blocking: deliverable version string (vX.Y) in PRIMARY public copy ───────
// Excludes embedded artifact content and the sanctioned "v0.1" release label.
for (const f of htmlFiles) {
  if (isArtifact(f)) continue;
  const copy = primaryCopy(readFileSync(f, 'utf-8'));
  const matches = copy.match(/\bv\d+\.\d+(\.\d+)?\b/gi) || [];
  for (const m of matches) {
    if (!ALLOWED_VERSION.test(m)) errors.push(`version string "${m}" in primary public copy of ${rel(f)}`);
  }
}

// ── Blocking: "redactada" in any ES page (use "anonimizada") ─────────────────
for (const f of htmlFiles) {
  if (isArtifact(f)) continue;
  if (rel(f).startsWith('es/') && /redactad/i.test(primaryCopy(readFileSync(f, 'utf-8')))) {
    errors.push(`"redactada" present in ES page ${rel(f)} (use "anonimizada")`);
  }
}

// ── Verify required routes exist ─────────────────────────────────────────────
const requiredRoutes = [
  'index.html', 'quests/Q001/index.html', 'method/index.html', 'support/index.html', 'about/index.html',
  'es/index.html', 'es/quests/Q001/index.html', 'es/method/index.html', 'es/support/index.html', 'es/about/index.html',
  ...ARTIFACT_ROUTES,
];
for (const r of requiredRoutes) {
  if (!existsSync(join(dist, r))) errors.push(`missing route: ${r}`);
}

// ── Verify trigger phrases present ───────────────────────────────────────────
const enQ001 = join(dist, 'quests/Q001/index.html');
const esQ001 = join(dist, 'es/quests/Q001/index.html');
if (existsSync(enQ001) && !readFileSync(enQ001, 'utf-8').includes('Recover this chat')) errors.push('EN Q001 missing trigger "Recover this chat"');
if (existsSync(esQ001) && !readFileSync(esQ001, 'utf-8').includes('Recupera este chat')) errors.push('ES Q001 missing trigger "Recupera este chat"');

// ── Verify downloads present ─────────────────────────────────────────────────
for (const d of ['downloads/RecoverThisChat_LivingMemoryPrompt.md', 'downloads/Ecotourism_Pilot_Recovery_Redacted.md']) {
  if (!existsSync(join(dist, d))) errors.push(`missing download: ${d}`);
}

// ── Non-fatal note: legacy static sample URL ─────────────────────────────────
const legacySample = join(dist, 'quests/Q001/sample-recovery.html');
if (existsSync(legacySample)) {
  const isRedirect = /http-equiv=["']refresh["']/i.test(readFileSync(legacySample, 'utf-8'));
  notes.push(isRedirect
    ? 'legacy /quests/Q001/sample-recovery.html is now a base-agnostic redirect to the rendered /quests/Q001/sample route (old inbound links preserved).'
    : 'legacy static /quests/Q001/sample-recovery.html still shipped; consider retiring it in favour of the rendered /quests/Q001/sample route.');
}

// ── Report ───────────────────────────────────────────────────────────────────
console.log(`\n[qa] scanned ${htmlFiles.length} HTML files in ${dist}`);
if (notes.length)    { console.log('\n[qa] notes:');    notes.forEach((n) => console.log('  • ' + n)); }
if (warnings.length) { console.log('\n[qa] warnings:'); warnings.forEach((w) => console.log('  ⚠ ' + w)); }
if (errors.length) {
  console.error('\n[qa] BLOCKING ISSUES:');
  errors.forEach((e) => console.error('  ✗ ' + e));
  console.error(`\n[qa] FAIL — ${errors.length} blocking issue(s).\n`);
  process.exit(1);
}
console.log('\n[qa] PASS — placeholder, Recovery-Kit, version, redactada, route, trigger, and download checks all clean.\n');
