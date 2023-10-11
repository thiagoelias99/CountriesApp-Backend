// import MemoryDatabase from '../infra/database/memory/Memory-Database'
import { IAppDatabase } from "../database/AppDatabse"
import { FireStore } from "../infra/firestore"
import { UserServices } from "./UserServices"
import { CountryServices } from "./CountryServices"
import { ICountryProvider } from "../providers/Country-Provider"
import { ICountry } from "../Entities/Country"
import { AxiosCountryProvider } from "../infra/axios"
import { AuthServices } from './AuthServices'
import { Firebase } from '../infra/firebase'

//Support

//Create dependencies
const firebase = Firebase.getInstance()
const database: IAppDatabase = FireStore.getInstance()
const countryProvider: ICountryProvider = new AxiosCountryProvider()

//Inject dependencies
const userServices = new UserServices(database.users)
const countryServices = new CountryServices(countryProvider)
const authServices = new AuthServices(firebase, database)

export {
    userServices,
    countryServices,
    authServices
}