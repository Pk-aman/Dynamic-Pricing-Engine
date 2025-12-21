import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 8080,

  mongodb: {
    uri: process.env.MONGODB_URI || "",
    dbName: process.env.DATABASE_NAME || ""
  },
  clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
};
