import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { users } from "~/database/schema";
import { db } from "~/database/db";
import { eq } from "drizzle-orm";
import { User } from "~/models/users";
import { config } from "dotenv";

config();

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.email || !body.password) {
      setResponseStatus(event, 400);
      return {
        message: "Please provide all required fields.",
      };
    }

    const [user]: User[] = await db
      .select()
      .from(users)
      .where(eq(users.email, body.email));
    if (!user) {
      setResponseStatus(event, 404);
      return {
        message: "User not found.",
      };
    }

    const isValid = await bcrypt.compare(body.password, user.password);
    if (!isValid) {
      setResponseStatus(event, 400);
      return {
        message: "Invalid password.",
      };
    }

    const token = jwt.sign(user, process.env.JWT_SECRET!, { expiresIn: "1h" });
    if (!token) {
      setResponseStatus(event, 500);
      return {
        message: "Token not created.",
      };
    }

    setCookie(event, "token", token, { httpOnly: true });

    setResponseStatus(event, 200);
    return { message: "User logged in successfully.", user: user };
  } catch (e: any) {
    console.error("Error: ", e);
    setResponseStatus(event, 500);
    return {
      message: "Error: " + e,
    };
  }
});
