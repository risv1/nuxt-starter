if (!process.env.DB_URL) {
  throw new Error("DB_URL is not set in .env file");
}

export const DB_URL = process.env.DB_URL;
