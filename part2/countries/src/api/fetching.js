export function fetchCountries() {
  const response = fetch("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then((res) => res.json())
  return response;
}
