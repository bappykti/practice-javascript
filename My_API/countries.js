// console.log("hello countries");

const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = countries =>{
    // const countryContainer = document.getElementById('countries-container');
    // for (const country of countries){
    //     console.group(country);
    // }
    const countryContainer = document.getElementById('countries-container');
   countries.forEach(country => {
        // console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name :- ${country.name.common}</h3>
        <h5>Capital :- ${country.capital ? country.capital[0] : 'No Capital'}</h5>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countryContainer.appendChild(countryDiv);
   });
}
const loadCountryDetails = (code) => {
    //https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country details', code);
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}
const displayCountryDetails = country =>{
    console.log(country);
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
    <h2> Details :- ${country.name.common}</h2>
    <img src = "${country.flags.png}">
    `;
}
loadCountries();