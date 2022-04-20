import { UserDTO } from '../Models/UserDTO'
import prismaClient from "../Prisma"

export const getByEmail = async (email: string) => {
    return await prismaClient.user.findUnique({
        where: {
            email
        },
        select: {
            email: true
        }
    })
}

export const addUser = async (user: UserDTO) => {
    return await prismaClient.user.create({
        data: {
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
    })
}


