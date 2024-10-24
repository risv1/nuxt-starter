import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	password: text("password").notNull(),
	created_at: text("timestamp").notNull().default(sql`(current_timestamp)`),
	updated_at: text("timestamp").notNull().default(sql`(current_timestamp)`),
	deleted_at: text("timestamp"),
	is_deleted: integer("is_deleted").notNull().default(0),
});
