import { warning } from "../Constants/Warnings";
import { CustomError } from "../DTOs/Request/ErrorResponse";
import { UserDTO } from "../Models/UserDTO";
import { getByEmail, addUser } from "../Repository/userRepository";

export const listAllUsers = async()=>{
    const users = []

    if (users.length === 0) {
        throw new CustomError(warning.noUsers, 404)
    }

    return []
}

export const registerUser = async(user: UserDTO)=>{
    const emailInUse: object | null = await getByEmail(user.email)
    
    if(emailInUse)
        return new CustomError(warning.emailInUse, 409)

    const newUser = await addUser(user)
    return {status: 201, message: warning.userAddSucess, newUser}
}

export const updateUsers = async(id: number, user: UserDTO)=>{
    return id
}