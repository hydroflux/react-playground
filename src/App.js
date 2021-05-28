import { useState } from 'react';
import './App.css'
import DinosaurContainer from './containers/DinosaurContainer';

function App() {

  const [dinosaurs, setDinosaurs] = useState([
    {
      name: "Brontosaurus",
      type: "herbivore",
      image: "https://image.shutterstock.com/image-vector/brontosaurus-diplodocus-dinosaur-comic-style-260nw-1721306374.jpg"
    },
    {
      name: "T-Rex",
      type: "carnivore",
      image: "https://image.shutterstock.com/image-photo/tyrannosaurus-rex-isolated-white-260nw-509463667.jpg"
    }
  ])


  return (
    
    <div className="App">
      <DinosaurContainer dinosaurs={dinosaurs}/>
    </div>
  );
}

export default App;
