---
title: Rakshak Security
permalink: /security/
---

# Rakshak Security Policy

Last updated: May 31, 2026

## Security Overview

Rakshak is built to help Discord server owners protect their communities through security, anti-nuke, moderation, logging, automod, and abuse prevention features.

This page explains the security principles Rakshak follows when handling server data, operating privileged features, and maintaining public documentation.

## Least Privilege

Rakshak is designed to request only the Discord permissions, data, and gateway intents required for enabled features.

Where possible, Rakshak uses Discord interactions, slash commands, buttons, select menus, mentions, and other options that reduce unnecessary access to sensitive data.

## Privileged Intents

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

## Access Control

Access to Rakshak systems and stored data is limited to authorized maintainers.

Inside Discord servers, sensitive commands, configuration panels, logs, and moderation tools are intended to be available only to users with appropriate Discord permissions or server authorization.

## Server Data Visibility

Rakshak treats Discord servers as private community spaces.

When Rakshak displays server-specific information, it is intended to be shown only to users with suitable permissions, such as the server owner, admins, or authorized moderators.

Regular members should not receive access to sensitive configuration, security logs, or moderation records unless the server's own configuration or Discord permissions allow it.

## Credential Protection

Rakshak bot tokens, API keys, database credentials, and private configuration values are not intentionally published.

Production credentials should be stored only in private, access-controlled environments and should never be committed to public repositories.

## Data Handling

Rakshak uses data only for bot functionality, including security, moderation, logging, configuration, support, service operation, and abuse prevention.

Rakshak does not sell data and does not use server data or message content for advertising or profiling.

## Public Repository Safety

Rakshak public documentation repositories must not contain bot tokens, API keys, .env files, database files, source secrets, production credentials, private configs, or private service keys.

Public repositories should contain only public documentation, legal pages, contact information, official links, security guidance, and approved public assets.

## Reporting Security Issues

Security issues should be reported privately so they can be reviewed and handled responsibly.

Please do not publicly disclose a vulnerability, exploit path, credential exposure, or abuse method before the Rakshak team has had a reasonable opportunity to investigate and respond.

## Contact

Support Server: https://discord.gg/EwhewfZNbT  
Email: rakshakbot@gmail.com
