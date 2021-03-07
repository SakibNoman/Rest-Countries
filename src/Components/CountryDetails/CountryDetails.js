import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const [country,setCountry] = useState([]);
    const {name} = country;
    console.log(name);
    const {countryName} = useParams();
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`)
        .then(res => res.json())
        .then(data => setCountry(data[0]) )
    },[])
    return (
        <div>
            <h3>Name: {name}</h3>
        </div>
    );
};

export default CountryDetails;