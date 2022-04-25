import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { CustomError } from "../DTOs/Response/ErrorResponse";

export const validate = (req: Request, res: Response, next: NextFunction)=>{
    const errors = validationResult(req)
    if(errors.isEmpty()){
        return next()
    }

    throw new CustomError(errors.array()[0].msg, 400)
}