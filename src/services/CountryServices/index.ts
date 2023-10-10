import { ICountry, ICountryList } from "../../Entities/Country";
import { ICountryProvider } from "../../providers/Country-Provider";

export class CountryServices {
    constructor(
        private countryProvider: ICountryProvider
    ) { }

    searchByName(name: string): Promise<ICountryList[]> {
        return this.countryProvider.searchByName(name)
    }

    getByCCA2(cca2: string): Promise<ICountry> {
        return this.countryProvider.getByCCA2(cca2)
    }
}