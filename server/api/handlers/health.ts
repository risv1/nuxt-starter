import type { H3Event } from "h3";

export const healthHandler = async (event: H3Event) => {
  setResponseStatus(event, 200);
  return "OK";
};
