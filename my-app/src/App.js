import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Person></Person>
      <Person></Person>
      <h4 className='person'>New Component</h4>
      <Friend></Friend>
      
    </div>
  );
}
function Person(){
  return (
    <div className='person'>
      <h1>Name : Kazi Tanvirul Islam</h1>
      <h2>Proffesion : Web Developer</h2>
    </div>
  )
}
function Friend(){
  return(
    <div className='person'>
      <h3>Name : Babu</h3>
      <p>Proffesion :- Banker</p>
    </div>
  )
}
export default App;
