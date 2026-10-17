# Verdecito site — visual asset map (v0.1)

Lightweight index of public static assets the site references. The local repo's
`public/` is the source of truth for these (see
`Collab/Playbooks/SiteDeliveryProtocol.md → Visual asset handling`). A context zip
may omit these heavy files; that is **not** the same as them being absent from the
project. Generate/place them in `public/` before deploy.

## Hero images — `src/assets/images/` (imported in `src/copy/common.ts → images`)

| File | Used on | Intrinsic size | Status |
|---|---|---|---|
| `src/assets/images/home-hero.png` | Home hero | 1774×887 | present; served as resized AVIF/WebP by `<Picture>` |
| `src/assets/images/living-memory.png` | Living Memory hero | 1693×929 | present; served as resized AVIF/WebP by `<Picture>` |
| `src/assets/images/method.png` | Method hero | 1774×887 | present; served as resized AVIF/WebP by `<Picture>` |
| `src/assets/images/support.png` | Support hero | 1774×887 | present; served as resized AVIF/WebP by `<Picture>` |

## OG / social cards — `public/og/` (referenced via `ogImage` in `src/pages/*`)

| File | Used on | Suggested size | Status |
|---|---|---|---|
| `public/og/home.jpg` | Home | 1200×630 | present; served as resized AVIF/WebP by `<Picture>` |
| `public/og/q001.jpg` | Living Memory | 1200×630 | present; served as resized AVIF/WebP by `<Picture>` |
| `public/og/method.jpg` | Method | 1200×630 | present; served as resized AVIF/WebP by `<Picture>` |
| `public/og/support.jpg` | Support | 1200×630 | present; served as resized AVIF/WebP by `<Picture>` |
| `public/og/about.jpg` | About | 1200×630 | present; served as resized AVIF/WebP by `<Picture>` |

## Downloads — `public/downloads/` (single source of truth: `src/copy/common.ts → living`)

| File | Status |
|---|---|
| `public/downloads/RecoverThisChat_LivingMemoryPrompt.md` | present |
| `public/downloads/Ecotourism_Pilot_Recovery_Redacted.md` | present |

## Favicons — `public/` root (referenced in `src/layouts/Base.astro`)

`favicon.svg`, `favicon.png`, `apple-touch-icon.png` — verify present before deploy.

> Palette for generated images: warm paper `#fbf7ef`, deep Verdecito green `#153f2a`
> (skeleton Appendix C). Hand-drawn / quiet style per the alt text in `common.ts`.
