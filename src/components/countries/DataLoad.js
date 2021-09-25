import React, { useEffect, useState } from 'react';
import Country from '../country/Country';

const DataLoad = (props) => {
    const [countries,setCountries] = useState([]);
    useEffect(()=>{
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res=>res.json())
      .then(data=>setCountries(data))
    },[])
    return(
      <div>
        <h1>Type your favourite countries</h1>
        <h2>To know about details</h2>
        {
          countries.map(country=><Country country={country} ></Country>)
        }
      </div>
    );
};

export default DataLoad;