## 1. Baseline and frozen mapping

- [ ] 1.1 Capture pre-change reference baseline from repo root using: `rg -n \"from '@/constants/Colors'|from '@/constants/skeleton'|from '@/constants/banner-sizes'|\\bColors\\b|\\bContentAlignMapper\\b|\\bBannerSizes\\b|\\bsetHighlightMainSize\\b|\\bsetBannerDetailedSize\\b|\\bsetBannerSmallSize\\b|\\bsetBannerMediumSize\\b\" app app-example components hooks models constants`.
- [ ] 1.2 Freeze authoritative rename mapping in this task file before edits: `Colors -> THEME_COLORS`, `ContentAlignMapper -> CONTENT_ALIGN_MAP`, `setHighlightMainSize -> computeHighlightMainSize`, `setBannerDetailedSize -> computeBannerDetailedSize`, `setBannerSmallSize -> computeBannerSmallSize`, `setBannerMediumSize -> computeBannerMediumSize`, default `BannerSizes -> BANNER_SIZES`, `constants/Colors.ts -> constants/theme-colors.ts`, key `Detailed -> detailed`.

## 2. Constants module refactor (symbols and file paths)

- [ ] 2.1 Rename `constants/Colors.ts` to `constants/theme-colors.ts` and rename export `Colors` to named export `THEME_COLORS`.
- [ ] 2.2 Update `constants/skeleton.ts` export from `ContentAlignMapper` to `CONTENT_ALIGN_MAP`.
- [ ] 2.3 In `constants/banner-sizes.ts`, rename helpers explicitly: `setHighlightMainSize -> computeHighlightMainSize`, `setBannerDetailedSize -> computeBannerDetailedSize`, `setBannerSmallSize -> computeBannerSmallSize`, `setBannerMediumSize -> computeBannerMediumSize`.
- [ ] 2.4 Replace default export `BannerSizes` with named export `BANNER_SIZES` in `constants/banner-sizes.ts`.
- [ ] 2.5 Normalize banner-size map keys in `BANNER_SIZES` to consistent `camelCase` by renaming `Detailed` to `detailed` and keeping runtime dimensions unchanged.

## 3. Consumer import and type migration

- [ ] 3.1 Update all affected imports in `app/`, `app-example/`, `components/`, `hooks/`, and `models/` from old symbols/paths to canonical names and `constants/theme-colors`.
- [ ] 3.2 Update dependent type references that use renamed constant exports (for example `keyof typeof ContentAlignMapper` -> `keyof typeof CONTENT_ALIGN_MAP`).
- [ ] 3.3 Add temporary compatibility aliases only if migration cannot be completed atomically in a single commit; if added, annotate alias with removal note and delete in task 5.1.

## 4. Behavior and correctness validation

- [ ] 4.1 Run `npm run lint` and `npm test`; both must pass without adding functional logic changes.
- [ ] 4.2 Validate stale-reference removal using repo-root grep and require zero matches for: `from '@/constants/Colors'`, `\\bColors\\b` (constants symbol), `\\bContentAlignMapper\\b`, `\\bBannerSizes\\b`, `\\bsetHighlightMainSize\\b`, `\\bsetBannerDetailedSize\\b`, `\\bsetBannerSmallSize\\b`, `\\bsetBannerMediumSize\\b`, and `\\.Detailed\\b` in banner-size consumers.
- [ ] 4.3 Validate canonical replacements exist with non-zero matches for: `from '@/constants/theme-colors'`, `\\bTHEME_COLORS\\b`, `\\bCONTENT_ALIGN_MAP\\b`, `\\bBANNER_SIZES\\b`, `\\bcomputeHighlightMainSize\\b`, `\\bcomputeBannerDetailedSize\\b`, `\\bcomputeBannerSmallSize\\b`, and `\\bcomputeBannerMediumSize\\b`.
- [ ] 4.4 Validate behavior-preservation for renamed constants consumers by running targeted component/hook tests or snapshot updates only if failures are rename-related; do not introduce behavior changes.

## 5. Alias cleanup and completion gate

- [ ] 5.1 Remove all temporary compatibility aliases introduced in task 3.3 (if none were added, record \"no aliases added\").
- [ ] 5.2 Re-run the stale-reference and canonical-presence grep checks from tasks 4.2 and 4.3; change is complete only if all stale checks are zero-match and canonical checks are non-zero-match.

## 6. Follow-up (non-blocking)

- [ ] 6.1 Document follow-up lint rule implementation task for constants naming enforcement (non-blocking, outside this change’s implementation completion criteria).
