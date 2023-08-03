import express from 'express';
import { getAllNotesCtrl } from '../controllers/note.js';
// import { validateBody } from '../helpers/validateBody.js';
// import { addSchema } from '../schemas/noteSchema.js';



const router = express.Router();

router.get('/', getAllNotesCtrl);

// router.get('/:id', isValidId, ctrls.getNote);

// router.post('/', validateBody(addSchema), ctrls.addNewNote);

// router.delete('/:id', isValidId, ctrls.deleteNoteById);

// router.put('/:id', isValidId, validateBody(schemas.schemaAdd), ctrls.updateNote);
export { router as notesRouter };
