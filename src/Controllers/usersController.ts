import { Request, Response } from "express";
import userService from "../Services/userService";

const service = new userService()

export const listAll = async(req: Request, res: Response) => {
    const qnt = Number(req.params.qnt)
    return res.status(200).send(await service.allUsers(qnt))
}

export const getById = async(req: Request, res: Response)=>{
    const id = Number(req.params.id)
    return res.status(200).send(await service.getById(id))
}

export const addUser = async(req: Request, res: Response) => {
    const {user} = req.body
    return res.status(201).send(await service.registerUser(user))
}

export const updateUser = async(req: Request, res: Response) => {
    const id = Number(req.params.id)
    const user = req.body.user
    return res.status(201).send(await service.updateUsers(id, user))
}

export const deleteUser = async(req: Request, res: Response) => {
    const id = Number(req.params.id)
    return res.status(201).send(await service.deleteUser(id))
}
