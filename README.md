# Gus Portal

A cross-platform mobile app built with React Native and Expo, running on Android, iOS, and Web.

## Tech Stack

- **Framework**: React Native 0.76 + Expo 52
- **Language**: TypeScript
- **Styling**: NativeWind (Tailwind for React Native)
- **State**: Redux Toolkit
- **Routing**: Expo Router (file-based)
- **Testing**: Jest + React Native Testing Library
- **Runtime**: Node 22

## Get Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npm start           # Metro bundler
   npm run android     # Android emulator
   npm run ios         # iOS simulator
   npm run web         # Web browser
   ```

## Development

```bash
npm test               # Run tests with coverage
npm run lint           # Check code style
npm run update-snapshots  # Update test snapshots
```

## OpenSpec Workflow & Quality Gates

This project uses the **OpenSpec workflow** for structured, LLM-assisted planning and implementation. Two quality gates ensure plan precision before execution:

### Quality Gates

- **`/opsx:consolidate`** — Pre-planning consistency check for scattered ideation docs (`.ideas/`, `.wip/`, `.notes/`). Finds contradictions, unresolved decisions, and codebase mismatches. Produces `CANONICAL.md` only when ready.

- **`/opsx:audit-plan`** — Post-planning sufficiency check for generated artifacts. Validates completeness against source requirements and flags vague tasks that could cause implementation guessing. Produces `AUDIT-PLAN-REPORT.md`.

See the workflow pattern:

```
.ideas/.wip/.notes/  →  /opsx:consolidate  →  CANONICAL.md
                                                      ↓
                         /opsx:ff  ←  (requires CANONICAL.md)
                                                      ↓
                        /opsx:audit-plan  →  AUDIT-PLAN-REPORT.md
                                                      ↓
                        /opsx:apply (when READY)
```

**When to use**: For multi-service features, security-critical changes, and cross-team work. Skip for focused bug fixes and single-file changes.

### Planning & Drafting Artifacts

Use `.ideas/`, `.wip/`, and `.notes/` folders for planning documents, explorations, and iterative thinking with LLM agents. These folders are gitignored to prevent markdown pollution from planning artifacts while preserving iteration history locally.

- `.ideas/` — Feature exploration, hypotheses, viability studies
- `.wip/` — Active planning drafts, implementation checklists, CANONICAL.md
- `.notes/` — Investigation logs, playbooks, test evidence

OpenSpec artifacts (proposal, design, tasks, specs) go in `openspec/changes/` and are tracked.

## AI Assistant Support

This project includes comprehensive documentation for AI coding assistants:

- **[AI_INSTRUCTIONS.md](AI_INSTRUCTIONS.md)** - Quick start guide for AI assistants
- **[ai.config.yml](ai.config.yml)** - Full project configuration
- **[docs/](docs/)** - Platform rules and stack reference
- **[skills/](skills/)** - Specialized workflows (test generation, platform validation, security)

Works with Claude Code, Cursor, GitHub Copilot, and other AI coding tools.
