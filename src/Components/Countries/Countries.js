import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {

        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div className="countries">
            <h1>This Is Countries: {countries.length}</h1>

            {
                countries.map(country => <Country key={country.name} country={country}></Country>)
            }

        </div>
    );
};

export default Countries;