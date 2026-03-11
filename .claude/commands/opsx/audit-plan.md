---
name: "OPSX: Plan Audit"
description: "Post-ff audit of generated OpenSpec artifacts for completeness against CANONICAL.md and implementation sufficiency"
category: Workflow
tags: [workflow, audit, quality-gate, experimental]
---

Audit the implementation plan produced by `/opsx:ff`. This is the **post-ff plan audit** (artifact-level), not the pre-plan concept-alignment `/opsx:consolidate` gate. Checks two things:

1. **Completeness**: Did ff cover everything from CANONICAL.md? Are there dropped requirements, distorted decisions, or missing scope?
2. **Implementation sufficiency**: Can each task be executed without guessing? Are business rules explicit, logic paths defined, and details concrete enough?

This is the quality gate between planning and implementation. It answers: **"Can a developer (or `/opsx:apply`) execute this plan without ambiguity?"**

**Input**: The argument after `/opsx:audit-plan` is a change name (e.g., `/opsx:audit-plan github-security`).

**Naming note**:

- `/opsx:consolidate` = pre-plan concept-alignment gate before `/opsx:ff`
- `/opsx:audit-plan` = plan-level quality gate after `/opsx:ff`

**Steps**

1. **Locate the change and its source**

   If input is provided:
   - Check `openspec/changes/<input>/` exists
   - If not found, run `openspec list --json` and let the user select

   If no input:
   - Run `openspec list --json` to get available changes
   - Use **AskUserQuestion** to let the user select

   **IMPORTANT**: Do NOT proceed without a confirmed change.

2. **Load all artifacts**

   ```bash
   openspec status --change "<name>" --json
   ```

   Read all artifacts that exist in `openspec/changes/<name>/`:
   - `proposal.md` - scope, goals, non-goals
   - `design.md` - architecture decisions, component design
   - `tasks.md` - implementation tasks
   - `specs/` - capability specifications, requirements, scenarios

   Also locate the source CANONICAL.md:
   - Check if the proposal references a topic folder
   - Check `.ideas/*/CANONICAL.md`, `.wip/*/CANONICAL.md`, and `.notes/*/CANONICAL.md` for topic match
   - If no CANONICAL.md found, skip completeness checks (warn the user that only sufficiency checks will run)

3. **Completeness audit (artifacts vs CANONICAL.md)**

   Compare the ff-generated artifacts against CANONICAL.md to find drift.

   ### 3a. Extract canonical requirements

   From CANONICAL.md, extract:
   - Every resolved position/decision
   - Every stated requirement or goal
   - Every architecture boundary or constraint
   - Every security consideration
   - Every explicitly stated non-goal or exclusion
   - Every business rule or behavioral specification

   Build a checklist of canonical items.

   ### 3b. Trace each canonical item to artifacts

   For each canonical item, search across proposal, design, tasks, and specs:
   - **Covered**: Item is clearly represented in at least one artifact
   - **Partial**: Item is mentioned but detail is reduced or nuance is lost
   - **Distorted**: Item appears but the meaning has shifted (e.g., decision was X, artifact says Y)
   - **Missing**: Item does not appear in any artifact

   ### 3c. Detect added scope

   Check if ff added anything NOT in CANONICAL.md:
   - Tasks that address concerns not raised in the canonical document
   - Design decisions not grounded in any canonical position
   - Requirements that appear in specs but have no canonical source

   Added scope is not automatically wrong (ff may have inferred necessary work), but it must be flagged for review.

   **Output**: Coverage table showing each canonical item and its trace status.

4. **Implementation sufficiency audit (can each task be executed?)**

   For each task in `tasks.md`, evaluate whether it contains enough detail to implement without guessing.

   ### 4a. Precision check

   Flag tasks that contain:
   - **Vague verbs**: "handle", "manage", "support", "implement properly", "deal with"
   - **Missing targets**: No file paths, no function names, no specific components referenced
   - **Abstract descriptions**: "Add error handling" (which errors? what response? what recovery?)
   - **Unspecified parameters**: "Add a timeout" (what value? what scope? what happens on timeout?)
   - **Implicit knowledge**: Assumes the implementer knows something not stated in the artifacts

   For each flagged task, specify exactly what's missing.

   ### 4b. Logic completeness check

   For each task and its related specs, check:
   - **Business rules**: Are all conditional paths explicit? (if X then Y, else Z — not just "handle X appropriately")
   - **Edge cases**: Are boundary conditions specified? (empty inputs, max values, concurrent access)
   - **Error paths**: For every operation that can fail, is the failure mode specified? (what error, what status code, what user message, what recovery)
   - **State transitions**: If the task involves state changes, are all valid transitions defined? Are invalid transitions explicitly rejected?
   - **Data shapes**: Are input/output formats specified? (field names, types, required vs optional, validation rules)

   ### 4c. Codebase grounding check

   For each task that references existing code:
   - Verify the referenced files/functions/classes exist
   - Verify the described behavior matches actual code
   - Verify the assumed interfaces are accurate (function signatures, return types, method availability)
   - Flag tasks that assume patterns or infrastructure that don't exist

   ### 4d. Dependency coherence check

   Across all tasks:
   - Do tasks reference each other's outputs correctly?
   - Is the ordering logical? (Does task 5 depend on something task 7 creates?)
   - Are there circular dependencies?
   - Are there tasks that should reference a shared component but each define their own?

