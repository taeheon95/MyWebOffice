import React, { useMemo } from "react";
import { scope } from "../../apis/google/calendar";
import CalendarContainer from "./CalendarContainer";

function CalendarIndex() {
  const { VITE_GOOGLE_CLIENT_ID: client_id } = import.meta.env;
  const googleOauthUrl = useMemo(
    () =>
      "https://accounts.google.com/o/oauth2/v2/auth" +
      `?redirect_uri=${"https://localhost:3000/redirect/calendar"}` +
      `&response_type=code` +
      `&prompt=consent` +
      `&client_id=${client_id}` +
      `&scope=${scope}` +
      `&access_type=offline`,
    []
  );

  return <CalendarContainer googleOauthUrl={googleOauthUrl} />;
}

export default CalendarIndex;
