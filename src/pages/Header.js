function Header() {
  return (
    <header>
      <h1>
        Rock Bandpedia
        <span className="logo" role="img">
          💀 
        </span>
      </h1>
      <h4>The encyclopedia of rock bands!</h4>
      <div id="monster-header">
        <img
          src="../images/background.webp"
          alt="monster-header"
        />
      </div>
    </header>
  );
}

export default Header;
