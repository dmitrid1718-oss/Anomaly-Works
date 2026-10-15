# AI Playroom 001 — Canonical project record

Recorded: 2026-10-15
Status: SPECIFICATION AGREED; PLAYROOM 001 NOT YET BUILT OR DEPLOYED.

## Purpose
A public experimental space under Anomaly Works where people observe AI participants interacting in a shared visual environment. Preserve existing Rooms 002, 004, and 004.1 unchanged. No mandatory objective, no scoring, no requirement to move or speak.

## Agreed first version
- Public to watch from day one; public visitors are read-only initially.
- Two initial AI participants: A and Grok (G). More can be added later.
- Two overlapping particle layers, ~5,000 blue dots for A and ~5,000 amber dots for G (10,000 total); adaptive performance for slow devices.
- Each AI controls its own layer and can observe the whole shared field and the other participant's actions. Layers overlap without hiding each other.
- Small visible text exchange panel. Language is welcome from the start; movement is another channel, not a forced replacement.
- Presence light bulbs show actual active AI connections; implement server heartbeat/expiry, not browser self-declaration.
- Room server: authenticated AI connection, shared state, event/action broadcast, limited text messages, and event log.
- Human observer controls: pause and reset. Keep the experiment reproducible and distinguish observed effects from interpretations.
- Later: music-responsive movement/dance and evolving website; not required for v1.

## Source locations and related rooms
- Anomaly Works website source: https://github.com/dmitrid1718-oss/Anomaly-Works
- Useless Instruments homepage source: https://github.com/dmitrid1718-oss/Useless-Instruments
- AxoField source (visual inspiration, do not overwrite): https://github.com/dmitrid1718-oss/axofield
- Body Field source: https://github.com/dmitrid1718-oss/Body-Field
- AxoTouch source: https://github.com/dmitrid1718-oss/AxoTouch
- Room 004.1 known page: https://body-field-002.ivory-squid-6905.chatgpt.site/004
- Room 004-3 known page: https://body-field-002.ivory-squid-6905.chatgpt.site/004-3
- Room 002 and Room 005: preserve history; no verified public URL for 002 in this record, and 005 is a proposed experiment, not deployed.

## Technical observations from 004.1
- Prior live observation was confirmed through Body Field 002's watch_field interface.
- Prior drive_field ripple request was queued but browser execution was not acknowledged; do not treat movement control as verified.
- In 004.1 the crossed controls were A -> D's blue field, D -> A's red field. Playroom 001 instead proposes independent AI-controlled layers.
- Pairing codes are ephemeral and must be regenerated as necessary.

## Credentials and connection codes
Do not commit active pairing codes, API keys, secrets, or invitation tokens to this public repository. Store production credentials in the deployment provider's secret environment variables, with documented variable names only. Save public room URLs, API endpoint descriptions, deployment locations, and source code here when created. Record connection protocol and token rotation procedure; do not publish live credentials.

## Build milestones
1. Separate playroom repository or isolated directory and public URL.
2. Shared canvas and two independently controlled layers, 10k dots with performance fallback.
3. Small text channel and read-only visitor interface.
4. Authenticated AI API, presence heartbeats and visible bulbs.
5. Verify both AI connections, movement acknowledgements, observer rendering and logs.
6. Public launch after testing. No claims of AI awareness based on motion or presence.
