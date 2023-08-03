export interface Note {
  id: string;
  name: string;
  category: string;
  content: string;
  created_at: string;
  status: boolean;
  dates: string[]|string;
}
export interface NotesData {
  listNotes: () => Promise<Note[]>;
}   

export interface HttpErrorType {
  status: number;
  message: string;
}
export interface CustomError extends Error {
  status?: number;
}