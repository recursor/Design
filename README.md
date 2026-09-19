# Design

INOV8's design systems, one folder per system under `systems/`, mirrored from their Claude design-system artifacts. Each folder carries the brand book (`README.md`), the tokens (`tokens.css`, `tokens.json`), per-component cards and previews, a `SKILL.md` that tells an agent how to design with it, and an `ARTIFACT.md` naming the artifact it was pulled from.

| System | Folder | Source artifact |
|---|---|---|
| INOV8 Orthopedics | [`systems/inov8-orthopedics/`](systems/inov8-orthopedics/) | see its `ARTIFACT.md` |

## Using a system from an agent

**Claude Code:** install the `inov8-design-skills` plugin from the `inov8-plugins` marketplace (`/plugin marketplace add recursor/INOV8Skills`, then `/plugin install inov8-design-skills@inov8-plugins`). Its skill fetches this repo and follows the system's own `SKILL.md`.

**Codex:** install the system's skill straight from this repo, then restart Codex:

```
$skill-installer install https://github.com/recursor/Design/tree/main/systems/inov8-orthopedics
```

**Anything else:** clone the repo and have the agent read `systems/<system>/SKILL.md` first.

## Editing

The artifact is the source of truth. Edit it there and re-sync the folder; the only repo-only files are each system's `ARTIFACT.md` and `SKILL.md`, which are never pushed to the artifact.
