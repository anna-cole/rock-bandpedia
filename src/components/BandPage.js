import React, { useEffect, useState }  from "react";
import NewBandForm from "./NewBandForm";
import BandList from "./BandList";
import Search from "./Search";

function BandPage() {
  const [bands, setBands] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/bands')
    .then(r => r.json())
    .then(bands => setBands(bands))
  }, [])

  function submitNewBand(newBand) {
    setBands([...bands, newBand])
  }

  return (
    <main>
      <NewBandForm submitNewBand={submitNewBand} />
      <Search onChangeText={e => setSearch(e.target.value)} search={search} />
      <BandList bands={bands} search={search}/>
    </main>
  );
}

export default BandPage;
