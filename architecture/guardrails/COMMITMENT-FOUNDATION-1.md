# COMMITMENT-FOUNDATION-1 Guardrails

## Protected Behaviors

- SERVICE-BOUNDARY-CONTINUITY: Web, portal, and worker remain independently deployable.
- DOCKER-FIRST-CONTINUITY: Entire system can be executed locally via Docker.
- RENDER-COMPATIBILITY-CONTINUITY: Infrastructure choices remain compatible with Render deployment.
- ARCHITECTURAL-EVIDENCE-CONTINUITY: Repository contains dedicated architectural evidence structure from day one.
- BLASTRADIUS-BASELINE-READINESS: Repository structure supports initial BlastRadius scan immediately after commit.

## Regression Sentinels

- Repository builds locally.
- React scaffold starts.
- Lucee scaffold starts.
- Python worker scaffold starts.
- Docker compose starts all services.
- Render blueprint validates.
- Architectural folders exist.
- Documentation exists.
- No business functionality introduced.
