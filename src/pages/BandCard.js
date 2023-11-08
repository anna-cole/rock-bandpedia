import { useState } from "react";
import { Link } from "react-router-dom";

function BandCard({ band }) {
  const [tracking, setTracking] = useState(true)

  function onClickTracking() {
    setTracking(tracking => !tracking)
  }
  
  return (
    <li className="card">
      <img src={band.image} alt={band.name} />
      <h4>{band.name}</h4>
      <article>
        <Link to={`/band/${band.id}`}>View band info</Link>
      </article>
      {tracking ? (
        <button className="primary" onClick={onClickTracking}>Track band</button>
      ) : (
        <button onClick={onClickTracking}>Tracking</button>
      )}
    </li>
  );
}

export default BandCard;
