import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';
import Rechart from './components/Rechart/Rechart';
import PhoneBar from './components/PhoneBar/PhoneBar';


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Pricing></Pricing>
    <Rechart></Rechart>
    <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
