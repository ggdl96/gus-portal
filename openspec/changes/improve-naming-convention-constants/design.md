## Context

The project currently has inconsistent naming patterns across constants modules, including PascalCase exports for immutable maps, `set*` helper names for computed values, mixed object key casing, and default export usage in `constants/`. The change is scoped to naming normalization for constants modules and required import updates, without functional behavior changes.

Constraints:
- Keep runtime behavior unchanged.
- Apply renames and import updates in the same change set to avoid breakage.
- Limit compatibility aliases to a short migration window.

## Goals / Non-Goals

**Goals:**
- Standardize naming in constants modules using deterministic rules.
- Eliminate ambiguous default exports in `constants/`.
- Provide a migration sequence that prevents stale import references.
- Make naming requirements explicit enough for automated plan auditing.

**Non-Goals:**
- Introduce new product behavior.
- Refactor unrelated modules outside naming-related import updates.
- Change backend/API contracts.
- Add full lint automation in this same iteration.

## Decisions

1. File names in `constants/` remain/transition to `kebab-case`.
- Rationale: aligns with common TS/RN module naming and existing project preference.
- Alternative considered: UPPER_SNAKE_CASE file names; rejected due ecosystem mismatch and lower readability.

2. Immutable exported constant identifiers use `UPPER_SNAKE_CASE`.
- Rationale: makes constant semantics explicit and aligns with project rule for constants.
- Alternative considered: PascalCase for grouped maps; rejected to reduce naming ambiguity.

3. Computed helper functions use `compute*` camelCase.
- Rationale: communicates pure derivation rather than mutation (`set*` implies side effects).
- Alternative considered: `get*`; rejected in favor of a stronger derivation signal.

4. Default exports are disallowed in `constants/`; use named exports only.
- Rationale: named exports make refactors and import audits safer and more explicit.
- Alternative considered: keep defaults for compatibility; rejected for long-term consistency.

5. Migration relies on explicit old->new mapping with temporary aliases allowed only for a single pass.
- Rationale: enables safe incremental updates while preserving deterministic cleanup.
- Alternative considered: big-bang rename with no aliases; rejected due higher breakage risk.

## Risks / Trade-offs

- [Missed import updates] -> Mitigation: include explicit import-impact tasks and stale import verification step.
- [Temporary alias lingering] -> Mitigation: add explicit task to remove aliases before completion.
- [Snapshot churn from symbol renames] -> Mitigation: isolate naming-only change scope and run test suite after import migration.
- [Overly broad refactor scope] -> Mitigation: enforce strict in-scope/out-of-scope boundaries in tasks.

## Migration Plan

1. Rename and export-update constants modules according to authoritative mapping.
2. Add temporary compatibility aliases where needed for one migration pass.
3. Update all impacted imports and type references across dependent files.
4. Run lint/tests and targeted grep checks for old symbols.
5. Remove temporary aliases and re-verify no stale references remain.

Rollback strategy:
- Revert rename commit(s) as a unit if import breakage is detected before merge.
- Keep rename and import changes in a single logical commit/PR slice to make rollback straightforward.

## Open Questions

- Which exact lint rule configuration should become the long-term enforcement gate in follow-up work?
