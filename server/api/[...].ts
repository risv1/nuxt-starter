import type { H3Event } from "h3";
import { createRouter, defineEventHandler, useBase } from "h3";
import { healthHandler } from "./handlers/health";
import { errors } from "./constants/errors";

const router = createRouter();

router.get("/health", defineEventHandler(healthHandler));

router.get(
  "/*",
  defineEventHandler((event: H3Event) => {
    setResponseStatus(event, 404);
    return {
      error: errors.ROUTE_NOT_FOUND,
    };
  }),
);

export default useBase("/api", router.handler);
