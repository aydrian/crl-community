import slackWelcome from "../lib/slack-welcome";

export async function handler(_event, _context) {
  // Example from : https://api.slack.com/types/user#user-objects__example
  const user = {
    id: "W012A3CDE",
    team_id: "T012AB3C4",
    name: "spengler",
    deleted: false,
    color: "9f69e7",
    real_name: "Egon Spengler",
    tz: "America/New_York",
    tz_label: "Eastern Daylight Time",
    tz_offset: -14400,
    profile: {
      title: "",
      phone: "",
      skype: "",
      real_name: "Egon Spengler",
      real_name_normalized: "Egon Spengler",
      display_name: "spengler",
      display_name_normalized: "spengler",
      status_text: "Print is dead",
      status_emoji: ":books:",
      status_expiration: 1502138999,
      avatar_hash: "ge3b51ca72de",
      first_name: "Matthew",
      last_name: "Johnston",
      email: "spengler@ghostbusters.example.com",
      image_original: "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
      image_24: "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
      image_32: "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
      image_48: "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
      image_72: "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
      image_192: "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
      image_512: "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
      team: "T012AB3C4"
    },
    is_admin: true,
    is_owner: false,
    is_primary_owner: false,
    is_restricted: false,
    is_ultra_restricted: false,
    is_bot: false,
    is_stranger: false,
    updated: 1502138686,
    is_app_user: false,
    is_invited_user: false,
    has_2fa: false,
    locale: "en-US"
  };

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
