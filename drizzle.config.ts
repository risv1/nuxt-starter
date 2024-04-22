import type { Config } from "drizzle-kit";
import { config } from "dotenv";

config();

export default {
  schema: "./database/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DB_URL!,
  },
} satisfies Config;