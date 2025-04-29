import { defineConfig } from "drizzle-kit";
import { DB_URL } from "./env";

export default defineConfig({
  schema: "server/database/schema",
  out: "drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: DB_URL,
  },
  strict: true,
  verbose: true,
});
