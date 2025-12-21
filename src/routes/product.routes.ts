import express from "express";
import { produtController } from "../controllers/product.controller";

const router = express.Router();

router.post("/", produtController.createProduct);
router.get("/", produtController.getAllProducts);
router.get("/:id", produtController.getProductsById);
router.patch("/:id", produtController.updateProductsById);
router.delete("/:id", produtController.deleteProduct);
  
export default router;
