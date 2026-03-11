## ADDED Requirements

### Requirement: Constants modules SHALL use deterministic file naming
The system SHALL require files under `constants/` to use `kebab-case` names.

#### Scenario: Valid constants file naming
- **WHEN** a constants module is created or renamed
- **THEN** its file name is in `kebab-case`

#### Scenario: Invalid constants file naming
- **WHEN** a constants module uses non-`kebab-case` naming
- **THEN** the change is treated as non-compliant with this capability

### Requirement: Immutable constant exports SHALL use UPPER_SNAKE_CASE
The system SHALL require immutable exported constant identifiers in `constants/` modules to use `UPPER_SNAKE_CASE`.

#### Scenario: Exported map constant naming
- **WHEN** a constants module exports an immutable map or token
- **THEN** the exported identifier is `UPPER_SNAKE_CASE`

#### Scenario: Legacy PascalCase export migration
- **WHEN** an existing PascalCase constant export is within scope of this change
- **THEN** the export is renamed to `UPPER_SNAKE_CASE` according to approved mapping

### Requirement: Computed helpers SHALL use compute-prefixed camelCase
The system SHALL require computed helper functions in `constants/` modules to use `camelCase` names prefixed with `compute`.

#### Scenario: New computed helper naming
- **WHEN** a computed helper is introduced in `constants/`
- **THEN** its symbol follows `compute*` camelCase naming

#### Scenario: Existing set-prefixed helper migration
- **WHEN** a scoped helper currently uses `set*` naming without mutation semantics
- **THEN** it is renamed to a `compute*` equivalent per mapping

### Requirement: Constants modules SHALL use named exports only
The system SHALL disallow default exports in `constants/` modules within the scope of this change.

#### Scenario: Default export replacement
- **WHEN** a scoped constants module currently exposes a default export
- **THEN** it is replaced with named exports and importers are updated

#### Scenario: New constants module export style
- **WHEN** a new constants module is added in this capability scope
- **THEN** it exports symbols via named exports only

### Requirement: Naming migration SHALL include import and alias lifecycle controls
The system SHALL require naming migrations to include import reference updates and explicit compatibility alias cleanup.

#### Scenario: Import update completeness
- **WHEN** symbols/files are renamed in constants modules
- **THEN** all impacted imports and type references are updated in the same change set

#### Scenario: Temporary alias cleanup
- **WHEN** temporary compatibility aliases are introduced
- **THEN** they are removed before the change is marked complete