5. **Generate audit report**

   ```markdown
   ## Plan Audit Report: <change-name>

   **Audited**: <date>
   **Change**: openspec/changes/<name>/
   **Source**: <source-folder>/CANONICAL.md (or "no CANONICAL.md found")
   **Verdict**: READY / NOT READY

   ---

   ### Completeness (Artifacts vs CANONICAL.md)

   | #   | Canonical Item         | Status                                  | Artifact Location | Notes |
   | --- | ---------------------- | --------------------------------------- | ----------------- | ----- |
   | 1   | <position/requirement> | Covered / Partial / Distorted / Missing | proposal.md:L42   | ...   |

   **Summary**: X/Y canonical items fully covered, N partial, M missing, K distorted

   #### Added Scope (not in CANONICAL.md)

   | #   | Added Item | Artifact     | Assessment                                                |
   | --- | ---------- | ------------ | --------------------------------------------------------- |
   | 1   | <item>     | tasks.md:L15 | Reasonable inference / Needs justification / Out of scope |

   ---

   ### Implementation Sufficiency

   #### Tasks with Insufficient Detail

   | #   | Task                            | Issue Type    | What's Missing                                                          | Suggestion                                                                        |
   | --- | ------------------------------- | ------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
   | 1   | "Add authentication middleware" | vague_target  | No file path, no specific middleware pattern, no token format specified | Specify: file path, JWT vs API key, validation rules, error responses             |
   | 2   | "Handle rate limiting"          | missing_logic | No rate values, no scope (per-user? global?), no response on limit hit  | Specify: limits per endpoint, window size, 429 response shape, retry-after header |

   Issue types: `vague_verb`, `vague_target`, `missing_logic`, `missing_error_path`, `missing_data_shape`, `missing_business_rule`, `ungrounded_reference`, `implicit_knowledge`

   #### Logic Gaps

   | #   | Area             | Gap Description                                            | Impact                                      |
   | --- | ---------------- | ---------------------------------------------------------- | ------------------------------------------- |
   | 1   | <spec/task area> | <what conditional/edge case/state transition is undefined> | <what could go wrong during implementation> |

   #### Codebase Mismatches

   | #   | Task/Spec Claim                      | Actual Codebase State                             | Fix                                       |
   | --- | ------------------------------------ | ------------------------------------------------- | ----------------------------------------- |
   | 1   | "Modify auth_utils.validate_token()" | Function is `verify_token()`, different signature | Update task to reference correct function |

   #### Dependency Issues

   | #   | Issue                           | Tasks Involved | Fix                           |
   | --- | ------------------------------- | -------------- | ----------------------------- |
   | 1   | Task 5 assumes output of task 7 | tasks 5, 7     | Reorder: task 7 before task 5 |

   ---

   ### Verdict

   **READY**: All canonical items covered (or justified additions), all tasks have sufficient detail to implement.

   **NOT READY**: Issues found that would force the implementer to guess.

   If NOT READY:

   ### Issues to Resolve

   Ordered by impact (resolve top items first):

   1. **[Completeness]** <canonical item> is missing from artifacts
      - **Impact**: <what gets skipped if not addressed>
      - **Fix**: Add to <artifact> covering <specific detail>

   2. **[Sufficiency]** Task "<task name>" lacks <specific detail>
      - **Impact**: Implementer will guess <what>, risking <consequence>
      - **Fix**: Specify <exactly what needs to be added>

   3. ...

   ### After Fixing

   Update the artifacts directly, then re-run `/opsx:audit-plan <change-name>`.
   ```

6. **Save the report**

   Write the report to `openspec/changes/<name>/AUDIT-PLAN-REPORT.md`.

   Display the full report to the user.

**Audit Principles**

- **Trace everything**: Every canonical item must map to an artifact or be explicitly flagged as missing
- **Specificity over judgment**: Don't say "task is vague" — say exactly what's missing ("no file path, no error response format, no timeout value")
- **Implementer perspective**: Judge sufficiency by asking "could I write this code right now without asking any questions?"
- **No false comfort**: Don't PASS a plan that will cause `/opsx:apply` to pause and ask for clarification
- **Code is truth**: When artifacts claim something about the codebase, verify it. Stale references become implementation blockers.
- **Proportional depth**: Spend more verification effort on security tasks and architecture-defining tasks than on documentation or cleanup tasks

**Guardrails**

- NEVER modify the artifacts (this is a read-only audit)
- NEVER auto-fix issues — report them for the user to resolve
- NEVER skip completeness checks when a CANONICAL.md exists
- If no CANONICAL.md exists, run only sufficiency checks and clearly state that completeness was not verified
- If a task is genuinely self-explanatory (e.g., "Delete deprecated file X.py"), don't flag it for lacking detail
- Keep codebase verification focused on the most impactful claims (top 10-15) to avoid excessive runtime
- If the change has no tasks.md yet (artifacts incomplete), tell the user to run `/opsx:ff` or `/opsx:continue` first
