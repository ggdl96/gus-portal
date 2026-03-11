---
name: openspec-consolidate
description: Consolidate planning docs by producing a consistency review first, then canonicalize only when ready. Use when the user needs to iterate safely without LLM guesswork.
license: MIT
compatibility: Requires openspec CLI.
metadata:
  author: openspec
  version: "1.1"
  generatedBy: "1.1.1"
---

Consolidate scattered planning files into a single **consistency review**. Do not auto-resolve ambiguous decisions by guessing.

**Input**:
- Topic folder under `.ideas/`, `.wip/`, or `.notes/` (e.g., `github-security`), OR
- Direct folder path containing markdown files.

**Steps**

1. **Locate source files**

   If input is provided:
   - Check `.ideas/<input>/`, `.wip/<input>/`, `.notes/<input>/`
   - Else treat input as direct path

   If no input:
   - List folders from `.ideas/`, `.wip/`, `.notes/`
   - Ask user to pick one

   Do not proceed without a confirmed folder.

2. **Read all markdown files**

   Extract:
   - Stated decisions and positions
   - Architecture/data-flow/security claims
   - Codebase references and assumptions
   - Open items/placeholders
   - Cross-references

3. **Run checks (no guessing)**

   - Internal consistency (contradictions)
   - Codebase alignment (top 10-15 critical claims)
   - Decision completeness (blocking vs non-blocking)
   - Reference integrity
   - Implementation readiness

4. **Build iteration issue list**

   For each issue, include:
   - `id`, `type`, `severity`
   - Why this is a problem
   - Evidence (file:line)
   - Options for user decision (when applicable)
   - Suggested fix format

   Never choose unresolved business or architecture decisions on the user's behalf.

5. **Set verdict**

   - **READY**: No blocking/high issues; sufficient detail for `/opsx:ff`
   - **NOT READY**: Blocking contradictions, misalignment, or major ambiguity

6. **Write outputs in source folder**

   Always write:
   - `CONSOLIDATION-REVIEW.md`

   Write `CANONICAL.md` only if verdict is **READY**.

7. **Report + next step**

   - Show issue counts and top blockers
   - Ask user to iterate on listed issues
   - Re-run `/opsx:consolidate <topic-or-path>` after updates
   - When READY and canonical exists, continue with `/opsx:ff`

**Guardrails**

- NEVER silently drop conflicting content
- NEVER invent missing details
- NEVER modify source files beyond creating review/canonical outputs
- Prefer concrete file:line evidence over generic statements
- Keep verification proportional and focused on critical claims
