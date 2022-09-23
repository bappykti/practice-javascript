import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import '../Countries/Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div  className='countries-container'>
            <h4>Visiting Countries in the World@@@@!!!!!</h4>
            <h5>Available Countries in the World :- {countries.length}</h5>
            <div>
            {
                countries.map(country => <Country 
                    country = {country}
                    // name={country.name.common}
                    // population={country.population}
                    // continents={country.continents}
                    // official={country.name.official}
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;