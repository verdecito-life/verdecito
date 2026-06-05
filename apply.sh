#!/usr/bin/env bash
# apply.sh — apply a Verdecito apps/site deliverable zip via the SiteDeliveryProtocol
# (replace-not-merge → install → build + QA gate). NO git push: committing/pushing stays manual.
#
# RUN THIS IN TERMINAL, FROM THE VERDECITO REPO ROOT (the dir containing apps/, instances/, skins/):
#   ./apply.sh ~/Downloads/verdecito-apps-site-q001-onboarding.zip
#
# Use Terminal OR CCLI, not both. Never use the git GUI's "Discard all" mid-apply.
set -euo pipefail

ZIP="${1:-}"
if [ -z "$ZIP" ] || [ ! -f "$ZIP" ]; then
  echo "usage: ./apply.sh <path-to-deliverable.zip>"; exit 2
fi

# Guard: must run from the verdecito repo root.
for d in apps/site instances skins; do
  [ -d "$d" ] || { echo "ERROR: run from the verdecito repo root (missing ./$d). You are in: $(pwd)"; exit 2; }
done

# Clean-state gate (your rollback point). Override only deliberately with APPLY_FORCE=1.
if [ -n "$(git status --porcelain 2>/dev/null)" ]; then
  echo "WARNING: working tree is dirty — commit or stash first (this is your rollback point)."
  [ "${APPLY_FORCE:-0}" = "1" ] || { echo "Refusing to apply onto a dirty tree. Re-run with APPLY_FORCE=1 to override."; exit 1; }
fi

TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT
echo "→ extracting $ZIP"
unzip -q "$ZIP" -d "$TMP"
[ -d "$TMP/apps/site" ] || { echo "ERROR: zip does not contain apps/site/"; exit 1; }

# Preserve local env, then wholesale replace (expresses deletions/moves; kills stale files).
[ -f apps/site/.env ] && cp apps/site/.env "$TMP/apps/site/.env" || true
echo "→ replacing apps/site"
rm -rf apps/site && cp -R "$TMP/apps/site" apps/site

echo "→ npm install"
( cd apps/site && npm install )
echo "→ build + QA gate"
( cd apps/site && npm run build )   # astro build + scripts/qa-check.mjs; non-zero exit on gate fail

echo
echo "✓ applied and gate passed."
echo "  Review, then commit locally (NO push — that stays your explicit step):"
echo "    git add -A && git status && git commit -m \"Q001 onboarding: v0.1 surface + QA gate\""
