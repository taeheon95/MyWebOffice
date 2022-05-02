const calendar = {
  // access control rule
  acl: (calendarId: string, ruleId?: string) => {
    return {
      list: `/calendars/${calendarId}/acl`,
      get: `/calendars/${calendarId}/acl/${ruleId}`,
      insert: `/calendars/${calendarId}/acl`,
      patch: `/calendars/${calendarId}/acl/${ruleId}`,
      update: `/calendars/${calendarId}/acl/${ruleId}`,
      delete: `/calendars/${calendarId}/acl/${ruleId}`,
    };
  },
};

export { calendar };
