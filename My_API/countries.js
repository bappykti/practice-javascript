console.log("hello countries");

const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = countries =>{
    const countriesContainer = document.getElementById('coutries-container');
    // for (const country of countries){
    //     console.group(country);
    // }
    const countryContainer = document.getElementById('countries-container');
   countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name :- </h3>
        `;
        countryContainer.appendChild(countryDiv);
   });
}
loadCountries();