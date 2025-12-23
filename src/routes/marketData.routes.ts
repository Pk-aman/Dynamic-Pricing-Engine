import express from "express";
import { marketDataController } from "../controllers/marketData.controller";

const router = express.Router();

router.get("/:id", marketDataController.getMarketDataById);
router.patch("/:id", marketDataController.updateMarketDataById);

export default router;
