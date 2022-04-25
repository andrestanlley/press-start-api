import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

const {JWTSECRET} = process.env

export const verify = (req: Request, res: Response, next: NextFunction)=>{
    jwt.verify(req.headers.authorization!, JWTSECRET!)
    console.log(jwt.verify(req.headers.authorization!, JWTSECRET!))
    next()

}