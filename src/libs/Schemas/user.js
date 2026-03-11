import z from "zod";

const addressSchema = z.object({
    city: z.string({error: "Address city is required"}),
    province: z.string({error: "Address province is required"}),
    street: z.string().optional(),
    country: z.string().optional(),
});

const userSchema = z.object({
    name: z.string({error: "User name is required"}).trim(),
    email: z.string().email({error: "Invalid email"}),
    password: z.string().min(6),
    phone: z.string().min(6).max(13),
    address: addressSchema,
});

export { userSchema };