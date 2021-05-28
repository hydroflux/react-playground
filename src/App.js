import { useState, useEffect } from 'react';
import './App.css'
import './digimon.css'
import DigimonContainer from './containers/DigimonContainer';

function App() {
  const parseHTTPResponse = response => response.json()
  const [digimons, setDigimon] = useState([])

  useEffect( () => {
    fetch("https://digimon-api.vercel.app/api/digimon")
    .then( parseHTTPResponse )
    .then( setDigimon )
  }, [])
  
  return (  
    <div className="App">
      <DigimonContainer digimons={digimons}/>
    </div>
  );
}

export default App;
