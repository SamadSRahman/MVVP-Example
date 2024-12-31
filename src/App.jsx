import useCountryViewModel from './viewmodel/useCountryViewModel';
import styles from './App.module.css';

const App = () => {
  const { countries, loading, error, searchQuery, handleSearch } = useCountryViewModel();

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Countries of the World</h1>
      
      <input
        type="text"
        placeholder="Search countries..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className={styles.searchInput}
      />

      <div className={styles.grid}>
        {countries.map((country, index) => (
          <div key={index} className={styles.card}>
            <h2>{country.name} {country.flag}</h2>
            <p><strong>Official Name:</strong> {country.official}</p>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
            {country.languages.length > 0 && (
              <p><strong>Languages:</strong> {country.languages.join(', ')}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;