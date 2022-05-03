export interface CalendarList {
  kind: string;
  etag: string;
  nextPageToken?: string;
  nextSyncToken: string;
  items: CalendarListItem[];
}

export interface CalendarListItem {
  kind: string;
  etag: string;
  id: string;
  summary: string;
  description: string;
  location: string;
  timeZone: string;
  summaryOverride: string;
  colorId: string;
  backgroundColor: string;
  foregroundColor: string;
  hidden: boolean;
  selected: boolean;
  accessRole: "freeBusyReader" | "reader" | "writer" | "owner";
  defaultReminders: { method: string; minutes: string }[];
  notificationSettings: { notifications: { type: string; method: string }[] };
  primary: boolean;
  deleted: boolean;
  conferenceProperties: { allowedConferenceSolutionTypes: string[] };
}
