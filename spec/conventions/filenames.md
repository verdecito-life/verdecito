# Filenames

## Content files (Markdown objects)

Format: `<sequence>-<slug>.md`

- `<sequence>` zero-padded to 3 digits: `000`, `001`, etc.
- `<slug>` kebab-case, descriptive enough to disambiguate.

Examples:

- `instances/verdecito/seeds/000-foundational.md`
- `instances/verdecito/quests/001-conversations-into-living-memory.md`

Singletons (`tracker.yaml`, `identity.yaml`) live at the instance root with no sequence number.

## Spec and config files

- YAML: `<name>.schema.yaml` for schemas, `<name>.yaml` for config and manifests.
- Use `.yaml`, never `.yml`.

## Filenames vs IDs

The filename can change. The ID (in frontmatter) cannot. If a filename is renamed, update link references; ID references remain valid everywhere.
