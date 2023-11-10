import NavBar from "../components/NavBar";

function About() {
  return (
    <div className="about-image">
      <header>
        <NavBar />
      </header>
      <h1 id="about-text">Discover concerts for your favorite artists.</h1>
      <p id="about-subtext">Find your favorite artists, their info and tour announcements</p>
    </div>
  );
}

export default About;