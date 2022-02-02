import React from 'react';

export default function OrderName({ setOrderName }) {
  function handleChange(e) {
    setOrderName(e.target.value);
  }

  return <div className='name-input'>
    <input onChange={handleChange} placeholder='your name here'/>
  </div>;
}
