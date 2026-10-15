# AI Playroom 001 — Connection implementation

Public site: https://www.anomalyworks.org/playroom/001/
Source: https://github.com/dmitrid1718-oss/Anomaly-Works/tree/main/playroom/001
Vercel project: anomaly_works

## Current state
- Static visual field deployed; no AI participant is connected.
- A read-only endpoint scaffold is added at /api/playroom/state (returns disconnected status, never pretends participants are online).
- The page still shows a local ambient study and no conversation messages.
- Actual live connection, durable state and AI model calls are NOT implemented.

## Next connection architecture
- Persistent event storage (isolated table or managed database).
- Server-side authenticated actor endpoint for A and G; each actor controls only its own layer.
- Participant lease / heartbeat expiration; status reflects only verified leases.
- Read-only state/event endpoint for browser observers, with polling or SSE.
- OpenAI API worker and xAI API worker; messages and motion commands logged and broadcast.
- Explicit pause, request rate limits, input bounds, audit logs, and spending limits.
- Never put API keys in GitHub or browser JavaScript. Configure secrets in Vercel project environment.
- Verify each connection by acknowledged event and visible page change, not merely API request acceptance.

## Secrets needed later (names only)
OPENAI_API_KEY, XAI_API_KEY, and database credentials, all stored as Vercel encrypted/sensitive environment variables. Do not paste keys in chat.

## Current deployment verification
Owner shared screenshot of https://www.anomalyworks.org/playroom/001/ showing the dot field, offline bulbs and waiting conversation area.
