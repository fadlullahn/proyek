import express from "express";
import { verifyUser } from "../middleware/AuthUser.js";
import {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/Product.js";

const router = express.Router();

router.get("/product", verifyUser, getProduct);
router.get("/product/:id", verifyUser, getProductById);
router.post("/product", verifyUser, createProduct);
router.patch("/product/:id", verifyUser, updateProduct);
router.delete("/product/:id", verifyUser, deleteProduct);

export default router;
