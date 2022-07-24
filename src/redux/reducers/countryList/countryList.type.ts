export interface CountryListEntity {
  name: CountryName,
  tld: [],
  ccn3: string,
  cca3: string,
  independent: false,
  status: string,
  unMember: false,
  currencies: {},
  idd: {},
  capital: [],
  altSpellings: [],
  region: string,
  subregion: string,
  languages: {},
  translations: {},
  latlng: [],
  landlocked: false,
  area: number,
  demonyms: {},
  flag: string,
  maps: {},
  population: number,
  car: {},
  timezones: [],
  continents: [],
  flags: {},
  coatOfArms: {},
  startOfWeek: string,
  capitalInfo: {},
  postalCode: {}
}

export interface CountryName {
  "common": string,
  "official": string,
  "nativeName": {}
}