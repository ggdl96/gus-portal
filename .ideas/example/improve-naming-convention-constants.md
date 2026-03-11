# Improve Naming Convention for Constants

## Context

This project has naming drift in `constants/` and imported identifiers. We want one convention set that is explicit enough for LLM planning and implementation without guessing.

## Current Inconsistencies (Observed)

- `ai.config.yml` says constants should be `UPPER_SNAKE_CASE`.
- `constants/Colors.ts` exports `Colors` (PascalCase object).
- `constants/skeleton.ts` exports `ContentAlignMapper` (PascalCase constant).
- `constants/banner-sizes.ts` exports functions with `set*` prefix and a default `BannerSizes` object with mixed keys (`highlightMain`, `Detailed`, `small`, `medium`).

## Goal

Define and enforce a naming convention for constants that is:

- Predictable in file naming and export naming.
- Compatible with existing React Native usage patterns.
- Safe to migrate incrementally without breaking imports.

## Authoritative Convention (Iteration 2)

### File Naming Rule

- Files in `constants/` MUST use `kebab-case`.
- `UPPER_SNAKE_CASE` applies to exported constant identifiers, not file names.
- New files MUST use semantic domain names (for example, `banner-sizes.ts`, `theme-colors.ts`).

### Export Naming Rule

- Immutable constant values/maps MUST be `UPPER_SNAKE_CASE`.
- Computed helper functions MUST be `camelCase` with `compute*` prefix.
- Type names/interfaces MUST be `PascalCase`.
- Default exports in `constants/` are forbidden for this iteration and future additions.

### Object Key Rule

- Use `camelCase` keys for runtime object properties unless a protocol requires a different format.
- Keys in the same map MUST use one style only (no mixed `Detailed` + `small`).

## Authoritative Mapping (Old -> New)

### Files

- `constants/Colors.ts` -> `constants/theme-colors.ts`
- `constants/skeleton.ts` -> `constants/skeleton.ts` (file unchanged)
- `constants/banner-sizes.ts` -> `constants/banner-sizes.ts` (file unchanged)

### Exports

- `Colors` -> `THEME_COLORS`
- `ContentAlignMapper` -> `CONTENT_ALIGN_MAP`
- `setHighlightMainSize` -> `computeHighlightMainSize`
- `setBannerDetailedSize` -> `computeBannerDetailedSize`
- `setBannerSmallSize` -> `computeBannerSmallSize`
- `setBannerMediumSize` -> `computeBannerMediumSize`
- default export `BannerSizes` -> named export `BANNER_SIZES`

### Object Keys in `BANNER_SIZES`

- `highlightMain` -> `highlightMain` (unchanged)
- `Detailed` -> `detailed`
- `small` -> `small` (unchanged)
- `medium` -> `medium` (unchanged)

## Scope

In scope for first pass:

- `constants/Colors.ts`
- `constants/skeleton.ts`
- `constants/banner-sizes.ts`
- Import sites that consume the above constants.
- Type references that depend on renamed exports from those constants files.

Out of scope for first pass:

- Functional logic changes outside constant naming refactors.
- Public API refactors outside local app usage.
- Any naming changes requiring backend contract updates.

### Scope Clarification

Import updates in non-`constants/` folders are in scope only when required to consume renamed constants from this iteration.

## Migration Strategy

1. Rename exports and file targets according to the authoritative mapping above.
2. Add temporary compatibility aliases only for one migration pass.
3. Update all impacted imports in the same change set.
4. Remove temporary aliases before closing the change.
5. Prohibit adding new default exports in `constants/`.

## Enforcement Mechanism (Iteration 1 Delivery)

- Primary enforcement: explicit review checklist + `/opsx:audit-plan` sufficiency checks.
- Secondary enforcement: add lint guard in a follow-up iteration (non-blocking for this pass).

## Risks

- Broken imports from renamed exports.
- Snapshot updates due to import/prop wiring changes.
- Inconsistent partial migration if done file-by-file without import audit.

## Inputs for `/opsx:consolidate`

Use this file as the source idea and treat the "Authoritative Mapping" and naming rules as resolved decisions.

## Acceptance Criteria for `/opsx:audit-plan`

The plan should be `READY` only if:

- Every rename task includes exact target file paths.
- Every rename task includes old name -> new name mapping.
- Every task identifies impacted imports.
- Cleanup/removal of temporary aliases is explicitly planned.
- Test/lint verification tasks are concrete (commands and expected outcomes).
- The plan enforces "no default exports in `constants/`" for touched files.
- The plan includes a validation pass for stale imports after renames.

## Remaining Non-Blocking Questions

- Should we eventually split `theme-colors.ts` into multiple domain files after this naming pass?
- Which lint rule configuration should enforce the naming standard automatically?

## Iteration Log

- Iteration 1: Created baseline problem framing, scope, proposed conventions, and audit-ready acceptance criteria.
- Iteration 2: Resolved naming policy decisions, added authoritative old->new mappings, and defined enforcement approach.
