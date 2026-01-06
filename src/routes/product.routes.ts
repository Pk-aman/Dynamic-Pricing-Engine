import express from "express";
import { productController } from "../controllers/product.controller";

const router = express.Router();

router.post("/", productController.createProduct);
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductsById);
router.patch("/:id", productController.updateProductsById);
router.delete("/:id", productController.deleteProduct);

export default router;
