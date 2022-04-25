import { Request, Response } from "express";
import userService from "../Services/userService";

const service = new userService()

export const listAll = async(req: Request, res: Response) => {
    const qnt = Number(req.params.qnt)
    const users = await service.allUsers(qnt)
    return res.status(200).send(users)
}

export const getById = async(req: Request, res: Response)=>{
    const id = Number(req.params.id)
    const user = await service.getById(id)
    return res.status(200).send(user)
}

export const addUser = async(req: Request, res: Response) => {
    const {user} = req.body
    const newUser = await service.registerUser(user)
    return res.status(newUser.status || 201).send(newUser)
}

export const updateUser = async(req: Request, res: Response) => {
    const id = Number(req.params.id)
    const user = req.body.user
    const updatedUser = await service.updateUsers(id, user)
    return res.status(updatedUser.status || 200).send(updatedUser)
}

export const deleteUser = async(req: Request, res: Response) => {
    const id = Number(req.params.id)
    const deletedUser = await service.deleteUser(id)
    return res.status(deletedUser.status || 200).send(deletedUser)
}
