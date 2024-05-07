import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  try {
    const token = getCookie(event, "token") as string;
    const user = jwt.verify(token, process.env.JWT_SECRET!);
    if (user) {
      setCookie(event, "token", "", { expires: new Date(0) });
      setResponseStatus(event, 200);
      return {
        message: "Logged out",
      };
    }
  } catch (e) {
    console.error(e);
    setResponseStatus(event, 500);
    return {
      message: "Error: " + e,
    };
  }
});
