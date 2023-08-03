import { HttpError } from "./HttpError.js";
export const validateBody = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            next(HttpError(400, error.message));
        }
        next();
    };
};
//# sourceMappingURL=validateBody.js.map