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
  const body = JSON.parse(event.body);

  if (body.type === "url_verification") {
    return {
      statusCode: 200,
      body: JSON.stringify({ challenge: body.challenge })
    };
  }
  if (body.type === "event_callback") {
    console.log(`Receiving Callback for event: ${body.event.type} `);

    if (body.event.type === "team_join") {
      // Handle new member joining
      console.log(
        `New member joined: ${body.event.user.name} (${body.event.user.real_name})`
      );
      await sendWelcome(body.event.user.id);
    }
  }
  return {
    statusCode: 200
  };
}

export const handler = withVerifySlack(slackHandler);
