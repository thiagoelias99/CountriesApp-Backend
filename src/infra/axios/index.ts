import axios from "axios"
import { ICountryProvider } from "../../providers/Country-Provider"
import { ICountry, ICountryList } from "../../Entities/Country"
import { IRestCountryModel } from "./models/RestCountryModel"
import { IIBGECountryModel } from "./models/IBGECountryModel"

import crypto from 'crypto'
import https from 'https'



const allowLegacyRenegotiationforNodeJsOptions = {
    httpsAgent: new https.Agent({
        secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
    }),
}


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
        const countriesRestApi = await (await axios.get<IRestCountryModel[]>(urlRestCountries)).data[0]

        const urlIBGECountries = `https://servicodados.ibge.gov.br/api/v1/paises/${countriesRestApi.cca2}`

        const countriesIBGEApi = (await axios.get<IIBGECountryModel[]>(urlIBGECountries, allowLegacyRenegotiationforNodeJsOptions)).data[0]

        const country: ICountry = {
            area: Number(countriesIBGEApi.area.total.replaceAll(",", ".")),
            areaUnit: countriesIBGEApi.area.unidade.símbolo,
            capitalPt: countriesIBGEApi.governo.capital.nome,
            capitalUs: "Procurarrr",
            cca2: countriesRestApi.cca2,
            cca3: countriesRestApi.cca3,
            coatOfArmsPng: countriesRestApi.coatOfArms.png,
            coatOfArmsSvg: countriesRestApi.coatOfArms.svg,
            currencyNamePt: countriesIBGEApi['unidades-monetarias'][0].nome,
            currencyNameUs: "Procurarr",
            currencySymbol: "Procurarrr",
            flagAlt: countriesRestApi.flags.alt,
            flagPng: countriesRestApi.flags.png,
            flagSvg: countriesRestApi.flags.svg,
            historyPt: countriesIBGEApi.historico,
            languages: ["Procurarr"],
            latitude: 1000,
            longitude: 10000,
            nameCompleteES: countriesRestApi.translations.spa.official,
            nameCompletePt: countriesRestApi.translations.por.official,
            nameCompleteUs: countriesRestApi.name.official,
            nameES: countriesRestApi.translations.spa.common,
            namePt: countriesRestApi.translations.por.common,
            nameUs: countriesRestApi.name.common,
            nameLocal: "Procurarrr",
            population: countriesRestApi.population,
            regionPt: countriesIBGEApi.localizacao['regiao-intermediaria'].nome
        }

        // console.log(countriesRestApi)
        // console.log(countriesIBGEApi)
        console.log(country)

        throw new Error('Not implemented')
    }
}