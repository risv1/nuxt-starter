import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import { users } from "~/database/schema";
import { db } from "~/database/db";
import { User } from "~/models/users";

async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.name || !body.email || !body.password) {
      return {
        message: "Please provide all required fields.",
        statusCode: 400,
      };
    }

    const id = uuidv4();
    const created_at = new Date().toISOString();

    const data: User = {
      id: id,
      name: body.name,
      email: body.email,
      password: await hashPassword(body.password),
      role: "user",
      created_at: created_at,
      updated_at: created_at,
    };

    const [user]: User[] = await db.insert(users).values({
      ...body,
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
      created_at: data.created_at,
      updated_at: data.created_at,
    });

    if (!user) {
      console.log("User not created");
      return { message: "User not created.", statusCode: 400 };
    }

    return { message: "User created successfully.", user: user };
  } catch (e: any) {
    console.error("Error: ", e);
    return {
        message: "Error: " + e,
        statusCode: 500,
    };
  }
});
