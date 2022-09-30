
import './App.css';
import Database from './components/Database/Database';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Database></Database>
      <Questions></Questions>
    </div>
  );
}

export default App;
