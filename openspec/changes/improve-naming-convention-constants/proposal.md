## Why

Naming in `constants/` is inconsistent across files, exported identifiers, helper function names, and default vs named export style. This causes avoidable ambiguity during implementation planning and LLM execution, where unclear naming policies lead to guesswork and inconsistent refactors.

## What Changes

- Establish a single naming policy for `constants/` modules:
  - `kebab-case` file names
  - `UPPER_SNAKE_CASE` exported immutable constant identifiers
  - `compute*` camelCase helper functions for derived values
  - named exports only (no default exports)
- Apply the policy to the currently scoped constants modules and their import sites.
- Rename file/export identifiers according to canonical old->new mapping, including `Colors -> THEME_COLORS` and `BannerSizes -> BANNER_SIZES`.
- Normalize mixed key casing in banner size maps (`Detailed -> detailed`).
- Add migration sequencing constraints to avoid stale imports and long-lived compatibility aliases.

## Capabilities

### New Capabilities
- `constants-naming-convention`: Define and enforce deterministic naming requirements for constants files and exported symbols, including migration requirements for import updates.

### Modified Capabilities
- None.

## Impact

- Affected code:
  - `constants/Colors.ts` (rename target `constants/theme-colors.ts`)
  - `constants/skeleton.ts`
  - `constants/banner-sizes.ts`
  - Dependent import/type usage across `components/`, `hooks/`, `models/`, and `app/` paths that consume these constants
- APIs: no external API contract changes.
- Dependencies: no new runtime dependencies required for this change.
- Tooling/process:
  - Enforces named-export style in touched constants modules.
  - Sets up follow-up lint enforcement as a later iteration (not required for this change to be implemented).
