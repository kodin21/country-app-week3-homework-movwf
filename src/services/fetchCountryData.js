const fetchCountryData = 
  fetch('https://restcountries.eu/rest/v2/all')
  .then((res) => res.json());

export default fetchCountryData;