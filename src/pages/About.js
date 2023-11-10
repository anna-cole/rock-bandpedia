import NavBar from "../components/NavBar";

function About() {
  return (
    <div className="about-image">
      <header>
        <NavBar />
      </header>
      <h1 id="about-text">Discover concerts for your favorite rock bands.</h1>
      <p id="about-subtext">Rock Bandpedia is a free-content online encyclopedia about rock bands. Here you can find your favorite rock bands, their info and tour announcements.</p>
    </div>
  );
}

export default About;