import NavBar from "../components/NavBar";

function About() {
  return (
    <div className="about-image">
      <header>
        <NavBar />
      </header>
      <h1 id="about-text">Discover concerts for your favorite rock bands.</h1>
      <p id="about-subtext"></p>
    </div>
  );
}

export default About;