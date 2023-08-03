
import { Request, Response } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { Note } from "../models/note.js";

const getAllNotes = async (req: Request, res: Response) => {
   const result = await Note.find()
  res.json(result); 
};

// const addNewNote = async (req:Request, res:Response) => {
//   // const { name, email, phone, favorite } = req.body;
//   const newContact = await Note.create(req.body);
//   res.json({
//     status: "success",
//     code: 201,
//     data: { newNote },
//   });
// };

export const getAllNotesCtrl = ctrlWrapper(getAllNotes);