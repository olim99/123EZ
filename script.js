const countryInput = document.getElementById('countryInput');
const searchButton = document.getElementById('searchButton');
const countryInfo = document.getElementById('countryInfo');

const countries = [
  {
    name: { common: "Nigeria", official: "Federal Republic of Nigeria" },
    capital: ["Abuja"],
    region: "Africa",
    population: 206139587,
    flag: "https://flagcdn.com/w320/ng.png",
    currencies: { NGN: { name: "Nigerian naira", symbol: "₦" } }
  }
];

searchButton.addEventListener('click', () => {
  const searchTerm = countryInput.value.trim().toLowerCase();
  const country = countries.find(c => c.name.common.toLowerCase() === searchTerm);

  if (country) {
    countryInfo.innerHTML = `
      <h2>${country.name.common}</h2>
      <img src="${country.flag}" alt="Flag of ${country.name.common}">
      <p><strong>Official Name:</strong> ${country.name.official}</p>
      <p><strong>Capital:</strong> ${country.capital.join(', ')}</p>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Currency:</strong> ${country.currencies.NGN.name} (${country.currencies.NGN.symbol})</p>
    `;
  } else {
    countryInfo.innerHTML = `<p>Country not found. Please try again.</p>`;
  }
});
