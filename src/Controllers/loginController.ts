import { Request, Response } from "express";
import LoginService from '../Services/loginService'

const loginService = new LoginService()

export const login = async(req: Request, res: Response)=>{
    const {email, password} = req.body
    res.status(200).send(await loginService.login(email, password))
}