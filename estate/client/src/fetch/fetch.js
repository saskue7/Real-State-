export const options1 = {
  method: 'GET',
  url: 'https://bayut.p.rapidapi.com/properties/list',
  params: {
    locationExternalIDs: '5002,6020',
    purpose: 'for-rent',
    hitsPerPage: '6',
    page: '0',
    lang: 'en',
    sort: 'city-level-score',
    rentFrequency: 'monthly',
    categoryExternalID: '4'
  },
  headers: {
    'X-RapidAPI-Key': '022111aa49mshb3ca0ce5bb3c604p15cdc3jsnd41ea281305b',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
};


export const options2 = {
  method: 'GET',
  url: 'https://bayut.p.rapidapi.com/properties/list',
  params: {
    locationExternalIDs: '5002,6020',
    purpose: 'for-sale',
    hitsPerPage: '6',
    page: '0',
    lang: 'en',
    sort: 'city-level-score',
    rentFrequency: 'monthly',
    categoryExternalID: '4'
  },
  headers: {
    'X-RapidAPI-Key': '022111aa49mshb3ca0ce5bb3c604p15cdc3jsnd41ea281305b',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
};






