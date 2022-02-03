import React from 'react';
import Instruction from './Instruction';

export default function InstructionList({ instructionsArr }) {
  return <div className='instruction-list'>
    {instructionsArr.map((instruction, i) => <Instruction key={`${instruction}-${i}`} instruction={instruction} />)}
  </div>;
}
