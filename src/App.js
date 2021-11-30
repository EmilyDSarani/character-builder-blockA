import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './components/Character/Character';
import Display from './components/Display/Display';
import Picker from './components/Picker/Picker';

function App() {
const [animal, setAnimal] = useState('lion');
const [shirt, setShirt] = useState('blue');
const [shoe, setShoe] = useState('colorful');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Choose Your Character!</h1>
        <Picker 
        animal={animal}
        setAnimal={setAnimal}
        shirt={shirt}
        setShirt={setShirt}/>
        <Display />
        <Character animal={animal}/>
      </header>
    </div>
  );
}

export default App;
