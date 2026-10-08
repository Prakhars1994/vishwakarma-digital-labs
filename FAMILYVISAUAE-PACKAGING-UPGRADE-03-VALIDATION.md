# FamilyVisaUAE Packaging Upgrade — Slice 03: Artifact Validation

## Required files

- `.open-next/worker.js`
- `.open-next/server-functions/default/handler.mjs`
- `.open-next/assets/`
- every module, font, WASM file, and asset referenced by the worker/handler

## Required content scan

The fresh artifact must contain all of these exact values:

- `Family / Dependent Visa`
- `AED 1,103`
- `Golden Visa`
- `AED 3,864`
- `Property Visa`
- `AED 6,311`
- `Newborn Visa`
- `AED 1,029`

## Portability scan

Search every text and binary-readable artifact file for:

- `/home/runner/work/`
- `/Users/`
- `C:\\Users\\`
- other build-machine-only absolute paths

Any match is a release blocker unless the project’s supported runtime documentation explicitly confirms it is harmless and portable.

## Evidence to save

- workflow run ID and URL
- commit SHA
- artifact creation timestamp
- archive SHA-256
- worker size/hash
- handler size/hash
- asset count
- price scan results
- portability scan results
- failed-step logs, if any

## Gate

Do not deploy if any required file, dependency, price, portability, or hash check fails.
