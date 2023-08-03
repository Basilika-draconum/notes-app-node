import { HttpErrorType } from "../types/typescriptTypes.js";
const messages: { [key: number]: string } = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
};


export const HttpError = (status: number, message: string = messages[status]): HttpErrorType => { return { status, message } };
