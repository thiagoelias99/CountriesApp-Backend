import { ICountry, ICountryList } from "./Country"
import { INote } from "./Note"

export interface IUser {
    id: string
    name: string
    email: string
    countries?: ICountryList[]
    notes?: INote[]
}