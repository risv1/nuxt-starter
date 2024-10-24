import { drizzle } from "drizzle-orm/better-sqlite3";
import { dbUrl } from "~~/env";

export const db = drizzle(dbUrl);
