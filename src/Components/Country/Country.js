import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    console.log(props);
    const {name,capital,flag} = props.info;
    return (
        <div className="country" >
            <img src={flag} alt="flag"/>
            <h4>Name:{name}</h4>
            <h5>Capital:{capital}</h5>
            <Link to={`/country/${name}`}><button className="btn btn-success" >Details</button></Link>
        </div>
    );
};

export default Country;