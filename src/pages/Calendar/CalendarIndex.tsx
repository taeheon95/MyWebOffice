import React from "react";
import CalendarContainer from "./CalendarContainer";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_GOOGLE_CLIENT_SECRET;

function CalendarIndex() {
  return <CalendarContainer />;
}

export default CalendarIndex;
