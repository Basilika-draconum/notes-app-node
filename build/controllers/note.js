import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { Note } from "../models/note.js";
const getAllNotes = async (req, res) => {
    const result = await Note.find();
    res.json(result);
};
export const getAllNotesCtrl = ctrlWrapper(getAllNotes);
//# sourceMappingURL=note.js.map