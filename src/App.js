import { useState } from 'react';
import './App.css';
import OrderImages from './components/OrderImages';
import FoodDropdown from './components/Dropdowns/FoodDropdown';
import DrinkDropdown from './components/Dropdowns/DrinkDropdown';
import SideDropdown from './components/Dropdowns/SideDropdown';
import InstructionList from './components/Instructions/InstructionList';
import InstructionForm from './components/Instructions/InstructionForm';
import OrderName from './components/OrderName';

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
        <OrderImages
          foodId={foodId}
          sideId={sideId}
          drinkId={drinkId} />

        <div className='dropdowns'>
          <FoodDropdown setFoodId={setFoodId} />
          <SideDropdown setSideId={setSideId} />
          <DrinkDropdown setDrinkId={setDrinkId} />
        </div>

        <OrderName setOrderName={setOrderName} />
        <InstructionForm setInstructionsArr={setInstructionsArr} instructionsArr={instructionsArr} />
        <InstructionList instructionsArr={instructionsArr} />
      </section>
    </div>
  );
}

export default App;
