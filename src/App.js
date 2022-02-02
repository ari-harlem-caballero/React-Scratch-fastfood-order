import { useState } from 'react';
import './App.css';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [orderName, setOrderName] = useState('Your Name Here');
  const [instructions, setInstructions] = useState(['no pickles', 'extra fries']);

  return (
    <div className="App">
     App Blah Blah
    </div>
  );
}

export default App;
