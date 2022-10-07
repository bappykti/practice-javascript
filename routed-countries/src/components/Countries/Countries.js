import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Countries = () => {
    const countries = useLoaderData();
    console.log(countries);
    return (
        <div>
            <h1>All Countries: {countries.length} </h1>
        </div>
    );
};

export default Countries;