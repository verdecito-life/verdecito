# Verdecito

Public spec and reference instance for Verdecito v0.1.

Verdecito is a way to organize work that cares for life. This repository defines its shape: an object model, a default skin, and a curated reference instance that anyone can read, fork, or follow.

---

## Status

**v0.1 — initial public scaffold.** The spec is experimental. Object shapes may change before v1.0; identifiers will not.

This repo is the **public** surface. Private downstream instances exist (the maintainer's own workspace is one of them) and may contain more than what is published here. The public spec constrains exported shapes; it does not constrain what a private instance may contain.

---

## How to navigate

- [`spec/`](spec/README.md) — the canonical model. Schemas, conventions, migrations.
- [`skins/verdecito/`](skins/verdecito/README.md) — the default skin: vocabulary and render policy for the public Verdecito surface.
- [`instances/verdecito/`](instances/verdecito/README.md) — the first reference instance. Real seeds, quests, sprints, artifacts.
- [`examples/minimal-instance/`](examples/minimal-instance/README.md) — a minimal starter for anyone forking Verdecito.

---

## What "spec + reference instance" means

The repository is structured as **model first**, surfaces later:

- The **spec** defines object types (seeds, quests, artifacts, etc.), their fields, and how they relate.
- The **skin** provides vocabulary (engine `channel` → Verdecito `door`) and a render policy (what becomes public, what stays as teaser, what is filtered).
- The **instance** holds actual content shaped by the spec.

A future surface (website, dashboard, GPT, partner view) reads from the instance through a skin. It does not duplicate the source of truth.

---

## License

Split license:

- Code, spec schemas, configuration → [MIT](LICENSE).
- Prose, object content, methodology → [CC BY 4.0](LICENSE-CONTENT).

See [`NOTICE`](NOTICE) for the full statement. Forks may be public, private, commercial, renamed, adapted, or closed. Attribution required for CC BY content.

---

## Support

GitHub Sponsors: https://github.com/sponsors/rivera-ernesto

---

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md). The shortest path: open an issue using the `object change` template, or fork and propose.

---

## Verdecito Engine (forward-looking)

When Verdecito has more than one real instance — and the model has been stress-tested by use — the spec and skin layers may be extracted into a reusable engine. That is forward-looking. v0.1 is a **public spec plus a reference instance**, nothing more.
