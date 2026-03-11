import z, { ZodError } from "zod";

const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body)
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            // Note: You had z.treeifyError(error) here, 
            // but standard Zod uses error.format() or error.flatten()
            const formattedError = error.format();
            console.error(formattedError);
            return res.status(400).json(formattedError);
        }
        next(error);
    }
};

export default validate;