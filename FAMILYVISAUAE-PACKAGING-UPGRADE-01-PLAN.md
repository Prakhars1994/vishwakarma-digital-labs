# FamilyVisaUAE Packaging Upgrade — Slice 01: Controlled Plan

## Purpose

Resolve the OpenNext portability blocker without changing FamilyVisaUAE customer-facing behavior or deploying an unverified artifact.

## Current baseline

- Branch: `familyvisa-route-fix-20261008`
- Last checkpoint commit: `8a2910d`
- OpenNext: `1.20.2`
- Wrangler: `4.120.0`
- Ubuntu build: succeeds
- Current blocker: generated `.open-next` output contains `/home/runner/work/...` paths
- Production: unchanged and protected by a no-deploy gate

## Non-negotiable boundaries

- FamilyVisaUAE only.
- Preserve unrelated dirty files and projects.
- Do not alter wording, prices, business details, routes, calculator logic, WhatsApp destinations, or visual work.
- Do not reuse an old artifact.
- Do not create a manual handler wrapper or perform unsafe binary replacement.
- Do not deploy until every acceptance check passes.

## Execution slices

1. Dependency compatibility test.
2. Ubuntu build-only artifact generation.
3. Artifact portability and integrity validation.
4. Route and price evidence capture.
5. Release decision and checkpoint.

## Success definition

A fresh artifact is produced from the current focused commit, contains the complete worker and handler, has all dependencies/assets, contains the required prices, has no CI-only paths, and passes route checks. Only then may the deployment runbook be started.
