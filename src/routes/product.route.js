import express from "express";
import productController from "../controllers/product.controller.js";
import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { ROLE_MERCHANT } from "../constants/roles.js";
import {productSchema} from "../libs/schemas/product.js";
import validate from "../middlewares/validator.js";

const router = express.Router();

router.get("/", productController.getProducts);

router.get("/:id", productController.getProductById);

router.post("/",auth, roleBasedAuth(ROLE_MERCHANT),validate(productSchema), productController.createProduct);

router.delete("/:id", auth, productController.deleteProduct);

router.put(
"/:id",
auth,
roleBasedAuth(ROLE_MERCHANT), 
productController.updateProduct);

export default router;
