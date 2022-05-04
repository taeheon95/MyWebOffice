import React, { useMemo } from "react";
import { useQuery } from "react-query";
import { callGetGoogleAccessTokens } from "../../apis/google/auth";
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

  const { data, isError, isSuccess } = useQuery(
    ["google", "calendar", "access_token"],
    async () => await callGetGoogleAccessTokens(),
    {
      cacheTime: 1000 * 60 * 59,
      refetchOnWindowFocus: false,
    }
  );

  return isSuccess ? (
    <CalendarContainer
      googleOauthUrl={googleOauthUrl}
      googleAccessToken={data.access_token}
    />
  ) : (
    <></>
  );
}

export default CalendarIndex;
