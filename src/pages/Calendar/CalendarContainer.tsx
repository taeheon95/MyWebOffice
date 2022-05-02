import React, { MouseEventHandler, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CalendarPresenter from "./CalendarPresenter";

interface PropType {
  googleOauthUrl: string;
}

function CalendarContainer(props: PropType) {
  const { googleOauthUrl } = props;

  const interlockGoogle = useCallback<MouseEventHandler>(() => {
    location.href = googleOauthUrl;
  }, []);
  return <CalendarPresenter interlockGoogle={interlockGoogle} />;
}

export default CalendarContainer;
