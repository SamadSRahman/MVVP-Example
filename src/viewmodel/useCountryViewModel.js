import { useState, useEffect } from 'react';
import CountryModel from '../model/CountryModel';

const useCountryViewModel = () => {
  const [countryModel] = useState(() => new CountryModel());
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) throw new Error('Failed to fetch countries');
      const data = await response.json();
      countryModel.setCountries(data);
      setCountries(countryModel.getAllCountries());
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCountries(countryModel.searchCountries(query));
  };

  return {
    countries,
    loading,
    error,
    searchQuery,
    handleSearch
  };
};

export default useCountryViewModel;