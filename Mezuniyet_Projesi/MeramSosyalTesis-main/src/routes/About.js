import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
    <Navbar/>
      <Hero
        cname="hero-mid"
        heroimg="https://www.meram.bel.tr/upload/medya/HE5B5613.jpg"
        title="Hakkımızda"
        url="/"
      />
      <AboutUs/>
      <Footer/>
    </>
  );
}

export default About;
