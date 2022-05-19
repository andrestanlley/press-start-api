import { Request, Response } from "express";
import LoginService from '../Services/loginService'

const loginService = new LoginService()

export const login = async(req: Request, res: Response)=>{
    const {email, password} = req.body
    const loggedUser = await loginService.login(email, password)
    res.status(loggedUser.status || 200).send(loggedUser)
}