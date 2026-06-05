#!/usr/bin/env bash
set -euo pipefail

curl -fsS http://localhost:3000/health
printf '\n'
curl -fsS 'http://localhost:8888/?action=health'
printf '\n'
curl -fsS http://localhost:8000/health
printf '\n'
