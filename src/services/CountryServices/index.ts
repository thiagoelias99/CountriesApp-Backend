import { ICountry } from "../../Entities/Country";
import { ICountryProvider } from "../../providers/Country-Provider";

export class CountryServices {
    constructor(
        private countryProvider: ICountryProvider
    ) { }

    searchByName(name: string): Promise<ICountry[]> {
        return this.countryProvider.searchByName(name)
    }
}