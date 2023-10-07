import { IUser } from '../../Entities/User'
import { IUserRepository } from '../../database/repository/UserRepository'

import { getById } from './get-by-id'

export class UserServices {
    constructor(
        private repository: IUserRepository
    ){}

    getById(id: string): Promise<IUser>{
        return getById(id, this.repository)
    }
}