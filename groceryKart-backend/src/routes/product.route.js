import express from "express";
import productController from "../controllers/product.controller.js";
import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { ROLE_MERCHANT } from "../constants/roles.js";

const router = express.Router();

router.get("/", productController.getProducts);

router.get("/:id", productController.getProductById);

router.post("/",auth, roleBasedAuth(ROLE_MERCHANT), productController.createProduct);

router.delete("/:id", auth,  productController.deleteProduct);

router.put("/:id",  auth, productController.updateProduct);

export default router;
