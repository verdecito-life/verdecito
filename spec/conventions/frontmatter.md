# Frontmatter

Every Markdown object file begins with YAML frontmatter.

## Required fields

```yaml
---
id: quest:verdecito:001
type: quest
title: Conversations into Living Memory
visibility: public
lifecycle: active
schema_version: 0.1.0
created: 2026-05-25
updated: 2026-05-25
---
```

## Optional fields

- `summary` — one-paragraph description.
- `relationships` — a nested block listing related objects by URN.
- `sdgs` — array of relevant UN SDG numbers (1–17). Only declare with observable, defensible relevance.
- `source` — for artifacts, a pointer to the original (URL, path, free-form).
- `kind` — for artifacts: critique, insight, synthesis, gift, document, other.
- `url` — for channels.

## Relationships

Multi-parent. An object can belong to multiple seeds, sprints, or quests without changing its ID.

```yaml
relationships:
  seeds:
    - seed:verdecito:000
    - seed:verdecito:001
  sprints:
    - sprint:verdecito:001
```

## State axes

- `visibility` — `public`, `teaser`, `private`. Determines where the object may surface.
- `lifecycle` — `draft`, `active`, `archived`. Describes the arc of the work.
- `stability` — `stable`, `experimental`. Applies primarily to spec/schema files.
