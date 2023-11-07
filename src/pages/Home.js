import NavBar from "../components/NavBar";
import Header from "./Header";
import BandPage from "./BandPage";

function Home() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <BandPage />
    </div>
  );
}

export default Home;
