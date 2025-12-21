import mongoose from "mongoose";
import { config } from "./config";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    console.log("📦 Using existing database connection");
    return;
  }

  try {

    const conn = await mongoose.connect(config.mongodb.uri, {
      dbName: config.mongodb.dbName,
    });

    isConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};
