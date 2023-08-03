import { NextFunction, Request, Response } from "express";
import { HttpError } from "./HttpError.js";
import { HttpErrorType } from "../types/typescriptTypes.js";

import { Schema } from 'joi';
export const validateBody = (schema:Schema) => {
  return (req:Request, res:Response, next:NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message)as HttpErrorType);
    }
    next();
  };
};