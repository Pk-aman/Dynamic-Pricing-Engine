import express from "express";
import { ruleController } from "../controllers/rules.controller";

const router = express.Router();

router.post("/", ruleController.createRule);
router.get("/", ruleController.getAllRules);
router.get("/:id", ruleController.getRuleByProductId);
router.delete("/:id", ruleController.deleteRuleByProductId);

export default router;
