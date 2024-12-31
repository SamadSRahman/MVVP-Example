class CountryModel {
    constructor() {
      this.countries = [];
    }
  
    setCountries(countries) {
      this.countries = countries.map(country => ({
        name: country.name.common,
        official: country.name.official,
        capital: country.capital?.[0] || 'N/A',
        region: country.region,
        population: country.population,
        languages: country.languages ? Object.values(country.languages) : [],
        flag: country.flag,
        area: country.area
      }));
    }
  
    getAllCountries() {
      return this.countries;
    }
  
    searchCountries(query) {
      if (!query) return this.countries;
      const lowercaseQuery = query.toLowerCase();
      return this.countries.filter(country => 
        country.name.toLowerCase().includes(lowercaseQuery) ||
        country.region.toLowerCase().includes(lowercaseQuery)
      );
    }
  }
  
  export default CountryModel;