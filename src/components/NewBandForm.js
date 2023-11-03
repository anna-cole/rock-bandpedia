import React, { useState } from "react";

function NewBandForm({ submitNewBand }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [yearsActive, setYearsActive] = useState('')
 
  function handleSubmit(e) {
    e.preventDefault()
    const newBand = {name, image, yearsActive}
    fetch('http://localhost:6001/bands', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newBand)
    })
    .then(r => r.json())
    .then(newBand => submitNewBand(newBand))
    .then(setName(''))
    .then(setImage(''))
    .then(setYearsActive(''))
  }
 
  return (
    <div className="new-band-form">
      <h2>New Band</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Band name" value={name} onChange={e => setName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)}/>
        <input type="text" name="years_active" placeholder="Years active" value={yearsActive} onChange={e => setYearsActive(e.target.value)}/>
        <button type="submit">Add Band</button>
      </form>
    </div>
  );
}

export default NewBandForm;
