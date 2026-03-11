---
name: openspec-audit-plan
description: Post-ff audit of generated OpenSpec artifacts for completeness against CANONICAL.md and implementation sufficiency.
license: MIT
compatibility: Requires openspec CLI.
metadata:
  author: openspec
  version: "1.0"
  generatedBy: "1.1.1"
---

Audit the implementation plan produced by `/opsx:ff`. This is the post-ff plan audit (artifact-level), not the pre-ff concept-alignment gate.

**Naming note**
- `/opsx:consolidate` = pre-ff quality gate (replaces deprecated ideas-level `/opsx:audit`)
- `/opsx:audit-plan` = post-ff plan-level quality gate

**Input**
- Change name under `openspec/changes/` (for example: `github-security`)

**Steps**

1. **Locate the change**

   If input is provided:
   - Check `openspec/changes/<input>/` exists
   - If not found, run `openspec list --json` and let user choose

   If no input:
   - Run `openspec list --json`
   - Ask user to select a change

   Do not proceed without a confirmed change.

2. **Load artifacts**

   Run:
   ```bash
   openspec status --change "<name>" --json
   ```

   Read artifacts from `openspec/changes/<name>/`:
   - `proposal.md`
   - `design.md`
   - `tasks.md`
   - `specs/`

   Locate source `CANONICAL.md`:
   - Check if proposal references a topic folder
   - Check `.ideas/*/CANONICAL.md`, `.wip/*/CANONICAL.md`, `.notes/*/CANONICAL.md`
   - If none found, skip completeness checks and run sufficiency-only audit with explicit warning

3. **Completeness audit (artifacts vs CANONICAL.md)**

   Extract canonical items:
   - Resolved decisions
   - Requirements/goals
   - Architecture constraints/boundaries
   - Security considerations
   - Non-goals/exclusions
   - Business rules

   Trace each item across proposal/design/tasks/specs as:
   - `Covered`, `Partial`, `Distorted`, `Missing`

   Detect added scope not present in CANONICAL.md and flag as:
   - Reasonable inference, needs justification, or out of scope

4. **Implementation sufficiency audit (tasks executable without guessing)**

   For each task, check:
   - Precision: vague verbs/targets, missing concrete parameters, implicit knowledge
   - Logic completeness: business rules, edge cases, error paths, state transitions, data shapes
   - Codebase grounding: referenced files/functions/interfaces exist and match claims
   - Dependency coherence: ordering, dependency direction, circularity, shared component consistency

5. **Generate report**

   Include:
   - Verdict: `READY` or `NOT READY`
   - Completeness coverage table
   - Added scope table
   - Tasks with insufficient detail
   - Logic gaps
   - Codebase mismatches
   - Dependency issues
   - Ordered fix list (if NOT READY)

6. **Write report**

   Save report to:
   - `openspec/changes/<name>/AUDIT-PLAN-REPORT.md`

   Show full report to user.

**Audit principles**

- Trace every canonical item or explicitly mark missing
- Prefer specific missing details over vague judgments
- Judge from implementer perspective: can code be written now without clarification?
- Verify high-impact codebase claims; do not trust stale references
- Apply proportional depth: deeper verification for architecture and security tasks

**Guardrails**

- NEVER modify change artifacts during audit (read-only audit)
- NEVER auto-fix issues; report required fixes
- NEVER skip completeness checks when CANONICAL.md exists
- If `tasks.md` is missing, tell user to run `/opsx:ff` or `/opsx:continue` first
