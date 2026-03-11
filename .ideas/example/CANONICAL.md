# CANONICAL: Improve Naming Convention for Constants

**Status**: READY  
**Date**: 2026-03-11  
**Source**: `.ideas/example/improve-naming-convention-constants.md`

## Resolved Decisions

1. File names in `constants/` MUST be `kebab-case`. [verified: 2026-03-11]
2. `UPPER_SNAKE_CASE` applies to exported immutable constant identifiers, not file names. [verified: 2026-03-11]
3. Computed helper functions in `constants/` MUST use `camelCase` with `compute*` prefix. [verified: 2026-03-11]
4. Default exports in `constants/` are forbidden for this iteration and future additions. [verified: 2026-03-11]
5. Constant map object keys MUST be consistent and use `camelCase` unless protocol requirements dictate otherwise. [verified: 2026-03-11]

## Authoritative Mapping

### Files

- `constants/Colors.ts` -> `constants/theme-colors.ts`
- `constants/skeleton.ts` -> `constants/skeleton.ts` (unchanged)
- `constants/banner-sizes.ts` -> `constants/banner-sizes.ts` (unchanged)

### Exports

- `Colors` -> `THEME_COLORS`
- `ContentAlignMapper` -> `CONTENT_ALIGN_MAP`
- `setHighlightMainSize` -> `computeHighlightMainSize`
- `setBannerDetailedSize` -> `computeBannerDetailedSize`
- `setBannerSmallSize` -> `computeBannerSmallSize`
- `setBannerMediumSize` -> `computeBannerMediumSize`
- default export `BannerSizes` -> named export `BANNER_SIZES`

### Object Keys in `BANNER_SIZES`

- `highlightMain` -> `highlightMain`
- `Detailed` -> `detailed`
- `small` -> `small`
- `medium` -> `medium`

## Scope

In scope:

- `constants/Colors.ts`
- `constants/skeleton.ts`
- `constants/banner-sizes.ts`
- Import/type updates required to consume the renamed constants in non-`constants/` files

Out of scope:

- Functional logic changes beyond naming refactor
- Backend/API contract changes
- Public API redesign outside local app usage

## Implementation Constraints

1. Perform renames and import updates in the same change set.
2. Use temporary compatibility aliases for one migration pass only.
3. Remove compatibility aliases before completing the change.

## Human Decisions Log

- Decided to **not** use `UPPER_SNAKE_CASE` for file names; use `kebab-case` for files and `UPPER_SNAKE_CASE` for exported constants.
- Decided to enforce named exports only in `constants/`.
- Decided to standardize compute helpers on `compute*`.
