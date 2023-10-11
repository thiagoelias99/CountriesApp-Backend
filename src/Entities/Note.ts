import { ICountry } from "./Country"
import { IUser } from "./User"

export interface INote {
    id: string
    title?: string
    content?: string
    countryCCA2?: string
}