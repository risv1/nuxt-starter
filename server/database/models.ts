import type { InferSelectModel, InferInsertModel } from "drizzle-orm";
import type { users } from "./schema/users";

export type User = InferSelectModel<typeof users>;
export type InsertUser = InferInsertModel<typeof users>;
