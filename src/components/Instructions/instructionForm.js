import React from 'react';
import { useState } from 'react';

export default function InstructionForm() {
  return <section>
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange}/>
      <button>Submit</button>
    </form>
  </section>;
}
