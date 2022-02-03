import React from 'react';

export default function DrinkDropdown({ setDrinkId }) {
  function handleChange(e) {
    setDrinkId(e.target.value);
  }

  return <select className='drink-dropdown' onChange={handleChange}>
    <option value="1">Banana Milk</option>
    <option value="2">Mexican Coke</option>
    <option value="3">Horchata</option>
    <option value="4">Ramune</option>
  </select>;
}
