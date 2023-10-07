import { Country } from "./Country"
import { User } from "./User"

export interface Note {
    id: string
    user: User
    country: Country
}