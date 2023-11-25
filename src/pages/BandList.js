import BandCard from "./BandCard";

function BandList({ bands }) {
  return (
    <ul className="cards">
      {bands.map(band => <BandCard key={band.id} band={band}/>)}
    </ul>
  );
}

export default BandList;
