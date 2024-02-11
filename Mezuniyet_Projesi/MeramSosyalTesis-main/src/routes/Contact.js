import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";



function Contact() {
  return (
    <>
      <Navbar/>
      <Hero
        cname="hero-mid"
        heroimg="https://www.meram.bel.tr/upload/medya/HE5B5542.jpg"
        title="İletişim"
        url="/"
      />
      <ContactForm/> 
      <Footer/>
    </>
  );
}

export default Contact;
