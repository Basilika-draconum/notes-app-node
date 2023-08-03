import { Schema, model } from 'mongoose';

const noteSchema = new Schema({
    name: String,
    category: String,
    content:String,
})
export const Note = model("note", noteSchema);