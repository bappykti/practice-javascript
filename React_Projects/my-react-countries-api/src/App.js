import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className='App'>
      <Countries></Countries>
    </div>
  );
}

// function LoadCountries(){
//   const [countries, setCountries] = useState([]);
//   useEffect( () => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[])
//   return(
//     <div>
//       <h2>Visiting Every Countries in the World!!!!</h2>
//       <h4>Available Countries :- {countries.length}</h4>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props){
//   return(
//     <div>
//       <h3>Country Name :- {props.name}</h3>
//       <h6>Population :- {props.population}</h6>
//     </div>
//   )
// }
export default App;
