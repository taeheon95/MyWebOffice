import { CalendarList } from "../../types/calendar";

const scope = "https://www.googleapis.com/calendar/v3";

export const getCalendarList = async (access_token: string) => {
  const response = await fetch(`${scope}/users/me/calendarList`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  const result = (await response.json()) as CalendarList;
  return result;
};

const getAcl = async (calendarId: string, ruleId: string) => {
  const response = await fetch(``);
  const result = await response.json();
  return result;
};

const insertAcl = async (calendarId: string) => {
  const response = await fetch(``);
  const result = await response.json();
  return result;
};

export { getAcl, scope };
