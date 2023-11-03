import React from "react";
import BandCard from "./BandCard";

function BandList({ bands, search }) {

  const bandsToDisplay = 
  bands.filter(band => search === '' || band.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <ul className="cards">
      {bandsToDisplay.map(band => <BandCard key={band.id} band={band}/>)}
    </ul>
  );
}

export default BandList;
