import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const CountryDetails = () => {
    const [country,setCountry] = useState([]);
    const {name} = country;
    console.log(name);
    const history = useHistory()
    const {countryName} = useParams();
    let errorDisplay = "";
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`)
        .then(res => res.json())
        .then(data => {
            if(data[0]){
                setCountry(data[0])
            }
            else{
                history.push('/error')
            }
        } )
    },[])
    return (
        <div>
            <h3>Name: {name}</h3>
        </div>
    );
};
export default CountryDetails;