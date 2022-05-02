import React, { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RedirectContainer from "./RedirectContainer";
import QueryString from "qs";
import { redirectUri } from "../../constants/development";

const client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const client_secret = import.meta.env.VITE_GOOGLE_CLIENT_SECRET;

function RedirectIndex() {
  const param = useParams();
  const navigator = useNavigate();
  const query = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  useEffect(() => {
    console.log(param);
    console.log(query);
    console.log(query.code);
    if (query.code) {
      navigator(`/${param.service}`);
      getGoogleAccessToken();
    }

    console.log(import.meta.env);
  }, []);

  const getGoogleAccessToken = useCallback(async () => {
    const resp = await fetch("https://oauth2.googleapis.com/token", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        code: query.code,
        redirect_uri: "https://localhost:3000/redirect/calendar",
        grant_type: "authorization_code",
        client_id,
        client_secret,
      }),
    });
    const result = await resp.json();
    console.log(result);
  }, []);

  return <RedirectContainer />;
}

export default RedirectIndex;
