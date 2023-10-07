import { ICountry } from "./Country"
import { INote } from "./Note"

export interface IUser {
    id: string
    name: string
    email: string
    countries?: ICountry[]
    notes?: INote[]
}