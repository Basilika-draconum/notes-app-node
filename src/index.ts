import express, { Request, Response } from 'express';
import logger from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import { notesRouter } from './routes/notes.js';
import { CustomError } from './types/typescriptTypes.js';
import * as dotenv from 'dotenv';

dotenv.config();
const { DB_HOST, PORT = 3000 } = process.env;

const app = express();
mongoose
  .connect(DB_HOST as string)
  .then(() =>
    app.listen(PORT, () => {
      console.log('Database connection successful');
    })
  )
  .catch(error => console.log(error.message));

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/notes', notesRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err: CustomError, req: Request, res: Response) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});
