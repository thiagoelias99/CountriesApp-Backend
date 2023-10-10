import axios from "axios";
import { ICountryProvider } from "../../providers/Country-Provider";
import { ICountry, ICountryList } from "../../Entities/Country";
import { IRestCountryModel } from "./models/RestCountryModel";

export class AxiosCountryProvider implements ICountryProvider {
    async searchByName(name: string): Promise<ICountryList[]> {
        const urlRestCountries = `https://restcountries.com/v3.1/translation/${name}`
        const countriesRestApi = await axios.get<IRestCountryModel[]>(urlRestCountries)
        // const urlIBGECountries = `https://servicodados.ibge.gov.br/api/v1/paises/${countriesRestApi.data[0].cca2}`        
        // const countriesIBGEApi = await axios.get<IRestCountryModel[]>(urlIBGECountries)

        const countries: ICountryList[] = countriesRestApi.data.map((country) => {
            console.log(country.translations.por.common)
            return {
                cca2: country.cca2,
                namePt: country.translations.por.common,
                nameUs: country.name.common,
                nameES: country.translations.spa.common,
                flagPng: country.flags.png,
                flagSvg: country.flags.svg
            }
        })
        return countries
    }

    getByCCA2(cca2: string): Promise<ICountry> {
        throw new Error("Method not implemented.");
    }
}