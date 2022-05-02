const scope = "https://www.googleapis.com/auth/calendar";

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
