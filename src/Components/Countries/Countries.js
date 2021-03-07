import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [country,setCountry] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data=> setCountry(data.slice(0,50)))
    },[])
    console.log(country);
    return (
        <div className="d-flex flex-wrap justify-content-center" >
            {
                country.map(each => <Country key={each.alpha3Code} info={each} ></Country>)
            }
        </div>
    );
};

export default Countries;