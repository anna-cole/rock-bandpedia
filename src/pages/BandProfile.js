import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar";

function BandProfile() {
  const [band, setBand] = useState({});
  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    fetch(`http://localhost:6001/bands/${userId}`)
    .then(r => r.json())
    .then(data => setBand(data))
    .catch(error => console.error(error))
  }, [userId]);

  if(!band.name){
    return <h1>Loading...</h1>;
  };
  
  return(
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <li>
          <h1>{band.name}</h1><br></br>
          <p>Years active: {band.years_active}</p>
          <p>Origin: {band.origin}</p>
          <p>On tour? {band.on_tour}</p>
        </li><br></br>
        <img src={band.image} alt={band.name} />
      </main>
    </>
  );
};

export default BandProfile;