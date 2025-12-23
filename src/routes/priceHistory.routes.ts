import { Router } from "express";
import { priceHistoryController } from "../controllers/priceHistory.controller";

const router = Router();

router.get("/:id", priceHistoryController.getHistory);
router.delete("/:id", priceHistoryController.clearHistory);

export default router;
