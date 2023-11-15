import NavBar from "../components/NavBar";

function Concerts() {
  return (
    <div className="concert-image">
      <header>
        <NavBar />
      </header>
      <h1 id="concert-text">Concerts</h1>
      <p id="concert-subtext">All upcoming concerts from the bands you’re tracking.</p>
      <p className="concert-info">Saturday, 11 November 2023<br></br>Guns N' Roses<br></br>Whisky A Go Go, Los Angeles, CA<br></br><br></br>Sunday, 12 November 2023<br></br>Red Hot Chili Peppers<br></br>The Viper Room, Los Angeles, CA<br></br><br></br>Monday, 13 November 2023<br></br>Metallica<br></br>Troubadour, Los Angeles, CA</p>
    </div>
  );
};

export default Concerts;