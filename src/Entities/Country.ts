export interface ICountry {
    cca2: string
    cca3: string
    namePt: string
    nameUs: string
    nameEs: string
    nameCompletePt: string
    nameCompleteUs: string
    nameCompleteES: string
    nameLocal: string
    capitalsPt: string[]
    capitalsUs: string[]
    capitalsEs: string[]
    currencySymbol: string
    currencyNamePt: string
    currencyNameUs: string
    currencyNameEs: string
    flagPng: string
    flagSvg: string
    flagAlt: string
    coatOfArmsPng: string
    coatOfArmsSvg: string
    historyPt: string
    historyUs: string
    historyEs: string
    languages: string[]
    area: number
    areaUnit: string
    latitude: number
    longitude: number
    population: number
    regionPt: string
    regionUs: string
    regionEs: string
    lastUpdate: Date
}

export interface ICountryList {
    cca2: string
    namePt: string
    nameUs: string
    nameES: string
    flagPng: string
    flagSvg: string
}