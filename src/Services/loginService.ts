import UserService from "./userService"
import bcrypt from 'bcrypt'
import { CustomError } from "../DTOs/Response/ErrorResponse"
import { warning } from "../Constants/Warnings"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import ILoginService from "../Interfaces/ILoginService"
dotenv.config()

const { JWTSECRET } = process.env


const userService = new UserService()

export default class loginService implements ILoginService {
    login = async (email: string, password: string) => {
        const user: any = await userService.getByEmail(email)
        if (user.status == 404)
            return new CustomError(warning.unauthorized, 401)

        const authenticated = bcrypt.compareSync(password, user.Autentication.password)

        if (!authenticated) {
            return new CustomError(warning.unauthorized, 401)
        }

        const token = jwt.sign({
            id: user.id,
            email: user.email,
            status: user.Autentication.status
        }, JWTSECRET!, {
            expiresIn: "2h"
        })

        return { status: 200, message: warning.welcome, token, userInfo: { id: user.id, name: user.name } }
    }
}