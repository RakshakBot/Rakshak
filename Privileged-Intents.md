# Privileged Gateway Intent Usage

Website page: [https://RakshakBot.github.io/Rakshak/privileged-intents/](https://RakshakBot.github.io/Rakshak/privileged-intents/)

Last updated: June 27, 2026

How Rakshak uses Discord gateway data for enabled security, member-event, presence-based and message-safety features.

Rakshak supports Discord application commands, including slash commands and interactive components. Application commands do not require access to ordinary guild message content. Optional legacy prefix commands may still be supported, but they are not the primary justification for Message Content access.

Privileged Gateway Intents are used only for enabled or configured functionality that needs the related Discord gateway events.

## Guild Members Intent

Rakshak may use the Guild Members Intent for server safety and automation workflows when enabled or configured by a server administrator.

Supported workflows reflected by the repository include:

- Real-time member join events
- Real-time member leave events
- Member update events
- Join and leave logging
- Autorole
- Verification workflows
- Account-age checks
- Anti-raid checks
- Invite tracking
- Role update monitoring
- Dangerous role or permission change protection

These workflows need to react automatically when member events occur. They are not initiated only by a user command.

## Guild Presences Intent

### Automatic Vanity Status Role Synchronization

A server administrator configures a status text and a role. Rakshak receives a real-time presence or activity update. When the configured text is detected in the member's custom status, Rakshak automatically adds the configured role. When the configured text is removed, Rakshak automatically removes the role.

This workflow operates without requiring the member to run a command.

### Presence Statistics

Presence information may also support presence statistics through the `/membercount` application command, including online, idle, Do Not Disturb, and offline counts when the feature is enabled.

The repository does not confirm whether these statistics include all cached members or only human members.

## Message Content Intent

Rakshak does not request Message Content access solely to operate prefix commands.

Message Content is relevant only to administrator-enabled features that must evaluate ordinary messages as they are sent. Supported examples reflected by the repository include:

- Spam protection
- Link filtering
- Invite filtering
- Blocked-word enforcement
- Mass-mention protection
- Caps or emoji-spam protection
- Message-based moderation
- Autoresponders
- Enabled AI or chatbot channels

Commands are available through Discord application commands where possible. Message-based safety features operate on ordinary messages and cannot be triggered only through a slash command. Discord-native alternatives should be used where they fully satisfy the required functionality. Rakshak requests access only for enabled functionality that requires message evaluation.

## Evidence Areas

The public website includes only genuine local proof assets. Missing screenshots are labelled as owner-confirmation gaps rather than filled with fake evidence.

- Member Join Evidence: `assets/proofs/join_log.jpg`
- Member Leave Evidence: `assets/proofs/leave_log.jpg`
- Autorole or Verification Evidence: `assets/proofs/autorole.jpg`
- Member Role Update Evidence: no dedicated role-update screenshot confirmed in the repository
- Vanity Status Role Configuration: `assets/proofs/status.jpg`
- Automatic Role Assignment: no dedicated assignment screenshot confirmed in the repository
- Automatic Role Removal: no dedicated removal screenshot confirmed in the repository
- Presence Statistics: no dedicated presence-statistics screenshot confirmed in the repository
- Message Safety Configuration: `assets/proofs/automod.jpg`
- Ordinary User Message: no dedicated ordinary-message screenshot confirmed in the repository
- Automatic Detection: `assets/proofs/log.jpg`
- Moderation Action: `assets/proofs/antinuke_log.jpg`
- Staff Log: `assets/proofs/log.jpg`
