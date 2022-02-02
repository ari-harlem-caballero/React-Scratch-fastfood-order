import React from 'react';

export default function SideDropdown({ setSideId }) {
  function handleChange(e) {
    setSideId(e.target.value);
  }

  return <select className='side-dropdown' onChange={handleChange}>
    <option value="1">Elote</option>
    <option value="2">Taiyaki</option>
    <option value="3">Tteokkochi</option>
    <option value="4">Onigiri</option>
  </select>;
}
