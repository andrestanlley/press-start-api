import { Request, Response } from "express";
import { warning } from "../Constants/Warnings";
import { CustomError } from "../DTOs/Request/ErrorResponse";
import { registerUser, listAllUsers, updateUsers } from "../Services/userService";

export const listAll = async(req: Request, res: Response) => {
    return await listAllUsers()
}

export const addUser = async(req: Request, res: Response) => {
    const {user} = req.body
    return res.status(201).send(await registerUser(user))
}

export const updateUser = async(req: Request, res: Response) => {
    const {id, user} = req.body
    const newUserInfo = await updateUsers(id, user)
    return res.status(201).send({ message: warning.userUpdated, newUserInfo })
}

export const deleteUser = (req: Request, res: Response) => {
    return res.status(201).send({ message: warning.userDeleted })
}
