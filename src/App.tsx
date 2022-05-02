import { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Calendar from "./pages/Calendar";
import CustomRedirect from "./pages/CustomRedirect";

function App() {
  const { VITE_GOOGLE_CLIENT_ID, VITE_GOOGLE_CLIENT_SECRET } = import.meta.env;

  const scope = "https://www.googleapis.com/auth/calendar";

  const oauthUrl =
    "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https%3A%2F%2Fdevelopers.google.com%2Foauthplayground&prompt=consent&response_type=code&client_id=407408718192.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar&access_type=offline";

  useEffect(() => {
    console.log(VITE_GOOGLE_CLIENT_ID);
    console.log(VITE_GOOGLE_CLIENT_SECRET);
  }, []);

  const getTokens = useCallback(async () => {
    const resp = await fetch("https://www.googleapis.com/oauth2/v4/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: VITE_GOOGLE_CLIENT_ID,
      }),
    });
  }, []);

  return (
    <Routes>
      <Route path="/" />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/redirect/*">
        <Route path=":service" element={<CustomRedirect />} />
      </Route>
    </Routes>
  );
}

export default App;
