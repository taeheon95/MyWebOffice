import React, { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RedirectContainer from "./RedirectContainer";
import QueryString from "qs";
import { getGoogleTokens } from "../../apis/google/auth";

function RedirectIndex() {
  const param = useParams();
  const navigator = useNavigate();
  const query = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  useEffect(() => {
    if (query.code && typeof query.code === "string") {
      getTokens(query.code, param.service ?? "");
    }
  }, []);

  const getTokens = useCallback(async (code: string, service: string) => {
    try {
      const result = await getGoogleTokens(code, service);
      result.refresh_token &&
        localStorage.setItem("refresh_token", result.refresh_token);
      localStorage.setItem("access_token", result.access_token);
      navigator(`/${param.service}`);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return <RedirectContainer />;
}

export default RedirectIndex;
