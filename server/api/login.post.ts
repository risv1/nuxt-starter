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
      return {
        message: "Please provide all required fields.",
        statusCode: 400,
      };
    }

    const [user]: User[] = await db
      .select()
      .from(users)
      .where(eq(users.email, body.email));
    if (!user) {
      return {
        message: "User not found.",
        statusCode: 400,
      };
    }

    const isValid = await bcrypt.compare(body.password, user.password);
    if (!isValid) {
      return {
        message: "Invalid password.",
        statusCode: 400,
      };
    }

    const token = jwt.sign(user, process.env.JWT_SECRET!, { expiresIn: "1h" });
    if (!token) {
      return {
        message: "Token not created.",
        statusCode: 400,
      };
    }

    setCookie(event, "token", token, { httpOnly: true });

    return { message: "User logged in successfully.", user: user };
  } catch (e: any) {
    console.error("Error: ", e);
    return {
      message: "Error: " + e,
      statusCode: 500,
    };
  }
});
