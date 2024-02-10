import Navbar from "./Componets/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Componets/Banner/Banner";
import Services from "./Componets/Services/services";
import Client from "./Pages/Client-section";
import Contact from "./Pages/Contact";
import "./App.css";
import Fields from "./Componets/Fields";
import "react-chatbot-kit/build/main.css";

import About from "./Pages/About";
import AppDevelopment from "./Pages/Developments/AppDevelopment";
import WebDevelopment from "./Pages/Developments/WebDevelopment";
import Footer from "./Componets/Footer/Footer";
import ScrollToTopOnNavigation from "./scrollTopNavigate";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import Soon from "./Componets/Soon/Soon";
import Portfolio from "./Pages/Portfolio/Portfolio";
import DigitalMarketing from "./Pages/Digital/Newdigital";
import ErpDevelopment from "./Pages/Erpdevelopment/ErpDevelopment";
import Softdevelopment from "./Pages/Soft/Softdevelopment";

function App() {
  const [scroll, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 195) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div data-aos-delay="0" data-aos-easing="ease" data-aos-duration="400">
      <BrowserRouter >
        <Navbar scroll={scroll} />
        <ScrollToTopOnNavigation />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="*" element={<Soon />} />
          <Route path="/about" element={<About />} />
          <Route path="/appDevelopment" element={<AppDevelopment />} />
          <Route path="/webDevelopment" element={<WebDevelopment />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/erp-developement" element={<ErpDevelopment />} />
          <Route path="/software-development" element={<Softdevelopment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Soon />} />
          <Route path="/portfolio-section" element={<Portfolio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="all-container">
      {loading ? (
        <div className="loading-screen">
          <img
            src="img/logo/Dhanwis Logo-01.png"
            alt="Team Logo"
            width="400"
            height="auto"
            data-aos="zoom-out-down"
            data-aos-duration="1000"
          />
        </div>
      ) : (
        <>
          {" "}
          <Banner />
          <Fields />
          <Services />
          <Client />
        </>
      )}
    </div>
  );
};

export default App;
