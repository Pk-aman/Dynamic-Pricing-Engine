import express from "express";
import productRouter from "./product.routes";
import marketDataRouter from "./marketData.routes";
import ruleRouter from "./rule.routes";
import priceHistoryRoutes from "./priceHistory.routes";
import pricing from "./pricing.routes"

const router = express.Router();
router.use("/product", productRouter);
router.use("/marketdata", marketDataRouter);
router.use("/rule", ruleRouter);
router.use("/history", priceHistoryRoutes);
router.use("/pricing", pricing);

export default router;
