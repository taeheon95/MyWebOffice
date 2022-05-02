import React, { MouseEventHandler } from "react";

interface PropType {
  interlockGoogle: MouseEventHandler;
}

function CalendarPresenter(props: PropType) {
  const { interlockGoogle } = props;
  return (
    <>
      <button onClick={interlockGoogle}>구글 캘린더 연동</button>
    </>
  );
}

export default CalendarPresenter;
