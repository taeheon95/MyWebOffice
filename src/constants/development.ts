const redirect_uri = "https://localhost:3000/redirect" as const;
const CALENDAR_REDIRECT_URL = `${redirect_uri}/calendar` as const;
const MAIL_REDIRECT_URL = `${redirect_uri}/mail` as const;
const DRIVE_REDIRECT_URL = `${redirect_uri}/drive` as const;

const redirectUri = {
  calendar: CALENDAR_REDIRECT_URL,
  mail: MAIL_REDIRECT_URL,
  drive: DRIVE_REDIRECT_URL,
};

export { redirectUri };
