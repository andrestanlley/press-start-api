import IUserRepository from '../Interfaces/IUserRepository'
import { UserDTO } from '../DTOs/Request/UserDTO'
import prismaClient from "../Prisma"
import userResponse from '../DTOs/Response/userResponse'
import { userAddMapper, userUpdateMapper } from '../Mapper/userMapper'

export default class userRepository implements IUserRepository {
    all = async (qnt: number) => {
        return await prismaClient.user.findMany({
            take: qnt,
            select: userResponse
        })
    }

    getByEmail = async (email: string) => {
        return await prismaClient.user.findUnique({
            where: { email },
            include: { Autentication: true }

        })
    }

    add = async (user: UserDTO) => {
        return await prismaClient.user.create({
            data: userAddMapper(user),
            select: userResponse
        })
    }

    findById = async (id: number) => {
        return await prismaClient.user.findFirst({
            where: { id: id },
            select: userResponse
        })
    }

    findByIdWithAuth = async (id: number) => {
        return await prismaClient.user.findFirst({
            where: { id: id },
            include: {
                Autentication: true
            }
        })
    }

    update = async (id: number, user: UserDTO) => {
        return await prismaClient.user.update({
            where: { id: id },
            data: userUpdateMapper(user),
            select: userResponse
        })
    }

    delete = async (id: number) => {
        return await prismaClient.autentication.delete({
            where: { id: id }
        })
    }
}

