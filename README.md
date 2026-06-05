# Commitment Intelligence

Commitment Intelligence is a Docker-first, Render-compatible system for transforming contracts into structured commitment evidence over time.

This repository currently contains only the foundational scaffold for the system. It intentionally does not include contract upload, OCR, AI extraction, scoring, commitment graphs, authentication, analytics, billing, or provider intelligence.

## Service Boundaries

- `apps/web` — React public web application
- `apps/portal` — Lucee portal application
- `apps/worker` — Python worker service
- `database` — PostgreSQL service defined in Docker and Render infrastructure

## Local Development

Copy the environment template:

```bash
cp .env.example .env
```

Start all services:

```bash
docker compose up --build
```

Expected local endpoints:

- Web: http://localhost:3000
- Portal: http://localhost:8888
- Worker: http://localhost:8000/health
- Postgres: localhost:5432

## Build Mode Status

Current active unit:

`COMMITMENT-FOUNDATION-1`

This repository is intentionally baseline-ready for BlastRadius scanning from its first commit.
