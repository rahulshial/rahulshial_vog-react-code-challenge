export interface PostalLookupEntity {
  "post code": string,
  "country": string,
  "country abbreviation": string,
  "places": [
    {
      "place name": string,
      "longitude": string,
      "state": string,
      "state abbreviation": string,
      "latitude": string
    }
  ]
};
