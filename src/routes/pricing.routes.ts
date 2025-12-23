import express from "express";
import { pricingController } from "../controllers/pricing.controller";

const router = express.Router();

router.use("/dynamic/:id", pricingController.getDynamicPrice);

export default router;
