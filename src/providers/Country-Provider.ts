import { ICountry } from "../Entities/Country";

export interface ICountryProvider {

    searchByName(name: string): Promise<ICountry[]>
}