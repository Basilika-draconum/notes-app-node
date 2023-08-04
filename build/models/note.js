import { Schema, model } from 'mongoose';
import Joi from 'joi';
const categoryList = ['task', 'idea', 'random thought'];
const dateValidator = {
    validator: function (date) {
        const datePattern = /^(?:(?:0?[1-9]|1[0-2])\/(?:0?[1-9]|[12]\d|3[01])\/(?:[1-9]\d{3}))$/;
        return datePattern.test(date);
    },
    message: (props) => `${props.value} is not a valid date in format MM/DD/YYYY!`,
};
const noteSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, enum: categoryList, required: true },
    content: { type: String, required: true },
    dates: {
        type: String,
        validate: dateValidator,
    },
    status: { type: Boolean, default: true },
}, { versionKey: false, timestamps: true });
export const addSchema = Joi.object({
    name: Joi.string().min(3).required().messages({
        'any.required': `"name" must be exist`,
        'string.base': `"name" must be string`,
        'string.empty': `"name" cannot be empty`,
    }),
    category: Joi.string()
        .valid(...categoryList)
        .required()
        .messages({
        'any.required': `"category" must be exist`,
        'string.base': `"category" must be string`,
        'string.empty': `"category" cannot be empty`,
    }),
    content: Joi.string().required().messages({
        'any.required': `"content" must be exist`,
        'string.base': `"content" must be string`,
        'string.empty': `"content" cannot be empty`,
    }),
    status: Joi.boolean(),
    dates: Joi.string().pattern(/^(?:(?:0?[1-9]|1[0-2])\/(?:0?[1-9]|[12]\d|3[01])\/(?:[1-9]\d{3}))$/),
});
export const Note = model('note', noteSchema);
//# sourceMappingURL=note.js.map