import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { warning } from "../Constants/Warnings";
dotenv.config()

const {JWTSECRET} = process.env

export default async function verify(req: Request, res: Response, next: NextFunction){
    try {
    const auth = req.headers.authorization!.split(" ")[1]
    const decode: any = jwt.verify(auth, JWTSECRET!)
    req.params.user = decode
    next()
    } catch (error) {
        return res.status(401).send({message: warning.unauthorized, status: 401})
    }
}