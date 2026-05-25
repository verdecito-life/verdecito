# spec — the canonical model

This folder defines what objects Verdecito knows about, what fields they have, and how they evolve.

## Layout

- [`schema/`](schema/) — one JSON-Schema-style file per object type.
- [`conventions/`](conventions/) — naming, identifiers, frontmatter, lifecycle, filenames.
- [`migrations/`](migrations/) — schema version history and migration notes.

## Object types in v0.1

Real (with full schema):

- `tracker` — the singleton per instance, declaring identity and skin.
- `identity` — who the instance is and what it stands for.
- `seed` — a foundational direction.
- `quest` — a concrete initiative under a seed.
- `artifact` — a produced thing (critique, insight, synthesis, gift, document).
- `channel` — a way for the world to reach the instance (sponsor link, feedback channel, partner).

Experimental (stub schemas, fields TBD):

- `sprint` — a time-bounded grouping of quests.
- `task` — a unit of work within a quest.
- `ask` — a request for support.

Intentionally deferred:

- `project` — re-evaluated for v0.2 once there are multiple seeds per project.

## Stability

All v0.1 schemas are **experimental**. Identifiers (URNs) are stable across versions; field shapes may change. See [`migrations/`](migrations/).

## Layered composition (forward-looking)

A future version may support overlay composition. v0.1 ships flat: each instance carries its own complete files.
