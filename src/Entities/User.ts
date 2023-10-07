import { Country } from "./Country"
import { Note } from "./Note"

export interface User {
    id: string
    name: string
    email: string
    countries?: Country[]
    notes?: Note[]
}