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

        const countriesIBGEApiEN = (await axios.get<IIBGECountryModel[]>(urlIBGECountries + "?lang=EN", allowLegacyRenegotiationforNodeJsOptions)).data[0]

        const countriesIBGEApiES = (await axios.get<IIBGECountryModel[]>(urlIBGECountries + "?lang=ES", allowLegacyRenegotiationforNodeJsOptions)).data[0]

        const currencies = Object.keys(countriesRestApi.currencies);
        const languagesValues = Object.values(countriesRestApi.languages);
        const nativeName = Object.values(countriesRestApi.name.nativeName)[0];
        const capitals = Object.values(countriesRestApi.capital);

        const country: ICountry = {
            area: countriesRestApi.area ?? 0,
            areaUnit: countriesIBGEApi?.area.unidade.símbolo ?? "",
            capitalsPt: [countriesIBGEApi?.governo.capital.nome ?? ""],
            capitalsUs: capitals,
            capitalsEs: [countriesIBGEApiES?.governo.capital.nome ?? ""],
            cca2: countriesRestApi.cca2,
            cca3: countriesRestApi.cca3,
            coatOfArmsPng: countriesRestApi.coatOfArms.png,
            coatOfArmsSvg: countriesRestApi.coatOfArms.svg,
            currencyNamePt: countriesIBGEApi?.['unidades-monetarias'][0].nome ?? "",
            currencyNameUs: countriesRestApi.currencies[currencies[0]].name,
            currencyNameEs: countriesIBGEApiES?.['unidades-monetarias'][0].nome ?? "",
            currencySymbol: countriesRestApi.currencies[currencies[0]].symbol,
            flagAlt: countriesRestApi.flags.alt,
            flagPng: countriesRestApi.flags.png,
            flagSvg: countriesRestApi.flags.svg,
            historyPt: countriesIBGEApi?.historico ?? "",
            historyUs: countriesIBGEApiEN?.historico ?? "",
            historyEs: countriesIBGEApiES?.historico ?? "",
            languages: languagesValues,
            latitude: countriesRestApi.capitalInfo.latlng[0],
            longitude: countriesRestApi.capitalInfo.latlng[1],
            nameCompleteES: countriesRestApi.translations.spa.official,
            nameCompletePt: countriesRestApi.translations.por.official,
            nameCompleteUs: countriesRestApi.name.official,
            nameEs: countriesRestApi.translations.spa.common,
            namePt: countriesRestApi.translations.por.common,
            nameUs: countriesRestApi.name.common,
            nameLocal: nativeName.common,
            population: countriesRestApi.population,
            regionPt: countriesIBGEApi?.localizacao['regiao-intermediaria']?.nome ?? countriesIBGEApi?.localizacao['sub-regiao']?.nome ?? "",
            regionEs: countriesIBGEApiES?.localizacao['regiao-intermediaria']?.nome ?? countriesIBGEApiES?.localizacao['sub-regiao']?.nome ?? "",
            regionUs: countriesRestApi.continents[0],
            lastUpdate: new Date()
        }

        return country
    }
}