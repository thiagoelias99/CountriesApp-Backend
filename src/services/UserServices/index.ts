import { IUser, IUserUpdate } from '../../Entities/User'
import { IUserRepository } from '../../database/repository/UserRepository'

import { getById } from './get-by-id'
import { update } from './update'


export class UserServices {
    constructor(
        private repository: IUserRepository
    ){}

    getById(id: string): Promise<IUser>{
        return getById(id, this.repository)
    }

    update(id:string, data: IUserUpdate): Promise<IUser>{
        return update(id, data, this.repository)
    }
}