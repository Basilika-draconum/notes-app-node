import express from 'express';
import { getAllNotesCtrl } from '../controllers/note.js';
const router = express.Router();
router.get('/', getAllNotesCtrl);
export { router as notesRouter };
//# sourceMappingURL=notes.js.map