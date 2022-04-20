export class UserDTO{
    name: string
    surname: string
    cellphone: string
    email: string
    birthDate: Date
    password: string
    status: boolean

    constructor(user: UserDTO){
        this.name = user.name,
        this.surname = user.surname,
        this.cellphone = user.cellphone,
        this.email = user.email,
        this.birthDate = user.birthDate
        this.password = user.password
        this.status = user.status
    }
}