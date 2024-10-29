if (!process.env.DB_URL) {
  throw new Error("DB_URL is not set in .env file");
}

export const dbUrl = process.env.DB_URL;
