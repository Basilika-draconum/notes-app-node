import { NextFunction, Request, Response } from "express";
import { HttpError } from "./HttpError.js";
import { HttpErrorType } from "../types/typescriptTypes.js";

import { Schema } from 'joi';

export const validateBody = (schema:Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message)as HttpErrorType);
    }
    next();
  };
};

// import { ObjectSchema, ValidationResult } from 'joi';

// export const validateBody = (schema: ObjectSchema) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     const { error }: ValidationResult = schema.validate(req.body, { abortEarly: false });

//     if (error) {
//       const errorMessage: string = error.details.map(detail => detail.message).join(", ");
//       next(HttpError(400, errorMessage) as HttpErrorType);
//     } else {
//       next();
//     }
//   };
// };