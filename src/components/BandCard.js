import React, { useState } from "react";

function BandCard({ band }) {
  const [tracking, setTracking] = useState(true)

  function onClickTracking() {
    setTracking(tracking => !tracking)
  }
  
  return (
    <li className="card">
      <img src={band.image} alt={band.name} />
      <h4>{band.name}</h4>
      <p>Years active: {band.years_active}</p>
      <p>Origin: {band.origin}</p>
      {tracking ? (
        <button className="primary" onClick={onClickTracking}>Track band</button>
      ) : (
        <button onClick={onClickTracking}>Tracking</button>
      )}
    </li>
  );
}

export default BandCard;
