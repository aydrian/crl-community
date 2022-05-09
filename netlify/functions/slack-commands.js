import { withVerifySlack } from "../lib/slack";
import { sendWelcome } from "../lib/slack";

async function slackHandler(event, _context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { Allow: "POST" },
      body: "Method Not Allowed"
    };
  }
  const parsedBody = Object.fromEntries(new URLSearchParams(event.body));
  if (parsedBody.command === "/show-welcome") {
    console.log(`${parsedBody.user_name} requested the welcome message.`);
    await sendWelcome(parsedBody.user_id);
  }

  return {
    statusCode: 200
  };
}

export const handler = withVerifySlack(slackHandler);
