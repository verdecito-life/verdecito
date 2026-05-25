# Identifiers

All Verdecito objects carry a stable, URN-like identifier.

## Format

```
<type>:<instance>:<slug-or-sequence>
```

Examples:

- `tracker:verdecito`
- `identity:verdecito`
- `seed:verdecito:000`
- `quest:verdecito:001`
- `artifact:verdecito:fresh-eyes-critique`
- `channel:verdecito:github-sponsors`

Singletons (tracker, identity) omit the third segment.

## Rules

- **Stable forever.** Once assigned, never renamed.
- **Lowercase, kebab-case** for slugs.
- **Zero-padded to 3 digits** for sequence numbers (`000`, `001`, ...).
- The `instance` segment matches the folder name under `instances/`.
- The same object may be referenced from many places — relationships go in the `relationships:` block, never in the ID.

## Why IDs are stable

Renaming an ID breaks every external reference and every link in every skin. Renaming a *title* is free.
