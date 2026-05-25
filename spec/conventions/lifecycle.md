# Lifecycle

Three states. No mid-state granularity — status detail belongs in body text, not in the schema.

## States

- **`draft`** — exists, not ready for a public surface.
- **`active`** — alive, being worked on, may be referenced.
- **`archived`** — completed, abandoned, or superseded.

## Transitions

- `draft → active` — when the object is ready to be seen.
- `active → archived` — when work concludes (any reason).
- `archived → active` — rare but allowed. Document why in the body.
