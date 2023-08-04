import { HttpErrorStatus } from "../types/typescriptTypes.js";

const messages: { [key in HttpErrorStatus]: string } = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
};

type HttpErrorType = Error & { status: HttpErrorStatus };

export const HttpError = (status: HttpErrorStatus, message: string = messages[status]): HttpErrorType => {
  const error = new Error(message) as HttpErrorType;
  error.status = status;
  return error;
};
