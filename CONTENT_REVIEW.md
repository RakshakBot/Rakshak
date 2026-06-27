# Rakshak Website Content Review

Review date: June 27, 2026

## Files Reviewed

- `README.md`
- `Privacy.md`
- `Terms.md`
- `Security.md`
- `Data-Deletion.md`
- `Contact.md`
- `Official.md`
- `Mail.md`
- `Copyright.md`
- `docs/index.html`
- `docs/style.css`
- `docs/script.js`
- `docs/privacy-policy/index.html`
- `docs/terms-of-service/index.html`
- `docs/security/index.html`
- `docs/data-deletion/index.html`
- `docs/contact/index.html`
- `docs/official/index.html`
- `docs/mail/index.html`
- `docs/copyright/index.html`
- `docs/thank-you/index.html`
- `assets/Rakshak_logo.png`
- `assets/Rakshak.gif`
- `assets/proofs/antinuke_log.jpg`
- `assets/proofs/automod.jpg`
- `assets/proofs/autorole.jpg`
- `assets/proofs/help.jpg`
- `assets/proofs/join_log.jpg`
- `assets/proofs/leave_log.jpg`
- `assets/proofs/log.jpg`
- `assets/proofs/status.jpg`
- `docs/assets/Rakshak_logo.png`
- `docs/assets/Rakshak.gif`
- `docs/assets/radar.gif`

## Problems Found

- Privileged Gateway Intent explanations were spread across Privacy, Security, Terms, README, and the home page instead of being centralized.
- Message Content wording listed prefix commands alongside safety features, which could imply prefix commands are the main reason for Message Content access.
- The home FAQ said the invite did not use broad access, which was too strong for an invite requesting many feature permissions.
- No dedicated `/privileged-intents/` page existed.
- Privileged Intent links were missing from the main navigation, mobile navigation, footer, home page, Official Links page, and policy references.
- Data Deletion and Contact pages mentioned the Support Server for privacy/deletion/security requests without clearly preferring private channels.
- The Contact form required Full Name even though it did not appear necessary.
- The Privacy Policy did not disclose the Formspree contact form processor used by the public contact page.
- Existing pages lacked Open Graph metadata and canonical links. This was noted but not fully added because the request emphasized preserving the existing site structure.
- The repository contains no dedicated evidence screenshot for member role updates, automatic vanity-role assignment/removal, presence statistics, ordinary user message examples, or a full message-safety evidence chain.
- `git` was not available in the shell, so repository status could not be inspected with Git.

## Changes Completed

- Created a dedicated Privileged Gateway Intent Usage page at `/privileged-intents/`.
- Added the Privileged Intents page to the main navigation, mobile navigation, footer, home page data section, Official Links page, Privacy Policy, Security Policy, Terms, README, and source policy references.
- Rewrote Message Content wording to distinguish Discord application commands, slash commands, optional legacy prefix commands, and administrator-enabled message-based features.
- Rewrote home page responsible data wording to avoid mixing privileged-intent justifications with marketing claims.
- Updated invite wording to avoid claiming minimal or narrow permissions.
- Updated Data Deletion wording to prefer email, secure contact form, or private support ticket for deletion requests.
- Updated Contact wording to prefer private channels for privacy, deletion, and security matters.
- Made Full Name optional in the public contact form.
- Added Formspree disclosure to Privacy Policy.
- Added genuine evidence cards using only existing local proof assets, with unverified evidence gaps labelled as needing owner confirmation.
- Updated changed page dates to June 27, 2026.

## Claims That Could Not Be Verified

- Exact data retention durations beyond the existing 30-day deletion request review target.
- Whether presence statistics include all cached members or only human members.
- Whether AI or chatbot providers retain data, and for how long.
- Whether message content is stored, not stored, or discarded right away.
- Whether data is encrypted in a specific way at rest or in transit.
- Whether every listed feature is available in every server or plan.
- Whether the invite permission integer includes unused or questionable permissions.
- Dedicated evidence for member role updates, automatic vanity-role assignment, automatic vanity-role removal, presence statistics, ordinary-message detection, and staff-log chains.

## Questions That Require Owner Confirmation

- What exact storage locations and retention rules apply to moderation logs, ticket transcripts, AI/chatbot interactions, message-content-derived records, and contact form submissions?
- Which third-party AI, hosting, database, analytics, or infrastructure providers are used in production?
- Does `/membercount` count all cached members, human members only, bots separately, or another category?
- Does the bot store ordinary message content, store only message IDs/logs, or store filtered excerpts for moderation logs?
- Are vanity status role assignment and removal screenshots available for public evidence?
- Which Discord permissions in `4513499492773111` are required by current modules, and are any no longer needed?
- Should the Support Server provide private ticket channels for privacy, deletion, and security requests?

## Remaining Recommendations

- Add Open Graph tags, canonical links, and page-specific social metadata across all public pages.
- Verify every external link periodically, especially Discord invite and Top.gg links.
- Add dedicated genuine screenshots for each evidence gap before a future privileged-intent reapplication.
- Decode and review the Discord invite permission integer against current modules.
- Document production retention rules and third-party processors in owner-approved language.
- Consider adding a small build process or shared include system so nav/footer changes do not need to be copied across pages manually.
