export interface IIBGECountryModel {
    id: IIBGECountryModelID;
    nome: Nome;
    area: Area;
    localizacao: Localizacao;
    linguas: Lingua[];
    governo: Governo;
    "unidades-monetarias": UnidadesMonetaria[];
    historico: string;
}

interface Area {
    total: string;
    unidade: Unidade;
}

interface Unidade {
    nome: string;
    símbolo: string;
    multiplicador: number;
}

interface Governo {
    capital: Capital;
}

interface Capital {
    nome: string;
}

interface IIBGECountryModelID {
    M49: number;
    "ISO-3166-1-ALPHA-2": string;
    "ISO-3166-1-ALPHA-3": string;
}

interface Lingua {
    id: LinguaID;
    nome: string;
}

interface LinguaID {
    "ISO-639-1": string;
    "ISO-639-2": string;
}

interface Localizacao {
    regiao: Regiao;
    "sub-regiao": Regiao;
    "regiao-intermediaria": Regiao;
}

interface Regiao {
    id: RegiaoID;
    nome: string;
}

interface RegiaoID {
    M49: number;
}

interface Nome {
    abreviado: string;
    "abreviado-EN": string;
    "abreviado-ES": string;
}

interface UnidadesMonetaria {
    id: UnidadesMonetariaID;
    nome: string;
}

interface UnidadesMonetariaID {
    "ISO-4217-ALPHA": string;
    "ISO-4217-NUMERICO": string;
}