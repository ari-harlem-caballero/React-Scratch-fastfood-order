import React from 'react';

export default function FoodDropdown({ setFoodId }) {
  function handleChange(e) {
    setFoodId(e.target.value);
  }

  return <select className='food-dropdown' onChange={handleChange}>
    <option value="1">Chicken Strip</option>
    <option value="2">Corndog</option>
    <option value="3">Chicago Dog</option>
    <option value="4">Tacos</option>
  </select>;
}
