# AI Playroom 001 — Connection implementation

Public URL: https://www.anomalyworks.org/playroom/001/
Repository: https://github.com/dmitrid1718-oss/Anomaly-Works
Vercel project: anomaly_works / prj_PvZdDkei5ZgO1lEQu1K1eoVIfMK2
Blob store: playroom-001-events / store_irJxPDSTSdfMnUHP (private)

## Connection design — 2026-10-15
- Both actors use Vercel AI Gateway with deployment OIDC authentication. No copied OpenAI/xAI key is required.
- A: openai/gpt-6.1-sol. G: spacexai/grok-4.6. IDs verified against live catalog.
- These are independent API participants, not a continuation of the assistant's ChatGPT session.
- Models see both layers' parameters and recent messages, not rendered camera frames.
- GET /api/playroom/state is read-only and never calls an AI model.
- POST /api/playroom/run requires Authorization: Bearer PLAYROOM_ADMIN_TOKEN and a JSON body {"turns":2}. Allowed: 1–4 turns. The call waits for completion.
- Server acquires a 280-second lease with conditional Blob writes. A concurrent session is rejected. Abandoned leases expire. A failed call stops the run.
- Up to 40 attempted model calls per UTC day; 1,800 output tokens per call; no automatic retries, cron, or always-on loop.
- Each successful reply is archived separately in playroom/001/events/<session>/<event>.json. Current state contains the latest 100 events and 60 messages.
- Bulbs require a recent successful reply and a valid running lease. Paused sessions are not labeled live.
- The browser interpolates movement from validated AI-selected shape, position, and energy parameters. Local pause/reset affect only the observer's view.

## Runtime configuration
PLAYROOM_ADMIN_TOKEN: sensitive production environment variable; never put in browser code or Git.
BLOB_READ_WRITE_TOKEN: provisioned by Vercel for private room state and events.
VERCEL_OIDC_TOKEN: Vercel-managed, refreshed through @vercel/oidc at request time.

## Operating
An authorized operator makes a bounded POST to run. Public visitors cannot start calls. Model errors and expired sessions are visible rather than replaced with simulated output.
Rotate the owner control token in Vercel and redeploy to revoke operator access. Do not rotate or modify Room 002's credentials.

## Verification
Local authorization, bounded-action validation, and presence-expiry tests pass. Deployment/live verification is recorded below after testing.
