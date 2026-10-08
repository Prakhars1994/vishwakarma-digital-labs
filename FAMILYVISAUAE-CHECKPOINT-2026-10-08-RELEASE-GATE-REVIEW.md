# FamilyVisaUAE Release-Gate Review — 2026-10-08

## Artifact reviewed

- Fresh Ubuntu artifact from run `37745116975`.
- Artifact directory: `.open-next` extracted locally for inspection.
- Worker: present.
- Handler: present.
- Assets: present.

## CI-path locations

The string `/home/runner/work/` occurs in:

1. `middleware/handler.mjs` — embedded serialized Next configuration, including `outputFileTracingRoot`.
2. `server-functions/default/index.mjs` — bundled configuration/module metadata.
3. `server-functions/default/handler.mjs` — bundled Next/OpenNext configuration and trace metadata.
4. `server-functions/default/handler.mjs.meta.json` — esbuild input/source metadata and WASM/font/module origin paths.

Observed occurrence counts from the extracted artifact:

| File | Matches |
|---|---:|
| `middleware/handler.mjs` | 3 |
| `server-functions/default/index.mjs` | 3 |
| `server-functions/default/handler.mjs` | 10 |
| `server-functions/default/handler.mjs.meta.json` | 704 |

## Classification

- `handler.mjs.meta.json`: diagnostic/source metadata; not loaded by the Worker entrypoint.
- `middleware/handler.mjs`, `index.mjs`, and `handler.mjs`: serialized build configuration and bundler trace data embedded in generated runtime bundles. The paths are not proven to be runtime-independent, so they cannot be exempted under the current release policy.
- WASM/font entries in the metadata point to bundled files, but the metadata still exposes runner-origin paths.

## Official guidance decision

The OpenNext Cloudflare repository and documented issue examples show absolute runner paths in build output, but no official guidance was found authorizing their exemption from a strict path-portability gate. Reference: https://github.com/opennextjs/opennextjs-cloudflare/issues/659

## Final decision

**Release blocked.** No deployment, artifact rewriting, handler wrapping, or stale-bundle reuse is allowed. Production remains on the last known-good version.

## Required resolution

Obtain either an official OpenNext path-portability fix or explicit project-owner approval to narrow the gate to runtime-loaded files and exempt diagnostic metadata. Until then, do not deploy.
