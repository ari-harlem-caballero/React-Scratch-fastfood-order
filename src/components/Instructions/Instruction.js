import React from 'react';

export default function Instruction({ instruction }) {
  return <ul className='instruction'>
    <li>{instruction}</li>
  </ul>;
}
