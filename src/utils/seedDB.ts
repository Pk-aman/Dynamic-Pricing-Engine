// src/utils/seedDB.ts

import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/product.model";
import MarketData from "../models/marketData.model";
import Rule from "../models/rules.model";

import { products, marketData, rules } from "./dummyData";

dotenv.config();

const seedDatabase = async () => {
  try {
    // connect
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("🌱 Connected to MongoDB");

    // optional: clean existing data
    await Product.deleteMany({});
    await MarketData.deleteMany({});
    await Rule.deleteMany({});

    console.log("🔄 Cleared old data");

    // insert products
    const createdProducts = await Product.insertMany(products);
    console.log(`📦 Inserted ${createdProducts.length} products`);

    // insert market data linked to products
    const marketDocs = marketData.map((data, index) => ({
      ...data,
      productId: createdProducts[index]._id,
    }));

    await MarketData.insertMany(marketDocs);
    console.log(`📊 Inserted market data`);

    // insert rules (global rules for now)
    await Rule.insertMany(rules);
    console.log(`⚙️ Inserted pricing rules`);

    console.log("🌟 Seeding completed!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed", error);
    process.exit(1);
  }
};

seedDatabase();
