import UserService from "./userService"
import bcrypt from 'bcrypt'
import { CustomError } from "../DTOs/Response/ErrorResponse"
import { warning } from "../Constants/Warnings"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const {JWTSECRET} = process.env


const userService = new UserService()

export default class loginService{
    login = async(email: string, password: string)=>{
        const user: any = await userService.getByEmail(email)

        const authenticated = bcrypt.compareSync(password, user.Autentication.password)
        
        if(!authenticated){
            return new CustomError(warning.unauthorized, 401)
        }

        const token = jwt.sign({
            id: user.id,
            email: user.email,
            status: user.status
        },JWTSECRET!, {
            expiresIn: "2h"
        })

        return {message: warning.welcome, token}
    }
}