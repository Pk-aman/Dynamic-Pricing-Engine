import mongoose from "mongoose";

const RuleSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: false,
    },
    condition: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    priority: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);
const Rules = mongoose.models.Rules || mongoose.model("Rule", RuleSchema);
export default Rules;
