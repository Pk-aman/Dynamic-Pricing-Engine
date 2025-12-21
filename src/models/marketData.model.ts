import mongoose from "mongoose";

const marketDataSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    demandScore: {
      type: Number,
      required: true,
      default: 0,
    },
    competitorPrices: {
      type: [Number],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const MarketData =
  mongoose.models.MarketData || mongoose.model("MarketData", marketDataSchema);
export default MarketData;
