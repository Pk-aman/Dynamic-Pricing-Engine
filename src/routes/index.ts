import express from "express";
import productRouter from "./product.routes";
import marketDataRouter from "./marketData.routes";
import ruleRouter from "./rule.routes";

const router = express.Router();
router.use("/product", productRouter);
router.use("/marketdata", marketDataRouter);
router.use("/rule", ruleRouter);

export default router;
