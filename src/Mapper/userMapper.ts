import { UserDTO } from "../DTOs/Request/UserDTO";

export function userAddMapper(user: UserDTO){
    return {
        name: user.name,
        surname: user.surname,
        email: user.email,
        cellphone: user.cellphone,
        birthDate: new Date(user.birthDate),
        Autentication: {
            create: {
                password: user.password,
                status: user.status
            }
        }
    }
}

export function userUpdateMapper(user: UserDTO){
    return {
        name: user.name,
        surname: user.surname,
        email: user.email,
        birthDate: new Date(user.birthDate),
        Autentication: {
            update: { status: user.status, password: user.password }
        }
     }
}