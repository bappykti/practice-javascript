import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <ExternalUsers></ExternalUsers>
  );
}
function ExternalUsers (){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);
  return(
    <div>
      <h1>Hello World</h1>
      <p>{users.length}</p>
    {
      users.map(user => <User name={user.name} email={user.email}></User>)
    }
    </div>
  )
}
function User(props){
  return(
    <div style={{width:'400px', margin:'10px auto', border:'2px solid gray', textAlign:'center',backgroundColor:'yellowgreen', borderRadius:'5px'}}>
      <h3>Name : {props.name}</h3>
      <h3>Email : {props.email}</h3>
    </div>
  )
}
export default App;
