import { useEffect } from "react";
import { useState } from "react";
import { fetchCountries } from "./api/fetching";
import Header from "./components/Header";

const App = () => {
  const [countries, setCountries] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const fetchingAllCountries = () => {
    fetchCountries().then((response) => setCountries(response));
  };

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  const filteredCountries = searchQuery
    ? countries.filter((countrie) =>
        countrie.name.common.toLowerCase().includes(searchQuery)
      )
    : countries;

  useEffect(() => {
    fetchingAllCountries();
    console.log(filteredCountries);
  }, [searchQuery]);
  return (
    <div>
      <header>
        <Header
          dataLength={filteredCountries?.length > 10 ? true : false}
          onChange={handleSearchChange}
        />
      </header>
      <main style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
      {filteredCountries?.length <= 10 && filteredCountries?.length > 1
        ? filteredCountries.map((countrie) => (
            <span key={countrie.name.common}> {countrie.name.common}</span>
          ))
        : null}
        {filteredCountries?.length === 1 ? filteredCountries.map((countrie) => (
          <div key={countrie.name.common}>
          <h2>
            {countrie.name.common}
          </h2>
          <span>
            Alternative Spellings
          </span>
          <ul>
            {countrie.altSpellings.map((spelling) => <li key={spelling}> {spelling} </li>)}
          </ul>
          <img srcSet={countrie.flags.png} alt="" />
          </div>
        )) : null}
      </main>
    </div>
  );
};

export default App;
