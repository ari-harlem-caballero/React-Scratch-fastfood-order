import React from 'react';
import { useState } from 'react';

export default function InstructionForm({ instructionsArr, setInstructionsArr }) {
  const [instructionInput, setInstructionInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setInstructionsArr([...instructionsArr, instructionInput]);

    setInstructionInput('');
  }

  function handleChange(e) {
    setInstructionInput(e.target.value);
  }

  return <section className='instruction-form'>
    <form onSubmit={handleSubmit}>
      Add extra instructions:
      <input onChange={handleChange} value={instructionInput} placeholder='instruction'/>
      <button>Submit</button>
    </form>
  </section>;
}
