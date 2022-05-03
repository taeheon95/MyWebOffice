import { GoogleAuth } from "../../types/auth";

const url = "https://oauth2.googleapis.com/token";
const client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const client_secret = import.meta.env.VITE_GOOGLE_CLIENT_SECRET;

const getGoogleAccessTokens = async (refresh_token: string) => {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      grant_type: "refresh_token",
      refresh_token,
      client_secret,
      client_id,
    }),
  });
  if (response.ok) {
    return (await response.json()) as GoogleAuth;
  } else {
    console.error(response);
    throw new Error(response.statusText);
  }
};

const getGoogleTokens = async (code: string, service: string) => {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      redirect_uri: `https://localhost:3000/redirect/${service}`,
      grant_type: "access",
      client_secret,
      client_id,
      code,
    }),
  });
  if (response.ok) {
    return (await response.json()) as GoogleAuth;
  } else {
    console.error(response);
    throw new Error(response.statusText);
  }
};

export { getGoogleTokens, getGoogleAccessTokens };
