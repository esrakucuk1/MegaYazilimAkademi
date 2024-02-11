import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";


function Home() {
  return (
    <>
    <Navbar/>
      <Hero
        cname="hero"
        heroimg="https://www.meram.bel.tr/upload/medya/MRM1420.jpg"
        title="Senin Belediyen Senin Eserin"
        text="Pöpüler Tesisini Keşfet"
        btnclass="show"
        url="/"
        buttontext="Tesisleri Keşfet"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
}

export default Home;
