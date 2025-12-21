import mongoose from "mongoose";
import { timeStamp } from "node:console";

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    basePrice: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", projectSchema);

export default Product;
