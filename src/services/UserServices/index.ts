import { IUser } from '../../Entities/User'
import { IUserRepository } from '../../repository/UserRepository'

// import { ICreateUser, createUser } from './create-user'
// import { deleteById } from './delete-by-id'
// import { getAllUsers } from './get-all'
import { getById } from './get-by-id'

export class UserServices {
    constructor(
        private repository: IUserRepository
    ){}

    // createUser(user: ICreateUser){
    //     return createUser(user, this.repository)
    // }

    // getAll(): Promise<IUser[]>{
    //     return getAllUsers(this.repository)
    // }

    getById(id: string): Promise<IUser>{
        return getById(id, this.repository)
    }

    // deleteById(id: string): Promise<void>{
    //     return deleteById(id, this.repository)
    // }
}