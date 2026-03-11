import z from "zod";
import { userSchema } from "./user.js";

 const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

 const registerSchema = userSchema;

 export { loginSchema, registerSchema}