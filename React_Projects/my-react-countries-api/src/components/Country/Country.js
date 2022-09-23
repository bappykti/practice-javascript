import React from 'react';
import '../Country/Country.css';

const Country = (props) => {
    const {name, population, continents, capital, flags} = props.country
    return (
        <div className='country'>
                <p>Country Name :- {name.common}</p>
                <p>Official Name :- {name.official}</p>
                <p>Capital Name :- {capital}</p>
                <img src={flags.png} alt="Flag" />
                <p>Population :- {population}</p>
                <p>Continent :- {continents}</p>
        </div>
    );
};

export default Country;