import express from "express";
import { produtController } from "../controllers/product.controller";

const router = express.Router();

router.post("/", produtController.createProduct);
router.get("/", produtController.getAllProducts);
router.get("/:id", produtController.getProductsById);

export default router;
