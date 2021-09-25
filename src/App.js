
import './App.css';
import DataLoad from './components/countries/DataLoad';


function App() {
  return (
    <div className="App">
      <DataLoad></DataLoad>
    </div>
  );
}

/* function DataLoad(props){
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
        countries.map(country=><Country country={country}></Country>)
      }
    </div>
  )
} */
/* 
function Country(props){
  console.log(props)
  console.log(props.country)
  const {name,flag,capital,population,region,alpha2Code}=props.country;
  return(
    <div>
      <h3>Country Name {name} </h3>
      <br />
      <img src={flag} width="200px" alt=""/>
      <p>Capital {capital}</p>
      <p>Population :{population}</p>
      <p>Region :{region}</p>
      <p>Alpha2Code :{alpha2Code}</p> 
    </div>
  )
} */
export default App;
