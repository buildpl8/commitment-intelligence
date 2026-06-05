AE-002 — Container Service Binding

Decision:
Containerized services shall bind to 0.0.0.0 inside containers.

Reason:
Docker port publishing requires externally reachable interfaces.

Impact:
Ensures local development, Render deployment, and container orchestration behave consistently.

Status:
Accepted

Date:
2026-06-05