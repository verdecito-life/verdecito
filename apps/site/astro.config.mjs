// apps/site/astro.config.mjs
// site and base are injected via env vars at build time:
//   SITE_URL  e.g. https://verdecito-life.github.io   (production)
//   BASE_PATH e.g. /verdecito                         (production)
// Defaults: undefined site, base '/' (safe for local dev).
// GH Actions workflow sets both for the Pages deploy.
// REPO_ROOT is injected as a Vite define so path resolution survives bundling.
import { defineConfig } from 'astro/config';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
// apps/site/ → two levels up = repo root
const REPO_ROOT  = resolve(__dirname, '../..');
const SITE_URL   = process.env.SITE_URL  ?? undefined;
const BASE_PATH  = process.env.BASE_PATH ?? '/';

export default defineConfig({
  ...(SITE_URL ? { site: SITE_URL } : {}),
  base:   BASE_PATH,
  output: 'static',
  vite: {
    define: {
      __VERDECITO_REPO_ROOT__: JSON.stringify(REPO_ROOT),
    },
  },
});
