import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Pricing></Pricing>
    </div>
  );
}

export default App;
