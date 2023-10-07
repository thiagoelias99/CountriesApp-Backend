import { IUserRepository } from '../../database/repository/UserRepository'
import { IUser } from '../../Entities/User'

export function getById(id: string, repository: IUserRepository): Promise<IUser> {
    return repository.getById(id)
}