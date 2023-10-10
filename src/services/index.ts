// import MemoryDatabase from '../infra/database/memory/Memory-Database'
import { IAppDatabase } from "../database/AppDatabse"
import { FireStore } from "../infra/firestore"
import { UserServices } from "./UserServices"
import { CountryServices } from "./CountryServices"
import { ICountryProvider } from "../providers/Country-Provider"
import { ICountry } from "../Entities/Country"
import { AxiosCountryProvider } from "../infra/axios"

//Support

//Create dependencies
const database: IAppDatabase = FireStore.getInstance()
const countryProvider: ICountryProvider = new AxiosCountryProvider()

//Inject dependencies
const userServices = new UserServices(database.users)
const countryServices = new CountryServices(countryProvider)

export {
    userServices,
    countryServices
}