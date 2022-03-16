import React from 'react';
import './Country.css';

const Country = (props) => {

    return (
        <div className="country">
            <h1>This Is: {props.country.name.common}</h1>
            <h3>Total Population: {props.country.population}</h3>
            <img src={props.country.flags.png}></img>
        </div>
    );
};

export default Country;