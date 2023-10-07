import { IUserRepository } from "../repository/UserRepository" 

export interface IAppDatabase {
    users: IUserRepository
}