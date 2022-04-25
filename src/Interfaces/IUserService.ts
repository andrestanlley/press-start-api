import { UserDTO } from "../DTOs/Request/UserDTO";

export default interface IUserService{
    allUsers(qnt: number):object 
    registerUser(user: UserDTO):object
    getById(id: number):object | null
    updateUsers(id: number, user: UserDTO):object
    deleteUser(id: number):object
}