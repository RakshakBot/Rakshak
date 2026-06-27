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

Rakshak supports Discord application commands, including slash commands and interactive components. Slash commands do not require access to ordinary guild message content. Rakshak does not request Message Content access solely to operate optional prefix commands.

### Demonstrated Workflow - Administrator-Enabled Message Safety

A server administrator enables Rakshak's message-safety rules through a Discord application command. Rakshak then evaluates ordinary guild messages as they are sent and applies the configured moderation action when an enabled rule is triggered.

The primary demonstrated workflow is repeated-message spam detection. In the evidence video, repeated ordinary guild messages reach the configured spam threshold, Rakshak applies the administrator-configured mute action, and a detailed staff log is generated.

Link filtering and excessive-capital-letter detection are demonstrated as supporting administrator-enabled message rules.

### Why Ordinary Message Evaluation Is Used

Application commands configure the rules, but the potential violations are ordinary guild messages rather than command inputs. The configured Rakshak workflow evaluates those messages when they are sent in order to detect the enabled rule, apply the configured moderation action, and generate the corresponding staff log.

### Alternatives and Minimum Access

Discord-native alternatives are considered and should be used where they fully satisfy the required server configuration. Rakshak limits its Message Content request to enabled workflows in which Rakshak itself evaluates message data for the configured moderation rule.

### Data Used

Depending on the triggered rule, Rakshak may process the message text, message ID, channel ID, guild ID, author ID, rule name, reason, and configured moderation action. Data handling and retention are governed by the [Privacy Policy](https://rakshakbot.github.io/Rakshak/privacy-policy/).

### Evidence

- Video: [https://rakshakbot.github.io/Rakshak/assets/proofs/message-content/message-content-intent-proof.mp4](https://rakshakbot.github.io/Rakshak/assets/proofs/message-content/message-content-intent-proof.mp4)
- AutoMod Setup screenshot: [https://rakshakbot.github.io/Rakshak/assets/proofs/message-content/automod-setup.png](https://rakshakbot.github.io/Rakshak/assets/proofs/message-content/automod-setup.png)
- Repeated-Message Spam screenshot: [https://rakshakbot.github.io/Rakshak/assets/proofs/message-content/anti-spam.png](https://rakshakbot.github.io/Rakshak/assets/proofs/message-content/anti-spam.png)
- Link Rule screenshot: [https://rakshakbot.github.io/Rakshak/assets/proofs/message-content/anti-link.png](https://rakshakbot.github.io/Rakshak/assets/proofs/message-content/anti-link.png)
- Excessive Caps screenshot: [https://rakshakbot.github.io/Rakshak/assets/proofs/message-content/excessive-caps.png](https://rakshakbot.github.io/Rakshak/assets/proofs/message-content/excessive-caps.png)

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
