import { useState } from 'react';
import './App.css'

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
      {
        dinosaurs.map( dinosaur => {
          console.log(dinosaur)
          return (
            <div className="dinosaur-card" key={dinosaur.name}>
              <img src={dinosaur.image} alt={dinosaur.name} />
              <h2>{dinosaur.name}</h2>
              <h3>{dinosaur.type}</h3>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
