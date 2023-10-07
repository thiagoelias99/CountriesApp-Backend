import { ICountry } from "./Country"
import { IUser } from "./User"

export interface INote {
    id: string
    user: IUser
    countryCCA3?: string
}