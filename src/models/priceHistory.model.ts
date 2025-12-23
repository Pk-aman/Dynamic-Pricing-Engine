import mongoose from "mongoose";

const priceHistorySchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    calculatedPrice: {
      type: Number,
      required: true,
    },
    basePrice: {
      type: Number,
      required: true,
    },
    appliedRules: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);
const PriceHistory =
  mongoose.models.PriceHistory ||
  mongoose.model("PriceHistory", priceHistorySchema);

export default PriceHistory;
