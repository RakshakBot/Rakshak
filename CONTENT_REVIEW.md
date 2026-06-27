# Rakshak Privileged Intents Content Review

Review date: June 27, 2026

## Files reviewed

- `Privileged-Intents.md`
- `docs/privileged-intents/index.html`
- `docs/style.css`
- `docs/script.js`
- `assets/Proofs/guild-members/`
- `assets/Proofs/guild-presences/`
- `assets/Proofs/message-content/`
- Existing public proof assets under `docs/assets/proofs/`

## Files modified

- `Privileged-Intents.md`
- `docs/privileged-intents/index.html`
- `CONTENT_REVIEW.md`

## Files created

- `EVIDENCE_LINKS.md`
- `docs/assets/proofs/guild-members/guild-members-intent-proof.mp4`
- `docs/assets/proofs/guild-members/member-joined.png`
- `docs/assets/proofs/guild-members/member-role-updated.png`
- `docs/assets/proofs/guild-members/member-left.png`
- `docs/assets/proofs/guild-presences/guild-presences-intent-proof.mp4`
- `docs/assets/proofs/guild-presences/vanity-status-setup.png`
- `docs/assets/proofs/guild-presences/vanity-status-logs.png`
- `docs/assets/proofs/guild-presences/membercount.png`
- `docs/assets/proofs/message-content/message-content-intent-proof.mp4`
- `docs/assets/proofs/message-content/automod-setup.png`
- `docs/assets/proofs/message-content/anti-spam.png`
- `docs/assets/proofs/message-content/anti-link.png`
- `docs/assets/proofs/message-content/excessive-caps.png`

## Files removed

- `docs/assets/proofs/antinuke_log.jpg`
- `docs/assets/proofs/automod.jpg`
- `docs/assets/proofs/autorole.jpg`
- `docs/assets/proofs/join_log.jpg`
- `docs/assets/proofs/leave_log.jpg`
- `docs/assets/proofs/log.jpg`
- `docs/assets/proofs/status.jpg`

## Evidence source paths detected

| Source path | Type | Size | Intent | Final public path |
| --- | --- | ---: | --- | --- |
| `assets/Proofs/guild-members/Guild_Members_Intent_Proof.mp4` | MP4 | 9516682 | Guild Members | `docs/assets/proofs/guild-members/guild-members-intent-proof.mp4` |
| `assets/Proofs/guild-members/member-joined.png` | PNG | 46303 | Guild Members | `docs/assets/proofs/guild-members/member-joined.png` |
| `assets/Proofs/guild-members/member-role-updated.png` | PNG | 66667 | Guild Members | `docs/assets/proofs/guild-members/member-role-updated.png` |
| `assets/Proofs/guild-members/member-left.png` | PNG | 44251 | Guild Members | `docs/assets/proofs/guild-members/member-left.png` |
| `assets/Proofs/guild-presences/Guild_Presence_Intent_Proof.mp4` | MP4 | 24191820 | Guild Presences | `docs/assets/proofs/guild-presences/guild-presences-intent-proof.mp4` |
| `assets/Proofs/guild-presences/vanity-status-setup.png` | PNG | 101944 | Guild Presences | `docs/assets/proofs/guild-presences/vanity-status-setup.png` |
| `assets/Proofs/guild-presences/vanity-status-logs.png` | PNG | 57550 | Guild Presences | `docs/assets/proofs/guild-presences/vanity-status-logs.png` |
| `assets/Proofs/guild-presences/membercount.png` | PNG | 43156 | Guild Presences | `docs/assets/proofs/guild-presences/membercount.png` |
| `assets/Proofs/message-content/Message_content_Intent_Proof.mp4` | MP4 | 12962242 | Message Content | `docs/assets/proofs/message-content/message-content-intent-proof.mp4` |
| `assets/Proofs/message-content/automod-setup.png` | PNG | 47602 | Message Content | `docs/assets/proofs/message-content/automod-setup.png` |
| `assets/Proofs/message-content/anti-spam.png` | PNG | 24701 | Message Content | `docs/assets/proofs/message-content/anti-spam.png` |
| `assets/Proofs/message-content/anti-link.png` | PNG | 35836 | Message Content | `docs/assets/proofs/message-content/anti-link.png` |
| `assets/Proofs/message-content/excessive-caps.png` | PNG | 34834 | Message Content | `docs/assets/proofs/message-content/excessive-caps.png` |

## Evidence files copied or reused

- All final proof assets were copied from genuine source files in `assets/Proofs/`.
- Original source evidence remains unchanged.
- Old root-level proof JPGs under `docs/assets/proofs/` were removed after repository-wide reference checks found no remaining references.

## Old evidence references removed

- Removed old references to `join_log.jpg`, `leave_log.jpg`, `autorole.jpg`, `status.jpg`, `automod.jpg`, `log.jpg`, and `antinuke_log.jpg` from the public Privileged Intents page.
- Removed public owner-confirmation wording, evidence-gap wording, missing-proof wording, and old mixed screenshot mappings.
- Removed public references to unsupported or unverified evidence areas.

## Broken links fixed

- The Privileged Intents page now references only final public proof URLs under `/Rakshak/assets/proofs/`.
- Privacy Policy, Data Deletion, and Contact links use existing `/Rakshak/` GitHub Pages routes.

## Validation results

- Every expected source evidence file exists.
- Every final public evidence file exists under `docs/assets/proofs/`.
- Final public filenames are lowercase and case-correct.
- MP4 files are non-empty.
- Videos use `controls`, `preload="metadata"`, and `playsinline`.
- No video uses autoplay or loop.
- Screenshot images use `loading="lazy"`.
- Screenshot images are clickable and open the original image in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.
- Screenshots have descriptive alt text.
- Guild Members, Guild Presences, and Message Content evidence are separated by section.
- No old `>help` screenshot is referenced.
- No general status command screenshot is referenced.
- No AntiNuke screenshot is used as Message Content evidence.
- No voice-state log is used as intent evidence.
- No public TODO note remains.
- `Privileged-Intents.md` and `docs/privileged-intents/index.html` have matching intent explanations, evidence links, and dates.
- `EVIDENCE_LINKS.md` contains all final direct URLs.
- `git diff --check` completed with no whitespace errors; Git reported only line-ending normalization warnings for edited text files.
- No fake evidence was created.
- No unsupported feature was added.
- No unrelated public page was modified.

## Remaining technical issues

- No genuine unresolved technical issues were found during local review.
