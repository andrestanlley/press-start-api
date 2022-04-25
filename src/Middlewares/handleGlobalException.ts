import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../DTOs/Response/ErrorResponse';
import {warning} from '../Constants/Warnings'

export default function handleError(err: TypeError | CustomError, req: Request, res: Response, next: NextFunction){
  let customError = err;

  if (!(err instanceof CustomError)) {
    customError = new CustomError(warning.internalError)
    return res.status(customError.status).send(customError)
  }
  
  return res.status((customError as CustomError).status).send(customError)
};

