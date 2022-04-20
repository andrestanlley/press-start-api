export class User{
    name: string
    surname: string
    cellphone: string
    mail: string
    birthDate: Date

    constructor(user: User){
        this.name = user.name,
        this.surname = user.surname,
        this.cellphone = user.cellphone,
        this.mail = user.mail,
        this.birthDate = user.birthDate
    }
}