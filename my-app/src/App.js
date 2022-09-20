import logo from './logo.svg';
import './App.css';

function App() {
  const heros = ['bappy', 'rabbi', 'akher', 'hasan', 'josin', 'salman'];
  const jobs = ["Web-Developer", "Banker", "Business", "Private Service", "Softwere Developer"];
  const employes = [
    {name:"Bappy", job:"Web-Developer"},
    {name:"Ali", job:"Private Service"},
    {name:"Mun", job:"Banker"},
    {name:"Rahim", job:"Business"},
    {name:"Karim", job:"Softwere-Developer"},
  ]
  return (
    <div className='app'>
      {/* {
      heros.map(hero => <Person name={hero}></Person>)
    }
    {
    jobs.map(job => <Person name={job}></Person>)
    } */}
    {
      employes.map(employee => <Person name={employee.name} job={employee.job}></Person>)
    }
      {/* <Person name="Bappy" job="Web-Developer"></Person>
      <Person name="Rabbi" job="Banker"></Person>
      <Person name="Mimi" job="Business"></Person>
      <h4 className='person'git>New Component</h4>
      <Friend name="Akhet" job="Private Service"></Friend>
      <Friend name="Turin" job="Banker"></Friend>
      <Friend name="Rony" job="Softwere Developer"></Friend> */}
      
    </div>
  );
}
function Person(props){
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <h2>{props.job}</h2>
    </div>
  )
}
function Friend(props){
  return(
    <div className='person'>
      <h3>{props.name}</h3>
      <p>{props.job}</p>
    </div>
  )
}
export default App;
