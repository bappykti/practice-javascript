import React from 'react';
import '../Country/Country.css';

const Country = (props) => {
    const {name, population, continents, capital} = props.country
    return (
        <div className='country'>
                <h4>Country Name :- {name.common}</h4>
                <h4>Official Name :- {name.official}</h4>
                <h4>Capital Name :- {capital}</h4>
                <h4>Population :- {population}</h4>
                <h6>Continent :- {continents}</h6>
        </div>
    );
};

export default Country;