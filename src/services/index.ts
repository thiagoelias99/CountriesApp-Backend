// import MemoryDatabase from '../infra/database/memory/Memory-Database'
import { IAppDatabase } from "../database/AppDatabse"
import { FireStore } from "../infra/firestore"
import { UserServices } from "./UserServices"
import { CountryServices } from "./CountryServices"
import { ICountryProvider } from "../providers/Country-Provider"
import { ICountry } from "../Entities/Country"

//Support
class MockCountryProvider implements ICountryProvider {
    searchByName(name: string): Promise<ICountry[]> {
        throw new Error("Method not implemented.");
    }    
}

//Create dependencies
const database: IAppDatabase = FireStore.getInstance()
const countryProvider: ICountryProvider = new MockCountryProvider()

//Inject dependencies
const userServices = new UserServices(database.users)
const countryServices = new CountryServices(countryProvider)

export {
    userServices,
    countryServices
}