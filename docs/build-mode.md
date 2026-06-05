# Build Mode

## Purpose

Build Mode is the execution discipline for Commitment Intelligence.

It preserves architectural intent by forcing every implementation unit to declare scope, protected behaviors, and regression sentinels before code is changed.

## Rules

- No redesign without explicit authorization.
- No scope expansion inside an active unit.
- Human review remains required.
- Architectural evidence is preserved from the beginning.
- Each unit must be small enough to validate deterministically.

## Unit Lifecycle

1. Define authority.
2. Define objective.
3. Define allowed and disallowed scope.
4. Declare protected behaviors.
5. Declare regression sentinels.
6. Implement only the approved surface.
7. Verify locally.
8. Commit to Git.
9. Generate or update architectural evidence.
10. Close the unit.

## Current Unit

`COMMITMENT-FOUNDATION-1`
