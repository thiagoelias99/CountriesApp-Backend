export interface ICountry {
    cca2?: string
    cca3?: string
    namePt?: string
    nameUs?: string
    nameES?: string
    nameCompletePt?: string
    nameCompleteUs?: string
    nameCompleteES?: string
    nameLocal?: string
    capitalPt?: string
    capitalUs?: string
    currencySymbol?: string
    currencyNamePt?: string
    currencyNameUs?: string
    flagPng?: string
    flagSvg?: string
    flagAlt?: string
    coatOfArmsPng?: string
    coatOfArmsSvg?: string
    historyPt?: string
    languages?: string[]
    area?: number
    areaUnit?: string
    latitude?: number
    longitude?: number
    population?: number
    regionPt?: string
}

export interface ICountryList {
    cca2: string
    namePt: string
    nameUs: string
    nameES: string
    flagPng: string
    flagSvg: string
}