import slackWelcome from "../lib/slack-welcome";

export async function handler(_event, _context) {
  const user = { real_name: "CockroachDB Community Member" };
  const blocks = slackWelcome(user);
  const url = `https://app.slack.com/block-kit-builder/#${encodeURIComponent(
    JSON.stringify({ blocks })
  )}`;

  return {
    statusCode: 302,
    headers: {
      Location: url
    }
  };
}
