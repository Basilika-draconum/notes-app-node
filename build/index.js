import express from 'express';
import logger from "morgan";
import cors from "cors";
import mongoose from 'mongoose';
import { notesRouter } from "./routes/notes.js";
const DB_HOST = "mongodb+srv://Anzhelika:nZYMj380JJ09eXqm@cluster0.xifsdmb.mongodb.net/notesReader?retryWrites=true&w=majority";
const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
mongoose.connect(DB_HOST).then(() => console.log("start")).catch(error => console.log(error.message));
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/api/notes", notesRouter);
app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});
app.use((err, req, res) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
});
app.listen(3000);
//# sourceMappingURL=index.js.map