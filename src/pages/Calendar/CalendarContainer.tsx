import React, { MouseEventHandler, useCallback, useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { callGetGoogleAccessTokens } from "../../apis/google/auth";
import { getCalendarList } from "../../apis/google/calendar";
import { CalendarList } from "../../types/calendar";
import CalendarPresenter from "./CalendarPresenter";

interface PropType {
  googleOauthUrl: string;
  googleAccessToken: string;
}

function CalendarContainer(props: PropType) {
  const { googleOauthUrl, googleAccessToken } = props;

  const queryClient = useQueryClient();

  const [calendarList, setCalendarList] = useState<CalendarList>({
    kind: "",
    etag: "",
    items: [],
    nextPageToken: "",
    nextSyncToken: "",
  });

  const [isInterlock, setIsInterlock] = useState<boolean>(() => {
    return localStorage.getItem("refresh_token") ? true : false;
  });

  const interlockGoogle = useCallback<MouseEventHandler>(() => {
    location.href = googleOauthUrl;
  }, []);

  const getGoogleCalendarList = useCallback<MouseEventHandler>(async () => {
    const calendarList = await getCalendarList(googleAccessToken);
    setCalendarList(calendarList);
  }, []);

  const disInterlockGoogle = useCallback<MouseEventHandler>(() => {
    localStorage.removeItem("refresh_token");
    queryClient.removeQueries(["google", "calendar", "access_token"]);
    setIsInterlock(false);
  }, []);

  return (
    <CalendarPresenter
      isInterlock={isInterlock}
      interlockGoogle={interlockGoogle}
      disInterlockGoogle={disInterlockGoogle}
      getGoogleCalendarList={getGoogleCalendarList}
      googleCalendarList={calendarList}
    />
  );
}

export default React.memo(CalendarContainer);
