import { IUserRepository } from '../../database/repository/UserRepository'
import { IUser, IUserUpdate } from '../../Entities/User'

export function update(id: string, data: IUserUpdate, repository: IUserRepository): Promise<IUser> {
    return repository.update(id, data)
}