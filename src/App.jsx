import About from "./components/About/About";
import Campous from "./components/Campous/Campous";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar"
import Program from "./components/Program/Program";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";


function App() {
 

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="Our PROGRAM" subtitle="What We Offer" />
        <Program />
        <About />
        <Title title="Gallery" subtitle="Campus Photos" />
        <Campous />
        <Title title="TESTIMONIALS" subtitle="What Student Says" />
        <Testimonials />
        <Title title="Contact Us" subtitle="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App
