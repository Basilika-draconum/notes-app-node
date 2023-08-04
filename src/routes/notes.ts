import express from 'express';
import { getAllNotesCtrl, getNoteCtrl, addNoteCtrl, deleteNoteCtrl, updateNoteCtrl, getStatsNotesCtrl } from '../controllers/note.js';
import { validateBody } from '../helpers/validateBody.js';
import { addSchema } from '../models/note.js';

const router = express.Router();

router.get('/', getAllNotesCtrl);

router.get('/:id', getNoteCtrl);

router.post('/', validateBody(addSchema), addNoteCtrl);

router.delete('/:id', deleteNoteCtrl);

router.patch("/:id", updateNoteCtrl);

router.get("/stats",getStatsNotesCtrl)

export { router as notesRouter };
