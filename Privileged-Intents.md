# Privileged Gateway Intent Usage

Website page: [https://rakshakbot.github.io/Rakshak/privileged-intents/](https://rakshakbot.github.io/Rakshak/privileged-intents/)

Last updated: June 27, 2026

How Rakshak uses Discord gateway data for administrator-enabled member, presence, and message-safety workflows.

Rakshak requests gateway access only for enabled functionality that depends on the related Discord events or data. Interactive configuration is provided through Discord application commands, while the automated workflows documented below react to member events, presence changes, or ordinary guild messages without requiring the affected member to invoke a command.

## Guild Members Intent

Rakshak uses real-time guild member events for administrator-enabled member automation, role-update monitoring, and staff logging.

### Demonstrated Workflows

- Automatic member join logging
- Automatic role assignment
- Automatic member role-update logging
- Detection of role additions and removals
- Automatic member leave logging
- Updated member-count information associated with join and leave events

### Why Real-Time Member Events Are Used

These workflows must run when a member joins, is updated, or leaves the server. They are not initiated by the affected member through a command. On-demand lookups or interaction payloads do not provide the same automatic join, update, and leave workflow.

### Data Used

Depending on the enabled workflow, Rakshak may process the member's Discord user ID, guild ID, account creation timestamp, guild join timestamp, current roles, member-count information, and relevant member-event metadata. This data is used only to perform the configured automation or create the configured staff log.

### Evidence

- Video: [https://rakshakbot.github.io/Rakshak/assets/proofs/guild-members/guild-members-intent-proof.mp4](https://rakshakbot.github.io/Rakshak/assets/proofs/guild-members/guild-members-intent-proof.mp4)
- Member Joined screenshot: [https://rakshakbot.github.io/Rakshak/assets/proofs/guild-members/member-joined.png](https://rakshakbot.github.io/Rakshak/assets/proofs/guild-members/member-joined.png)
- Member Roles Updated screenshot: [https://rakshakbot.github.io/Rakshak/assets/proofs/guild-members/member-role-updated.png](https://rakshakbot.github.io/Rakshak/assets/proofs/guild-members/member-role-updated.png)
- Member Left screenshot: [https://rakshakbot.github.io/Rakshak/assets/proofs/guild-members/member-left.png](https://rakshakbot.github.io/Rakshak/assets/proofs/guild-members/member-left.png)

## Guild Presences Intent

Rakshak uses real-time presence and activity updates for administrator-enabled vanity-status role synchronization and current server presence statistics.

### Primary Workflow - Automatic Vanity Status Role Synchronization

A server administrator configures a custom-status text, a linked role, and a staff log channel. When Rakshak receives a real-time presence or activity update and detects the configured text in a member's custom status, it automatically adds the configured role. When the configured text is removed, Rakshak automatically removes the role.

This workflow runs from the member's real-time status change and does not require the member to invoke a command.

### Supporting Workflow - Presence Statistics

The `/membercount` application command displays the current online, Do Not Disturb, idle, and offline counts available to Rakshak.

### Data Used

Rakshak may process a member's Discord user ID, current presence state, and relevant custom-status or activity information only as needed to provide the configured vanity-role workflow or current presence statistics.

### Evidence

- Video: [https://rakshakbot.github.io/Rakshak/assets/proofs/guild-presences/guild-presences-intent-proof.mp4](https://rakshakbot.github.io/Rakshak/assets/proofs/guild-presences/guild-presences-intent-proof.mp4)
- Vanity Status Setup screenshot: [https://rakshakbot.github.io/Rakshak/assets/proofs/guild-presences/vanity-status-setup.png](https://rakshakbot.github.io/Rakshak/assets/proofs/guild-presences/vanity-status-setup.png)
- Automatic Role Synchronization screenshot: [https://rakshakbot.github.io/Rakshak/assets/proofs/guild-presences/vanity-status-logs.png](https://rakshakbot.github.io/Rakshak/assets/proofs/guild-presences/vanity-status-logs.png)
- Presence Statistics screenshot: [https://rakshakbot.github.io/Rakshak/assets/proofs/guild-presences/membercount.png](https://rakshakbot.github.io/Rakshak/assets/proofs/guild-presences/membercount.png)

## Message Content Intent

Rakshak uses Message Content access only for administrator-enabled features that require the bot to process ordinary guild messages. The demonstrated workflows include ticket transcript generation, natural AI conversations in enabled channels, administrator-configured autoresponders, and repeated-message content moderation.

Message Content access is not requested for passive monitoring or unrelated server activity. Processing is limited to the specific features enabled and configured by server administrators.

### Complete Message Content Demonstration

This demonstration shows Rakshak processing ordinary guild messages across four enabled workflows: ticket transcripts, AI conversations, autoresponders, and repeated-message moderation.

- Video: [https://rakshakbot.github.io/Rakshak/assets/proofs/message-content/message-content-intent-proof.mp4](https://rakshakbot.github.io/Rakshak/assets/proofs/message-content/message-content-intent-proof.mp4)

### Ticket Transcript System

Rakshak creates an HTML transcript when an authorized staff member closes a ticket. The transcript contains the ticket conversation, message authors, timestamps, and recorded message content from the ticket channel.

The ticket workflow is administrator-configured and limited to channels created through Rakshak's ticket system.

Badge: Primary Use Case

- User and staff ticket conversation
- HTML transcript generation
- Message authors and timestamps
- Authorized ticket closing workflow
- Screenshot: [https://rakshakbot.github.io/Rakshak/assets/proofs/message-content/ticket-transcript-system.png](https://rakshakbot.github.io/Rakshak/assets/proofs/message-content/ticket-transcript-system.png)

### AI Conversation System

An administrator can enable Rakshak's AI chatbot in a specific channel using the slash command `/ai activate`. Once enabled, users can communicate naturally through ordinary messages without repeatedly mentioning the bot.

Rakshak processes messages in the enabled channel to generate relevant responses through the configured external AI service. Rakshak does not use Discord data to train its own AI models.

Badge: Primary Use Case

- Administrator-enabled channel
- Ordinary message interaction
- Natural conversational responses
- External service used for response generation
- Screenshot: [https://rakshakbot.github.io/Rakshak/assets/proofs/message-content/ai-conversation-system.png](https://rakshakbot.github.io/Rakshak/assets/proofs/message-content/ai-conversation-system.png)

### Autoresponder System

Rakshak compares ordinary guild message text against administrator-configured autoresponder triggers. When a configured trigger is matched, Rakshak sends the corresponding server-defined response.

Badge: Supporting Use Case

- Administrator-configured triggers
- Exact message-text matching
- Server-defined responses
- Only active where configured
- Screenshot: [https://rakshakbot.github.io/Rakshak/assets/proofs/message-content/autoresponder-system.png](https://rakshakbot.github.io/Rakshak/assets/proofs/message-content/autoresponder-system.png)

### AutoMod Anti-Spam System

Rakshak's repeated-message rule evaluates recent message content to detect repeated identical messages and apply the administrator-configured moderation action.

This workflow does not rely only on the number of message events. It uses message text when evaluating repeated-content violations.

Badge: Supporting Use Case

- Repeated-message content evaluation
- Administrator-configured moderation rule
- Automatic moderation action
- Rule-specific staff logging
- Screenshot: [https://rakshakbot.github.io/Rakshak/assets/proofs/message-content/automod-anti-spam-system.png](https://rakshakbot.github.io/Rakshak/assets/proofs/message-content/automod-anti-spam-system.png)

### Why Message Content Access Is Required

These workflows require Rakshak to access the content of ordinary guild messages:

- Ticket transcripts require the recorded ticket conversation to be included in the generated HTML transcript.
- Enabled AI channels require the user's ordinary messages to generate relevant conversational responses.
- Autoresponders require ordinary message text to be compared with administrator-configured triggers.
- Repeated-message moderation requires recent message content to be evaluated for repeated identical messages.

Without Message Content access, Rakshak may receive a message event but cannot reliably access the ordinary guild message text required by these enabled workflows.

### Alternatives and Minimum Access

Rakshak uses Discord-native interactions where they fully support the required workflow. Slash commands are used for feature configuration wherever available.

Message Content access is limited to enabled runtime workflows that require Rakshak to process ordinary guild message text. Ticket transcript generation and natural AI conversations cannot be performed by Discord AutoMod, while autoresponder matching and repeated-content moderation depend on Rakshak's administrator-configured message-processing rules.

Rakshak does not request Message Content access solely to support legacy prefix commands.

### Privacy and Data Processing

Rakshak processes message content only as necessary to perform enabled features. Ticket content may appear in an administrator-authorized transcript generated when the ticket is closed.

Rakshak does not use Discord message data to train its own AI models. When an enabled AI feature uses an external service, the submitted interaction may be processed by that service as necessary to generate the requested response, subject to that service's applicable terms and privacy practices.

The evidence shown on this page demonstrates Rakshak's implemented functionality and the technical use of the requested intent. It does not imply approval, endorsement, or certification by Discord.

## Administrator Control and Data Handling

- Optional Rakshak systems must be enabled or configured by an authorized server administrator.
- Rakshak processes only the data required for the enabled workflow.
- Interactive configuration is provided through Discord application commands where supported.
- Rakshak does not sell user data or use Discord data for advertising or unrelated profiling.
- Detailed information about processing, retention, third-party handling, and deletion is available in the Privacy Policy.
- Users and server owners may use the private contact and deletion methods documented on the website.

Links:

- Privacy Policy: [https://rakshakbot.github.io/Rakshak/privacy-policy/](https://rakshakbot.github.io/Rakshak/privacy-policy/)
- Data Deletion: [https://rakshakbot.github.io/Rakshak/data-deletion/](https://rakshakbot.github.io/Rakshak/data-deletion/)
- Contact: [https://rakshakbot.github.io/Rakshak/contact/](https://rakshakbot.github.io/Rakshak/contact/)

## Evidence Transparency

All screenshots and videos on this page are genuine recordings from a Rakshak testing server. They demonstrate the currently implemented workflows shown on this page. The evidence is provided to explain Rakshak's use of Discord gateway data and does not represent or imply approval, certification, endorsement, or verification by Discord.
