import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './components/Character/Character';
import Display from './components/Display/Display';
import Picker from './components/Picker/Picker';

function App() {
  //these will set the state for the animals, shirts, pants, and shoes
const [animal, setAnimal] = useState('lion');
const [shirt, setShirt] = useState('blue');
const [pant, setPant] = useState('jogger');
const [shoe, setShoe] = useState('colorful');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Choose Your Character!</h1>
        {/* we will then pass down the state to each of these depending on what we will use them for. in Picker we will need the state and to set the state. Character will just need the state to grab the pictures. Display  */}
        <Picker 
        animal={animal}
        setAnimal={setAnimal}
        shirt={shirt}
        setShirt={setShirt}
        pant={pant}
        setPant={setPant}
        shoe={shoe}
        setShoe={setShoe}/>
        <Display />
        <Character
         animal={animal}
         shirt={shirt}
         pant={pant}
         shoe={shoe}/>
      </header>
    </div>
  );
}

export default App;
