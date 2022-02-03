import React from 'react';

export default function OrderImages({ foodId, sideId, drinkId }) {
  return <div className='order-images'>
    <img src={`food-${foodId}.jpg`}/>
    <img src={`side-${sideId}.jpg`}/>
    <img src={`drink-${drinkId}.jpg`}/>
  </div>;
}
