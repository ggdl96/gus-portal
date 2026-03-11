---
name: "OPSX: Consolidate"
description: "Consolidate idea docs into a consistency report first; require user-driven fixes before canonicalization"
category: Workflow
tags: [workflow, consolidate, quality-gate, experimental]
---

Consolidate scattered planning files into a single consistency review. This command is a **quality gate** that prioritizes clarity over guessing.

It answers: **"What is inconsistent, misleading, stale, or incomplete, and what should the human decide next?"**

**Input**: The argument after `/opsx:consolidate` is:
- A topic folder in `.ideas/`, `.wip/`, or `.notes/` (e.g., `/opsx:consolidate github-security`), OR
- A direct folder path containing markdown files.

**Operating rule**: Do **not** auto-resolve contradictions by inventing the "best" answer. Surface issues, explain why they matter, and request iteration.

**Steps**

1. **Locate source files**

   If input is provided:
   - Check `.ideas/<input>/`, then `.wip/<input>/`, then `.notes/<input>/`
   - If not found, check if input is a direct path
   - If still not found, list available folders in `.ideas/`, `.wip/`, `.notes/` and ask the user to choose

   If no input:
   - List candidate topic folders from `.ideas/`, `.wip/`, `.notes/`
   - Indicate which contain `CANONICAL.md`
   - Ask the user to choose

   **IMPORTANT**: Do not continue without a confirmed source folder.

2. **Read all markdown files**

   Read every `.md` in the folder and extract:
   - Decisions/positions
   - Architecture and data-flow claims
   - Codebase claims (paths, symbols, behavior assumptions)
   - Numeric constraints (limits, thresholds, SLAs)
   - Placeholders/open questions (`TBD`, `___`, unchecked boxes)
   - External/internal references

   Build a timeline (older vs newer docs).

3. **Run consistency checks (do not resolve by guessing)**

   ### Check 1: Internal consistency
   - Find contradictions across files and within files
   - Record both claims with file:line evidence

   ### Check 2: Codebase alignment
   - Verify top 10-15 critical claims against code
   - Classify as confirmed, stale, or incorrect

   ### Check 3: Decision completeness
   - Find unresolved decisions and classify as blocking/non-blocking

   ### Check 4: Reference integrity
   - Validate cross-references and code paths

   ### Check 5: Implementation readiness
   - Identify missing boundaries, data contracts, error paths, and security considerations

4. **Create issue list for human iteration**

   For each issue include:
   - `id`
   - `type` (`contradiction`, `stale_claim`, `missing_decision`, `missing_error_path`, `missing_security`, `broken_reference`, `scope_ambiguity`)
   - `severity` (`blocking`, `high`, `medium`, `low`)
   - `why_this_is_a_problem`
   - `evidence` (file:line)
   - `options_for_user` (A/B if applicable)
   - `suggested_fix_format` (what to write/change, concretely)

   **Rule**: Suggest fixes structurally, but do not choose unresolved business/architecture decisions for the user.

5. **Set verdict**

   - **READY**: No blocking/high consistency issues and enough specificity for `/opsx:ff`
   - **NOT READY**: Any blocking consistency issue, unresolved critical contradiction, or major ambiguity

6. **Write output in the source folder**

   Always write:
   - `<source-folder>/CONSOLIDATION-REVIEW.md`

   Write `<source-folder>/CANONICAL.md` only if verdict is **READY**.

   `CONSOLIDATION-REVIEW.md` format:

   ```markdown
   # Consolidation Review: <topic>

   **Status**: READY | NOT READY
   **Reviewed**: <date>
   **Source folder**: <path>
   **Files scanned**: <count>

   ## Check Results

   | Check | Result | Notes |
   | --- | --- | --- |
   | Internal Consistency | PASS/WARN/FAIL | ... |
   | Codebase Alignment | PASS/WARN/FAIL | ... |
   | Decision Completeness | PASS/WARN/FAIL | ... |
   | Reference Integrity | PASS/WARN/FAIL | ... |
   | Implementation Readiness | PASS/WARN/FAIL | ... |

   ## Issues to Iterate

   | ID | Type | Severity | Why this is a problem | Evidence | Options for user | Suggested fix format |
   | --- | --- | --- | --- | --- | --- | --- |

   ## Recommended Iteration Order

   1. <blocking issue>
   2. <next issue>
   3. Re-run `/opsx:consolidate <topic-or-path>`
   ```

   If READY, `CANONICAL.md` must include:
   - Explicitly resolved positions only
   - Inline verification markers `[verified: <date>]` for checked claims
   - A short "decisions made by human" section for auditability

7. **Report back to user**

   Show:
   - Verdict
   - Count of issues by severity
   - Top blocking issues
   - Exact next step: iterate on listed items, then re-run consolidate

**Guardrails**

- NEVER silently resolve contradictions with invented assumptions
- NEVER invent missing details to make a plan look complete
- NEVER modify source files (except creating review/canonical outputs)
- Prefer concrete file:line evidence
- Keep verification effort proportional (focus on security + architecture first)
- If unresolved issues remain, output must be NOT READY
