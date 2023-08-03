import Joi from 'joi';

export const addSchema = Joi.object({
name: Joi.string().min(3).required().messages({
    "any.required": `"name" must be exist`,
    "string.base": `"name" must be string`,
    "string.empty": `"name" cannot be empty`,
}),
    category: Joi.string().required().messages({
    "any.required": `"category" must be exist`,
    "string.base": `"category" must be string`,
    "string.empty": `"category" cannot be empty`,
}),
    content: Joi.string().required().messages({
    "any.required": `"content" must be exist`,
    "string.base": `"content" must be string`,
    "string.empty": `"content" cannot be empty`,
}),
})