import React, { MouseEventHandler } from "react";
import { CalendarList } from "../../types/calendar";

interface PropType {
  interlockGoogle: MouseEventHandler;
  getGoogleCalendarList: MouseEventHandler;
  refreshAccessToken: MouseEventHandler;
  googleCalendarList: CalendarList;
}

function CalendarPresenter(props: PropType) {
  const {
    interlockGoogle,
    getGoogleCalendarList,
    refreshAccessToken,
    googleCalendarList,
  } = props;
  return (
    <>
      <button onClick={interlockGoogle}>구글 캘린더 연동</button>
      <button onClick={refreshAccessToken}>
        구글 캘린더 access token 갱신
      </button>
      <button onClick={getGoogleCalendarList}>
        구글 캘린더 데이터 가져오기
      </button>
      <div>
        {googleCalendarList.items.map((calendar) => {
          return (
            <div key={calendar.id}>
              <label htmlFor={calendar.summary}>{calendar.summary}</label>
              <input
                title={calendar.summary}
                type="checkBox"
                defaultChecked={calendar.selected}
              />
              <span>{calendar.summary}</span>
              <span>{calendar.timeZone}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CalendarPresenter;
