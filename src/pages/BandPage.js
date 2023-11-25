import { useEffect, useState }  from "react";
import NewBandForm from "./NewBandForm";
import Search from "./Search";
import BandList from "./BandList";

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

  const bandsToDisplay = 
  bands.filter(band => search === '' || band.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewBandForm submitNewBand={submitNewBand} />
      <Search onChangeText={e => setSearch(e.target.value)} search={search} />
      <BandList bands={bandsToDisplay} />
    </main>
  );
}

export default BandPage;
