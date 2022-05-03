import React, { MouseEventHandler, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getGoogleAccessTokens } from "../../apis/google/auth";
import { getCalendarList } from "../../apis/google/calendar";
import { CalendarList } from "../../types/calendar";
import CalendarPresenter from "./CalendarPresenter";

interface PropType {
  googleOauthUrl: string;
}

function CalendarContainer(props: PropType) {
  const { googleOauthUrl } = props;

  const [calendarList, setCalendarList] = useState<CalendarList>({
    kind: "",
    etag: "",
    items: [],
    nextPageToken: "",
    nextSyncToken: "",
  });

  const interlockGoogle = useCallback<MouseEventHandler>(() => {
    location.href = googleOauthUrl;
  }, []);

  const getGoogleCalendarList = useCallback<MouseEventHandler>(async () => {
    const access_token = localStorage.getItem("access_token") ?? "";
    const calendarList = await getCalendarList(access_token);
    console.log(calendarList);
    setCalendarList((state) => calendarList);
  }, []);

  const disInterlockGoogle = useCallback<MouseEventHandler>(() => {
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("access_token");
  }, []);

  const refreshAccessToken = useCallback<MouseEventHandler>(async () => {
    const refresh_tokens = localStorage.getItem("refresh_token");
    const result = await getGoogleAccessTokens(refresh_tokens ?? "");
    localStorage.setItem("access_token", result.access_token);
  }, []);

  return (
    <CalendarPresenter
      interlockGoogle={interlockGoogle}
      getGoogleCalendarList={getGoogleCalendarList}
      refreshAccessToken={refreshAccessToken}
      googleCalendarList={calendarList}
    />
  );
}

export default CalendarContainer;
