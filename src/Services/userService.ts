import { warning } from "../Constants/Warnings";
import { CustomError } from "../DTOs/Response/ErrorResponse";
import IUserService from "../Interfaces/IUserService";
import { UserDTO } from "../DTOs/Request/UserDTO";
import userRepository from "../Repository/userRepository";
import bcrypt from 'bcrypt'

const repository = new userRepository()

export default class userService implements IUserService {
    allUsers = async (qnt: number) => {
        if (!qnt)
            qnt = 10
        const users = await repository.all(qnt)

        if (!Object.keys(users).length)
            return new CustomError(warning.noUsers, 404)

        return users
    }

    registerUser = async (user: UserDTO) => {
        if(user.password == "") 
            return {status: 400, message: warning.passwordFormat}

        const emailInUse: object | null = await repository.getByEmail(user.email)

        if (emailInUse)
            return new CustomError(warning.emailInUse, 409)

        let hashPassword = bcrypt.hashSync(user.password, 10)
        user.password = hashPassword

        const newUser = await repository.add(user)
        return { status: 201, message: warning.userAddSucess, newUser }
    }

    getByEmail = async(email: string)=>{
        const user: object | null = await repository.getByEmail(email)

        if (user)
            return user
        
        return new CustomError(warning.internalError, 404)
    }
    
    getById = async (id: number) => {
        const user = await repository.findById(id)
        if (!user)
            return new CustomError(warning.noUserId, 404)

        return user
    }

    updateUsers = async (id: number, user: UserDTO) => {
        const userFind = await repository.findByIdWithAuth(id)

        if (!userFind)
            return new CustomError(warning.noUserId, 404)

        const emailInUse: any | null = await repository.getByEmail(user.email)

        if (emailInUse && emailInUse.id != id)
            return new CustomError(warning.emailInUse, 409)

        if(user.password == ""){
            user.password = userFind.Autentication.password
        }else{
            user.password = bcrypt.hashSync(user.password, 10)
        }

        const updatedUser = await repository.update(id, user)
        return {status: 200, message: warning.userUpdated, updatedUser}
    }

    deleteUser = async (id: number) => {
        const user: object | null = await repository.findById(id)

        if (!user)
            return new CustomError(warning.noUsers, 404)

        await repository.delete(id)
        return { status: 200, message: warning.userDeleted }
    }
}
