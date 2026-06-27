# Rakshak Website Content Review

Review date: June 27, 2026

## Files changed

- `README.md`
- `Privacy.md`
- `Terms.md`
- `Security.md`
- `Official.md`
- `Data-Deletion.md`
- `docs/index.html`
- `docs/privacy-policy/index.html`
- `docs/terms-of-service/index.html`
- `docs/security/index.html`
- `docs/official/index.html`
- `docs/data-deletion/index.html`

## Repository areas reviewed

- Markdown policy and source pages.
- Published GitHub Pages HTML under `docs/`.
- Navigation, footer, settings menu links, page headings, FAQ accordions, card descriptions, meta descriptions, image alt text, and JavaScript-generated copy.
- Static assets were enumerated but not modified.
- The dedicated `/privileged-intents/` Markdown and published HTML were checked by diff and were not edited.

## Duplicated approval wording removed

- Home data-use section: removed detailed approval-style explanations for member data, status/activity data, and ordinary-message evaluation. Replaced the section with concise privacy-focused data-use text and links to the Privacy Policy and dedicated gateway page.
- Home FAQ: replaced the message-processing justification question with a neutral Discord data-handling question. Updated the data-selling answer to avoid singling out one data type.
- Home official-links card: replaced the specific intent list with a neutral reference to detailed gateway usage and supporting evidence.
- Privacy Policy message section: replaced command and ordinary-message justification language with neutral message-data disclosure covering possible text, identifiers, attachments, metadata, enabled features, and non-advertising use.
- Privacy Policy gateway section: replaced detailed member/status/message use cases with a short reference to the dedicated gateway page.
- Terms section: replaced detailed examples and command language with a neutral platform-data and permissions section linking to Privacy Policy and the dedicated gateway page.
- Security section: replaced detailed gateway use-case text with a short security-focused gateway access statement.
- Official Links page: replaced the Privacy and gateway card descriptions with neutral policy and technical-reference descriptions.
- Data Deletion page: replaced the prior completion-style timing language with the requested review-and-exceptions wording.

## Neutral privacy disclosures retained

- Rakshak may process Discord IDs, server configuration, moderation/security logs, settings, tickets, voice settings, AI/chatbot interactions where enabled, invite/member activity records, premium records, and moderation/security event records.
- The Privacy Policy still discloses message data processing where message-based features are enabled by an administrator or deliberately used by a user.
- The message-data disclosure still names moderation and automation systems, message logging, autoresponders, support tools, and AI/chatbot functionality where enabled.
- Data is still described as not sold and not used for advertising or unrelated profiling.
- Server owners remain responsible for enabled modules, permissions, and configuration.

## Unverified claims removed or rewritten

- Rewrote the absolute AI-training claim so Rakshak only states that it does not use Discord data to train its own AI models.
- Added that enabled AI interactions may be processed by an external service when necessary to generate the requested response.
- Removed any implied guarantee about external AI provider handling until provider-specific handling is confirmed.
- Rewrote deletion timing language so it does not promise every valid request will be fully completed within 30 days.

## Owner confirmations still required

- Confirm which external AI, hosting, database, analytics, contact-form, or infrastructure providers are used in production.
- Confirm provider-specific handling for enabled AI features before publishing more precise provider claims.
- Confirm exact retention rules for moderation logs, ticket transcripts, AI/chatbot interactions, message-data-derived records, and contact submissions.
- Confirm whether any additional hidden or generated content exists outside this static repository before deployment.
- Confirm the invite permission integer still matches the current production feature set.

## Validation notes

- `/privileged-intents/` source and published page were not modified.
- Navigation and footer links to `/Rakshak/privileged-intents/`, `/Rakshak/privacy-policy/`, and `/Rakshak/terms-of-service/` remain present.
- Internal links continue to use the `/Rakshak/` GitHub Pages base path.
- Product feature descriptions for AutoMod, logging, autorole, vanity guard, security, moderation, tickets, voice, AI, music, support, and server management were retained.
