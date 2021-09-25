import React from 'react';

const Country = (props) => {
    const {name,flag,capital,population,region,alpha2Code}=props.country;
    return (
        <div>
        <h3>Country Name {name} </h3>
      <br />
      <img src={flag} width="200px" alt=""/>
      <p>Capital {capital}</p>
      <p>Population :{population}</p>
      <p>Region :{region}</p>
      <p>Alpha2Code :{alpha2Code}</p> 
        </div>
    );
};

export default Country;