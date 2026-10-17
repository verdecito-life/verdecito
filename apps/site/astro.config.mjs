// apps/site/astro.config.mjs
// site and base come from env vars (the GH Actions workflow sets both):
//   SITE_URL  https://verdecito-life.github.io   BASE_PATH /verdecito
// The defaults are the production values, so a local build and preview are the
// same site that deploys (base-path bugs show up locally, sitemap has a URL).
// For a custom domain later: SITE_URL=https://<domain> BASE_PATH=/ (+ public/CNAME).
// REPO_ROOT is injected as a Vite define so path resolution survives bundling.
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
// apps/site/ → two levels up = repo root
const REPO_ROOT  = resolve(__dirname, '../..');
const SITE_URL   = process.env.SITE_URL  ?? 'https://verdecito-life.github.io';
const BASE_PATH  = process.env.BASE_PATH ?? '/verdecito';

export default defineConfig({
  site:   SITE_URL,
  base:   BASE_PATH,
  output: 'static',
  // The stylesheet is small (about 4 KB compressed): inline it so the first paint needs no extra request.
  build: { inlineStylesheets: 'always' },
  // Astro 7 defaults to 'jsx', which drops whitespace between inline elements
  // ("EN / ES" rendered as "EN/ES"). Keep the Astro 6 behaviour.
  compressHTML: true,
  // /how-it-works is only a redirect to /quests/Q001, and 404 is not a page to index.
  // Newsreader + Inter through Astro's fonts API instead of a Google Fonts <link>:
  // the files are downloaded at build time and served from the site itself, with
  // metric-matched fallbacks (no text jump) and preloads requested in Base.astro.
  fonts: [
    {
      provider: fontProviders.google(), name: 'Newsreader', cssVariable: '--font-newsreader',
      weights: [400, 500, 600], styles: ['normal'], subsets: ['latin'],
      fallbacks: ['Georgia', 'Times New Roman', 'serif'],
      // Keep the optical-size axis the old <link> asked for (opsz 6..72).
      options: { experimental: { variableAxis: { opsz: [['6', '72']] } } },
    },
    {
      provider: fontProviders.google(), name: 'Inter', cssVariable: '--font-inter',
      weights: [400, 500, 600, 700], styles: ['normal'], subsets: ['latin'],
      fallbacks: ['system-ui', '-apple-system', 'sans-serif'],
    },
  ],
  integrations: [sitemap({ filter: (page) => !/\/(how-it-works|404)\/?$/.test(page) })],
  vite: {
    define: {
      __VERDECITO_REPO_ROOT__: JSON.stringify(REPO_ROOT),
    },
  },
});
