// apps/site/src/lib/verdecito.ts
// Loads canonical data from instances/verdecito and enforces skins/verdecito/render-policy.yaml.
// Role: build-time data layer for all Astro pages.
//
// Path strategy: REPO_ROOT is injected by astro.config.mjs as __VERDECITO_REPO_ROOT__
// so the string survives Vite bundling unchanged.

import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, basename, extname } from 'path';
import yaml from 'js-yaml';
import matter from 'gray-matter';

// Injected by vite.define in astro.config.mjs — resolves to the repo root at config time.
declare const __VERDECITO_REPO_ROOT__: string;
const REPO_ROOT    = __VERDECITO_REPO_ROOT__;
const INSTANCE_DIR = join(REPO_ROOT, 'instances/verdecito');
const SKIN_DIR     = join(REPO_ROOT, 'skins/verdecito');

// ── Types ────────────────────────────────────────────────────────────────────

export type Visibility = 'public' | 'teaser' | 'private';
export type Lifecycle  = 'active' | 'draft'  | 'archived';

export interface VObject {
  id:             string;
  type:           string;
  title:          string;
  visibility:     Visibility;
  lifecycle:      Lifecycle;
  schema_version: string;
  summary?:       string;
  /** Body HTML (marked-rendered). Only present for visibility=public. */
  bodyHtml?:      string;
  slug:           string;
  [key: string]:  unknown;
}

interface RenderPolicy {
  include:  { visibility: string[]; lifecycle: string[] };
  exclude:  { visibility: string[] };
  teaser_behavior: {
    show_title:   boolean;
    show_summary: boolean;
    show_body:    boolean;
    show_cta:     string;
  };
  ordering:                    { default: string };
  incompatible_schema_version: 'hide' | 'fail';
}

// ── Render-policy loader ─────────────────────────────────────────────────────

function loadRenderPolicy(): RenderPolicy {
  const raw = readFileSync(join(SKIN_DIR, 'render-policy.yaml'), 'utf-8');
  return yaml.load(raw) as RenderPolicy;
}

const POLICY: RenderPolicy = loadRenderPolicy();

// Schema versions this skin supports (manifest.yaml: schema_version_compat: "0.1.x")
const COMPAT_RE = /^0\.1\./;

// ── Enforcement helpers ──────────────────────────────────────────────────────

// Required frontmatter for any public/teaser object.
// Missing field on a targeted object → BUILD FAILURE, not silent skip.
const REQUIRED_FIELDS = [
  'id', 'type', 'title', 'schema_version', 'visibility', 'lifecycle',
] as const;

function assertRequiredFields(
  data: Record<string, unknown>,
  filePath: string,
): void {
  for (const field of REQUIRED_FIELDS) {
    if (!data[field]) {
      throw new Error(
        `[verdecito] BUILD FAIL — required field "${field}" missing in ${filePath}\n` +
        `  Object visibility=${data.visibility} but is not well-formed.`,
      );
    }
  }
}

function shouldInclude(data: Record<string, unknown>): boolean {
  const vis = data.visibility as string;
  const lc  = data.lifecycle  as string;
  if (POLICY.exclude.visibility.includes(vis))  return false;
  if (!POLICY.include.visibility.includes(vis)) return false;
  if (!POLICY.include.lifecycle.includes(lc))   return false;
  return true;
}

function isCompatibleSchema(ver: string): boolean {
  return COMPAT_RE.test(ver);
}

// ── Markdown file parser ─────────────────────────────────────────────────────

async function parseMarkdownFile(filePath: string): Promise<VObject | null> {
  const raw            = readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  const vis        = data.visibility as string;
  const isTargeted = POLICY.include.visibility.includes(vis);

  // Public/teaser with missing required fields → fail the build.
  if (isTargeted) {
    assertRequiredFields(data as Record<string, unknown>, filePath);
  }

  // Apply include/exclude filter (private, non-active, etc.)
  if (!shouldInclude(data as Record<string, unknown>)) return null;

  // Handle schema version compatibility.
  if (!isCompatibleSchema(data.schema_version as string)) {
    if (POLICY.incompatible_schema_version === 'hide') return null;
    throw new Error(
      `[verdecito] BUILD FAIL — incompatible schema_version "${data.schema_version}" in ${filePath}`,
    );
  }

  const slug = basename(filePath, extname(filePath));

  const obj: VObject = {
    ...(data as object),
    id:             data.id             as string,
    type:           data.type           as string,
    title:          data.title          as string,
    visibility:     data.visibility     as Visibility,
    lifecycle:      data.lifecycle      as Lifecycle,
    schema_version: data.schema_version as string,
    summary:        data.summary        as string | undefined,
    slug,
    bodyHtml:       undefined,
  };

  // Render policy for body content:
  //   teaser → title + summary only, body withheld (bodyHtml stays undefined)
  //   public → full render including body HTML
  if (data.visibility === 'public' && content.trim()) {
    const { marked } = await import('marked');
    obj.bodyHtml = await marked.parse(content.trim());
  }

  return obj;
}

// ── Collection loader ────────────────────────────────────────────────────────

async function loadCollection(subdir: string): Promise<VObject[]> {
  const dir = join(INSTANCE_DIR, subdir);
  if (!existsSync(dir)) return [];

  const files = readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .sort();

  const results = await Promise.all(
    files.map((f) => parseMarkdownFile(join(dir, f))),
  );
  return results.filter((obj): obj is VObject => obj !== null);
}

// ── Public API ───────────────────────────────────────────────────────────────

export async function getSeeds():  Promise<VObject[]> { return loadCollection('seeds');  }
export async function getQuests(): Promise<VObject[]> { return loadCollection('quests'); }

export async function getSeed(slug: string):  Promise<VObject | undefined> {
  return (await getSeeds()).find((s) => s.slug === slug);
}
export async function getQuest(slug: string): Promise<VObject | undefined> {
  return (await getQuests()).find((q) => q.slug === slug);
}

export function getIdentity(): Record<string, unknown> {
  const raw = readFileSync(join(INSTANCE_DIR, 'identity.yaml'), 'utf-8');
  return yaml.load(raw) as Record<string, unknown>;
}

export function getTracker(): Record<string, unknown> {
  const raw = readFileSync(join(INSTANCE_DIR, 'tracker.yaml'), 'utf-8');
  return yaml.load(raw) as Record<string, unknown>;
}

export function getSupportInfo(): {
  ask:     Record<string, unknown>;
  channel: Record<string, unknown>;
} {
  const askRaw     = readFileSync(join(INSTANCE_DIR, 'asks/core-support.md'),           'utf-8');
  const channelRaw = readFileSync(join(INSTANCE_DIR, 'channels/github-sponsors.md'), 'utf-8');
  return {
    ask:     matter(askRaw).data     as Record<string, unknown>,
    channel: matter(channelRaw).data as Record<string, unknown>,
  };
}
