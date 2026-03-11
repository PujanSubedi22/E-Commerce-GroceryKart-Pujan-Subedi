import express from "express";
import userController from "../controllers/user.controller.js";
import auth from "../middlewares/auth.js";
import validate from "../middlewares/validator.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { ROLE_ADMIN } from "../constants/roles.js";

const router = express.Router()

router.post("/",validate(userSchema), userController.createUser);

router.get("/",auth,roleBasedAuth(ROLE_ADMIN), userController.getUser);

export default router;