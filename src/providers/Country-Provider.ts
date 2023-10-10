import { ICountry, ICountryList } from "../Entities/Country";

export interface ICountryProvider {

    searchByName(name: string): Promise<ICountryList[]>
    getByCCA2(cca2: string): Promise<ICountry>
}