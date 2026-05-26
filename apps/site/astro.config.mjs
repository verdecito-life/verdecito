// apps/site/astro.config.mjs
// NOTE: `site` is intentionally omitted — set at deploy time via SITE env var
// REPO_ROOT is injected as a Vite define so path resolution survives bundling.
import { defineConfig } from 'astro/config';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
// apps/site/ → two levels up = repo root
const REPO_ROOT = resolve(__dirname, '../..');

export default defineConfig({
  output: 'static',
  vite: {
    define: {
      __VERDECITO_REPO_ROOT__: JSON.stringify(REPO_ROOT),
    },
  },
});
