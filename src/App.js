import { useState } from 'react';
import './App.css';
import orderImages from './components/orderImages';
import foodDropdown from './components/Dropdowns/foodDropdown';
import drinkDropdown from './components/Dropdowns/drinkDropdown';
import sideDropdown from './components/Dropdowns/sideDropdown';
import InstructionList from './components/Instructions/InstructionList';
import instructionForm from './components/Instructions/instructionForm';
import orderName from './components/orderName';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [orderName, setOrderName] = useState('Your Name Here');
  const [instructionsArr, setInstructionsArr] = useState(['no pickles', 'extra fries']);

  return (
    <div className="App">
      <h1>Welcome to the Hippest Joint in Town</h1>
      <h3>Order for {orderName}</h3>
      <section className='order-area'>
        <orderImages
          foodId={foodId}
          sideId={sideId}
          drinkId={drinkId} />
        <div className='dropdowns'>
          <foodDropdown setFoodId={setFoodId} />
          <sideDropdown setSideId={setSideId} />
          <drinkDropdown setDrinkId={setDrinkId} />
        </div>
        <orderName setOrderName={setOrderName} />
        <instructionForm setInstructionsArr={setInstructionsArr} instructionsArr={instructionsArr} />
        <InstructionList instructionsArr={instructionsArr} />
      </section>
    </div>
  );
}

export default App;
