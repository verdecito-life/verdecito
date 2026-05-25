# Migrations

How the Verdecito spec evolves between versions.

## Versioning

Semantic versioning (`major.minor.patch`):

- **patch** — clarifications, no schema changes.
- **minor** — backward-compatible additions (new optional fields, new enum values, new object types).
- **major** — breaking changes (removed or renamed fields, changed enum semantics).

Each minor or major release ships a migration document here describing what changed, how to update existing instances, and what is deprecated or removed.

## Principles

- **Never rename IDs.** Object URNs are forever stable.
- **Deprecate before removing.** A field deprecated in v0.2 cannot be removed before v0.3.
- **Document, then break.**
