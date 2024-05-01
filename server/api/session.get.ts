import jwt from "jsonwebtoken";
import { config } from "dotenv";

type UserPayload = {
  name: string;
  email: string;
};

config();

export default defineEventHandler(async (event) => {
  try {
    const token = getCookie(event, "token") as string;
    if (!token) {
      setResponseStatus(event, 401);
      return { body: "Unauthorized" };
    }

    const data = jwt.verify(token, process.env.JWT_SECRET!) as UserPayload;
    if (!data) {
      setResponseStatus(event, 401);
      return { body: "Unauthorized" };
    }

    setResponseStatus(event, 200);
    return {
      user: {
        name: data.name,
        email: data.email,
      },
    };
  } catch (e) {
    console.error("Error: ", e);
    setResponseStatus(event, 500);
    return { message: e };
  }
});
