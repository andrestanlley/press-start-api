import { UserDTO } from "../DTOs/Request/UserDTO"

export default interface IUserRepository{
    all(qnt: number):object
    getByEmail(email: string):object
    add(user: UserDTO):object
    findById(id: number):object
    findByIdWithAuth(id: number):object
    update(id: number, user: UserDTO):object
    delete(id: number):object
}