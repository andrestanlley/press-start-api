import { warning } from "../Constants/Warnings";
import { CustomError } from "../DTOs/Request/ErrorResponse";
import { User } from "../Models/User";

export const listAllUsers = async()=>{
    const users = []

    if (users.length === 0) {
        throw new CustomError(warning.noUsers, 404)
    }

    return []
}

export const registerUser = async(user: User)=>{
    const newUser = new User(user)
    return newUser
}

export const updateUsers = async(id: number, user: User)=>{
    return id
}