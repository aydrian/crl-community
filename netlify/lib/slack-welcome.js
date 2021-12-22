const LISA = "<@U01DNHSULQG>";

export default function getWelcomeBlocks(user) {
  // Example User Object: https://api.slack.com/methods/users.info#examples
  return [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: `Welcome ${user.real_name || user.name}`,
        emoji: true
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Welcome to the CockroachDB Slack community. Whether you are a first-time user looking to learn, or an early adopter or longtime contributor, you’ll find lots of great channels and community members to engage with here!\nBefore you get started, please review our <https://www.cockroachlabs.com/slack-code-of-conduct|Code of Conduct>."
      }
    },
    {
      type: "divider"
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Here are some pointers to get you started.*\nYou have been auto-subscribed to these channels:"
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:wave: #introductions\nCome say hello and meet your fellow community members. Tell us what projects you are working on!`
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:cockroachdb: #cockroachdb\nThis channel is our main channel for general discussions for CockroachDB users. Feel free to ask all your technical questions here! (Note: if you have a specific question about #multi-region, #kubernetes, #cockroachdb-cloud we may suggest a more targeted channel to post in.)`
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:mega: #announcements\nStay up to date on all CockroachDB release announcements and news!`
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:technologist: #community\nStop by here to have a little fun and engage with your fellow community members. Feel free to post memes, and other non-product-specific questions or comments here!`
      }
    },
    {
      type: "divider"
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Feel free to opt into (or out of) any of the channels in the community.*\nSome that may be of interest are:"
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:mortar_board: #cockroach-university\nOur amazing Cockroach University team is always here to help. Post your questions and comments about anything the Education team can help with!`
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:cockroachdb: #cockroachdb-serverless\nTrying out our new serverless offering? This is a great place for your questions!`
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:busts_in_silhouette: #contributors\nWe are very grateful to our open source community. Interested in contributing? Here’s a channel of people who can help you get started, or answer any questions you may have about contributing to CockroachDB, including Docs!`
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:memo: #blog\nKeep up to date on all the latest technical blogs and customer use cases published by Cockroach Labs engineers and product experts!`
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:briefcase: #jobs\nLooking for work that will reward your CockroachDB skills? Or are you an employer wanting to post a job you have that requires CockroachDB knowledge? This is the channel for you!`
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:clapper: #livestreams\nOur livestream bot will let you know whenever a new steam begins. Join this channel if you would like live updates whenever we go live!`
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:calendar: #events\nWanna know where we’re hanging out? Whether it’s virtual or in person, we post our event participation in this channel. Come join us at our booth!`
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `:dog: #pets\nBecause…. Well, just because! :smiley:`
      }
    },
    {
      type: "divider"
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Welcome to our community! We can’t wait to meet you!*"
      }
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `Cheers!\n${LISA}, Developer Relations`
      }
    }
  ];
}
