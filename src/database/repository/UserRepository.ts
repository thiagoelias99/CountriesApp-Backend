import { IUser, IUserUpdate } from "../../Entities/User"

export interface IUserRepository {

    save(user: IUser): Promise<IUser>
    update(id: string, data: IUserUpdate): Promise<IUser>
    getAll(): Promise<IUser[]>
    getById(id: string): Promise<IUser>
    getByEmail(email: string): Promise<IUser>
    remove(id: string): Promise<void>
}