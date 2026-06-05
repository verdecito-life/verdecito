# Parked pages — not built in v0.1

These page files were removed from `src/pages/` for the v0.1 launch-correction pass.

Reason: the v0.1 public contract is exactly five EN + five ES routes (plus a custom
404 and the stable sample placeholder). Several of these pages also rendered canonical
YAML bodies (`bodyHtml`, `summary`) directly as public prose — the exact site → spec
inversion the launch-correction invariant forbids:

> Spec → site, never site → spec. Canonical data feeds only mapped fields.
> Fixed copy never changes silently.

Anything in this folder is outside `src/pages/`, so Astro does not build it as a route.

Do **not** move any of these back into `src/pages/` without first rebuilding the page
from the Launch-Correction Skeleton and routing all prose through the bilingual copy
store. Canonical data may feed only an explicit allow-list of mapped metadata fields.
