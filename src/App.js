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
      <h1>Welcome to the Hippest Joint in Town</h1>
      <h3>Order for {orderName}</h3>
      <section className='order-area'>
        <orderImages
          foodId={foodId}
          sideId={sideId}
          drinkId={drinkId} />
      </section>
    </div>
  );
}

export default App;
