import axios from "axios";
import { ICountryProvider } from "../../providers/Country-Provider";
import { ICountry, ICountryList } from "../../Entities/Country";
import { IRestCountryModel } from "./models/RestCountryModel";
import { IIBGECountryModel } from "./models/IBGECountryModel";

import crypto from 'crypto';
import https from 'https';



const allowLegacyRenegotiationforNodeJsOptions = {
    httpsAgent: new https.Agent({
        secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
    }),
};


export class AxiosCountryProvider implements ICountryProvider {
    async searchByName(name: string): Promise<ICountryList[]> {
        const urlRestCountries = `https://restcountries.com/v3.1/translation/${name}`
        const countriesRestApi = await axios.get<IRestCountryModel[]>(urlRestCountries)

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

    async getByCCA2(cca2: string): Promise<ICountry> {
        const urlRestCountries = `https://restcountries.com/v3.1/alpha/${cca2}`
        const countriesRestApi = await axios.get<IRestCountryModel[]>(urlRestCountries)

        if (countriesRestApi.data.length === 0) {
            throw new Error('Country not found')
        }
        
        const urlIBGECountries = `https://servicodados.ibge.gov.br/api/v1/paises/${countriesRestApi.data[0].cca2}`
        
        const countriesIBGEApi = await axios.get<IIBGECountryModel[]>(urlIBGECountries, allowLegacyRenegotiationforNodeJsOptions)
        
        
        console.log(countriesRestApi.data[0])
        console.log(countriesIBGEApi.data[0])

        throw new Error('Method not implemented.')
    }
}