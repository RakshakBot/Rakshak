---
title: Rakshak Security
permalink: /security/
---

# Rakshak Security

Last updated: May 31, 2026

Rakshak is built to help Discord server owners protect their communities through security, anti-nuke, moderation, logging, automod, and abuse prevention features.

This page explains the security principles Rakshak follows when handling server data and operating privileged features.

## 1. Least Privilege

Rakshak is designed to request only the Discord permissions, data, and gateway intents required for its features.

Where possible, Rakshak uses Discord interactions, buttons, select menus, slash commands, mentions, and other alternatives that reduce unnecessary access to sensitive data.

## 2. Privileged Intents

Rakshak may use privileged Discord gateway intents only when needed for core functionality such as:

- Server security
- Anti-nuke protection
- Moderation
- Automod
- Member event handling
- Join and leave logging
- Role update detection
- Prefix command handling
- Abuse prevention

Rakshak does not request privileged data for advertising, profiling, or unrelated purposes.

## 3. Access Control

Access to Rakshak systems and stored data is limited to authorized maintainers.

Inside Discord servers, sensitive commands, configuration panels, logs, and moderation tools are designed to be available only to users with appropriate Discord permissions or server authorization.

## 4. Server Data Visibility

Rakshak treats Discord servers as private community spaces.

When Rakshak displays server-specific information, it is intended to be shown only to users with suitable permissions, such as the server owner, administrators, or authorized moderators.

Regular members should not receive access to sensitive configuration, security logs, or moderation records unless the server’s own configuration allows it.

## 5. Credential Protection

Rakshak bot tokens, API keys, database credentials, and private configuration values are not intentionally published.

Public repositories for Rakshak legal documents do not contain bot source secrets, production credentials, database files, tokens, or private configuration.

## 6. Data Handling

Rakshak uses data only for bot functionality, including security, moderation, logging, configuration, support, and abuse prevention.

Rakshak does not sell data and does not use server data for advertising.

## 7. Reporting Security Issues

If you discover a security issue involving Rakshak, please report it privately so it can be reviewed and fixed responsibly.

Support Server: https://discord.gg/EwhewfZNbT  
Email: rakshakbot@gmail.com

Please do not publicly disclose security issues before we have had a reasonable opportunity to investigate and address them.