import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './components/Character/Character';
import Display from './components/Display/Display';
import Picker from './components/Picker/Picker';

function App() {
const [animal, setAnimal] = useState('lion');
const [shirt, setShirt] = useState('blue');
const [pant, setPant] = useState('jogger');
const [shoe, setShoe] = useState('colorful');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Choose Your Character!</h1>
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
