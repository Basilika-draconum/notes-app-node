import { Request, Response } from 'express';
import { ctrlWrapper } from '../helpers/ctrlWrapper.js';
import { Note } from '../models/note.js';
import { HttpError } from '../helpers/HttpError.js';

const getAllNotes = async (req: Request, res: Response) => {
  const result = await Note.find();
  res.json(result);
};

const getNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  const note = await Note.findById(id);
  if (!note) {
    throw HttpError(404, `Note with ${id} not found`);
  }
  res.json(note);
};

const addNote = async (req: Request, res: Response) => {
  const newNote = await Note.create(req.body);
  res.status(201).json(newNote);
};

const deleteNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleteNote = await Note.findByIdAndDelete(id);
  if (!deleteNote) {
    throw HttpError(404);
  }
  res.json({ message: `Note deleted with id: ${id}` });
};

const updateNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateNote = await Note.findByIdAndUpdate(id, req.body, { new: true });
  if (!updateNote) {
    throw HttpError(404, `Note with ${id} not found`);
  }
  res.json(updateNote);
};

const getStatsNotes = async (req: Request, res: Response) => {
  const result = await Note.aggregate([
    {
      $group: {
        _id: '$category',
        activeCount: { $sum: { $cond: ['$status', 1, 0] } },
        archivedCount: { $sum: { $cond: ['$status', 0, 1] } },
      },
    },
  ]);
  res.json(result);
};
export const getStatsNotesCtrl = ctrlWrapper(getStatsNotes);
export const getAllNotesCtrl = ctrlWrapper(getAllNotes);
export const getNoteCtrl = ctrlWrapper(getNote);
export const addNoteCtrl = ctrlWrapper(addNote);
export const deleteNoteCtrl = ctrlWrapper(deleteNote);
export const updateNoteCtrl = ctrlWrapper(updateNote);
