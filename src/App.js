import { useState, useEffect } from 'react';
import './App.css'
import './digimon.css'
import DigimonContainer from './containers/DigimonContainer';
import DigimonForm from './components/DigimonForm';

function App() {
  const parseHTTPResponse = response => response.json()
  const [digimons, setDigimons] = useState([])

  useEffect( () => {
    fetch("https://digimon-api.vercel.app/api/digimon")
    .then( parseHTTPResponse )
    .then( setDigimons )
  }, [])
  
  return (  
    <div className="App">
      <DigimonForm digimons={digimons} setDigimons={setDigimons}/>
      <DigimonContainer digimons={digimons}/>
    </div>
  );
}

export default App;
