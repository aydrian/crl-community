import crypto from "crypto";
import { WebClient } from "@slack/web-api";
import slackWelcome from "./slack-welcome";
const slackSigningSecret = process.env.SLACK_SIGNING_SECRET;

const client = new WebClient(process.env.SLACK_BOT_TOKEN);

export const sendWelcome = async (user_id) => {
  const user = await getUserById(user_id);

  const result = await client.chat.postMessage({
    channel: user_id,
    text: `Welcome ${user.real_name || user.name}!`,
    blocks: slackWelcome(user),
    unfurl_links: false
  });

  return result;
};

export const getUserById = async (user_id) => {
  const { user } = await client.users.info({ user: user_id });

  return user;
};

export const withVerifySlack = (handler) => {
  return async (event, context) => {
    const messageSignature = event.headers["x-slack-signature"];
    const timestamp = event.headers["x-slack-request-timestamp"];
    const time = Math.floor(new Date().getTime() / 1000);

    if (!slackSigningSecret) {
      console.log(`Slack signing secret is empty.`);
      return { statusCode: 422, body: "Signature verification failed." };
    }

    if (Math.abs(time - timestamp) > 300) {
      // needs to be < 10 minutes
      console.log(
        `Verification Failed: timestamp > 5 minutes. Message Id: ${messageId}.`
      );
      return { statusCode: 422, body: "Ignore this request." };
    }

    const computedSignature =
      "v0=" +
      crypto
        .createHmac("sha256", slackSigningSecret)
        .update(`v0:${timestamp}:${event.body}`)
        .digest("hex");

    if (messageSignature !== computedSignature) {
      console.log(`Provided signature does not match computed signature.`);
      console.log(`Signature: `, messageSignature);
      console.log(`Computed Signature: ${computedSignature}`);
      return { statusCode: 422, body: "Signature verification failed." };
    }

    return handler(event, context);
  };
};
