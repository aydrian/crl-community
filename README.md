# Cockroach Labs Community

[![Netlify Status](https://api.netlify.com/api/v1/badges/d041f651-17bf-4783-80f2-19446cf9810c/deploy-status)](https://app.netlify.com/sites/crl-community/deploys)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## A Slack App for the CockroachDB Community Slack Workspace

Join the [CockroachDB Community Slack Workspace](https://www.cockroachlabs.com/join-community/).

### Event Subscriptions

Request URL: https://crl-community.netlify.app/webhooks/slack-events

- `team_join` - Sends a [Welcome Message](/netlify/lib/slack-welcome.js) to new users via Direct Message.

### Slash Commands

Request URL: `https://crl-community.netlify.app/webhooks/slack-commands`

- `/show-welcome` - Sends [Welcome Message](/netlify/lib/slack-welcome.js) to existing users via Direct Message.

### Environment Variables

- `SLACK_BOT_TOKEN` - Slack App Bot Token
- `SLACK_SIGNING_SECRET` - Slack App Signing Secret
